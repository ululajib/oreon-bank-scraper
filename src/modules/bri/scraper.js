const phantom = require('phantom');
const Promise = require('bluebird');
const parser = require('./parser');
const urls = require('./urls');
const path = require('path');
const {writeFile, readFileSync} = require('fs');
const moment = require('moment');
const CaptchaSolver = require('../../libs/captcha-solver');
const Scraper = {
  login,
  logout,
  getMutasi,
  checkLoginWithCookie,
}

module.exports = Scraper;

const captchaOptions = {
  driver: 'dbc',
  type: 'custom',
  transform: {
    deleteTemporaryImage: false,
    transforms: [
      {key: 'resize', value: '240x100'},
      {key: 'colorspace', value: 'gray'},
      {key: 'negate'},
      {key: 'threshold', value: '12%'},
      {key: 'blur', value: '10 '},
      {key: 'threshold', value: '43%'},
      {key: 'negate'},
    ],
  },
};
const captchaSolver = CaptchaSolver.create(captchaOptions);

function login(http, options = {}) {
  const {cridentials, userAgent} = options;
  const {username, password} = cridentials;
  let cookie = (cridentials.Cookie) ? cridentials.Cookie : '';
  if (cridentials.Cookie) {
    http.setCookies(cookie)
    return checkLogin()
      .then((loggedIn) => {
        if (loggedIn) {
          return getSaldo()
            .then((balance) => {
              const {Cookie, cookieString} = parser.cookieHttp(http.getCookies())
              return {
                balance,
                Cookie,
                cookieString
              }
            })
        }
        return doLogin()
      })
      .tap(({Cookie, cookieString}) =>
        http.saveFile('cookieStrL1', {ext: 'txt'})(cookieString))
  }

  return doLogin()

  function checkLogin() {
    return Promise.resolve()
      .then(() => {
        const options = {
          url: urls.getFormMutasi,
          headers: {
            Referer: urls.getFormAccount,
          },
        }
        return http.get(options)
          .get('body')
          .tap(http.saveHtml('checkLogin'))
          .then(parser.checkCookie)
      })
  }

  function doLogin() {
    return Promise.resolve()
      .then(getFormDataAndCookie)
      .then(({form, Cookie}) => {
        http.setCookies(Cookie)
        const options = {
          url: urls.loginPost,
          headers: {
            Referer: urls.login,
          },
          form
        }
        return http.post(options)
          .get('body')
          .tap(http.saveHtml('postLogin'))
          .then(parser.checkIsUseAccount)
          .then(({error, message}) => {
            if (error) {
              throw new Error(message);
            }
            return getSaldo()
              .then((balance) => {
                const {Cookie, cookieString} = parser.cookieHttp(http.getCookies())
                return {
                  balance,
                  Cookie,
                  cookieString
                }
              })
          })
          .tap(({Cookie, cookieString}) =>
            http.saveFile('cookieStr', {ext: 'txt'})(cookieString))
      })
  }

  function getSaldo() {
    return Promise.resolve()
      .then(() => {
        const options = {
          url: urls.balance,
          headers: {
            Referer: urls.getFormAccount,
          },
        }
        return http.get(options)
          .get('body')
          .tap(http.saveHtml('getBalance'))
          .then(parser.getBalance)
      })
  }

  /**
  * retrieve the form of post login data and string cookies
  * this run PhantomJs
  * @return Object {form, cookie}
  */
  function getFormDataAndCookie() {
    let sitepage = null;
    let phInstance = null;

    return phantom.create()
      .then((instance) => {
        phInstance = instance
        return phInstance.createPage()
      })
      .then((page) => {
        sitepage = page;
        sitepage.property('viewportSize', {width:500, height: 500});
        sitepage.property('clipRect', {top: 224, left: 224, width: 65, height: 37});
        sitepage.property('customHeaders', {'User-Agent': userAgent})
        return sitepage.open(urls.login)
      })
      .then(() => sitepage.render(path.resolve(`${__dirname}`, '', `htmlBrihome.jpg`)))
      .then(() => sitepage.cookies())
      .then((cookie) => {
        return sitepage.evaluate(function () {
          return document.getElementById('content').innerHTML;
        })
        .then((html) => {
          let formData = {};
          formData = parser.formLogin(html);
          formData.j_password = password;
          formData.j_username = username;
          formData.j_plain_username = username;
          formData.preventAutoPass = '';
          formData.j_plain_password = '';
          formData.j_code = '';
          return {cookie, formData};
        })
      })
      .then(({formData, cookie}) => {
        sitepage.close()
        phInstance.exit()

        cookie = cookie.map(parserCookiesPh);

        return getFormDatalogin(formData)
          .then((form) => {
            return {
              form,
              Cookie: cookie,
            }
          });
      })

  }
}

