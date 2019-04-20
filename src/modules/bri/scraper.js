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

function login(oreon, options = {}) {
  console.log(oreon.request);exit()
  const {cridentials, userAgent} = options;
  const {username, password} = cridentials;
  const cookie = (options.cookie) ? options.cookie : '';
  return Promise.resolve()
    .then(getFormDataAndCookie)
    .then(({form, cookie}) => {
      const options = {
        cookie,
        headers: {
          userAgent,
          Origin: urls.uri,
          Referer: urls.login,
        },
        post: form,
      }
      return oreon.request(options)
        .tap((resp) => oreon.saveHtml('postLogin0')(resp.body))
        .then((response) => {
          const {error, message} = parser.checkIsUseAccount(response.body);
          if (error) {
            throw new Error(message);
          }
          return response.cookie;
        })
    })

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
      .then(() => sitepage.render('src/modules/bri/htmlBrihome.jpg'))
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
              cookie: cookie.join('; ')
            }
          });
      })

  }
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