function logout(http, options = {}) {
  const {cridentials} = options;
  const {Cookie} = cridentials
  http.setCookies(Cookie)
  return Promise.resolve()
    .then(() => {
      const options = {
        url: urls.logout,
        headers: {
          Referer: urls.loginPost,
        }
      }
      return http.get(options)
        .get('body')
        .tap(http.saveHtml('logout'))
    })
    .then(() => {
      const options = {
        url: 'https://ib.bri.co.id/ib-bri/id/logout.htm',
        headers: {
          Referer: 'https://ib.bri.co.id/ib-bri/Logout.html',
        }
      }
      return http.get(options)
        .get('body')
        .tap(http.saveHtml('logout2'))
    })
}

function getMutasi(http, options = {}) {
  const {query} = options
  return Promise.resolve()
    .then(() => {
      const options = {
        url: urls.getFormMutasi,
        headers: {
          Referer: urls.getFormAccount,
        },
      }
      return http.get(options)
        .get('body')
        .tap(http.saveHtml('getFormMutasi'))
        .then((html) => parser.getDataMutasi(html, query))
    })
    .then(getMutasiwithAccount)
    .tap(http.saveJson('Mutaasi'))
    .then((mutasi) => {
      return Object.assign({}, {
        mutasi,
        cookie: parser.cookieHttp(http.getCookies()),
        saldo: 0,
      })
    })

    function getMutasiwithAccount({accoutNo, form}) {
      return Promise.mapSeries(accoutNo, (noRek, index) =>
          Promise.resolve()
            .delay(1000)
            .then(() => {
              form.ACCOUNT_NO = noRek;
              const options = {
                url: urls.getMutasi,
                headers: {
                  Referer: urls.getMutasi,
                },
                form,
              }
              return http.post(options)
                .get('body')
                .tap(http.saveHtml(`mutasiWithNorek${index}`))
                .then(parser.getMutasiData)
            })
        )
        .then(parser.concatArrayMutasi)
        .tap(http.saveJson('mapMutasi'))
    }
}

function checkLoginWithCookie(http, options) {
  const {cridentials: {cookie}} = options
  http.setCookies(cookie)
  return Promise.resolve()
    .then(() => {
      const options = {
        url: urls.getFormAccount,
        headers: {
          Referer: 'https://ib.bri.co.id/ib-bri/Homepage.html'
        }
      }
      return http.get(options)
        .get('body')
        .tap(http.saveHtml('checkLoginCookie'))
    })
}

function getFormDatalogin(formData = {}){
  return Promise.resolve()
    .then(getCaptchaPicture)
    .then(getCaptchaResponse)
    .then(({captcha}) => {
      formData.j_code = captcha;
      return formData;
    })
}

function getCaptchaPicture() {
  return Promise.resolve()
    .then(() => {
      const options = {
        dir: '',
        ext: 'jpg',
        encoding: null,
      }
      return getFile('htmlBrihome', options)
    })
}

function getFile(file, options) {
  const {
    dir = '',
    ext = 'txt',
    encoding = 'utf8',
  } = options;
  const filepath = path.resolve(`${__dirname}`, dir, `${file}.${ext}`);
  const result = readFileSync(filepath, encoding);
  return result;
}

function getCaptchaResponse(buffer) {
  // console.log(buffer);exit();
  return captchaSolver(buffer)
    .then((output) => {
      if (!output.captcha) {
        throw new Error('Captcha solving failed..');
      }
      output.captcha = output.captcha.replace(/\W/g, '');
      return output;
    });
}

function parserCookiesPh(cookieObj) {
  const {value, name, path, domain, maxAge, expires, secure} = cookieObj;
  const cookieStr = [
		`${name && value ? name + '=' + value : ''}`,
		`${path ? ';path=' + path : ''}`,
		`${domain ? ';domain=' + domain : ''}`,
		`${maxAge ? ';max-age=' + maxAge : ''}`,
		`${expires ? ';expires=' + expires.toUTCString() : ''}`,
		`${secure ? ';secure' : ''}`
	].join('');

	return cookieStr;
}
