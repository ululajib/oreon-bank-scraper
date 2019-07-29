const Promise = require('bluebird');
const parser = require('./parser');
const urls = require('./urls');
const path = require('path');
const utils = require('./utils');
const {getKeyAndPassCrypto} = require('../../libs/CryptoJS');
module.exports = {
  login,
  getMutasi,
}
function login(http, options = {}) {
  const {cridentials} = options;
  const {username, password} = cridentials;
  let cookie = (cridentials.Cookie) ? cridentials.Cookie : '';
  if (cridentials.Cookie) {
    http.setCookies(cookie)
    return checkCookies()
      .then((isTimeOut) => {
        if (isTimeOut) {
          return doLogin();
        }
        return parser.cookieHttp(http.getCookies())
      })
      .tap(console.log)
      .tap(({Cookie, cookieString}) => http.saveJson('cookieArray0')(Cookie))
  }

  return doLogin()

  function checkCookies() {
    return Promise.resolve()
      .then(() => {
        const options = {
          url: urls.isTimeOut
        }
        return http.get(options)
          .get('body')
          .then(eval)
      })
  }

  function doLogin() {
    return Promise.resolve()
      .then(() => {
        const options = {
          url: urls.login,
        }
        return http.get(options)
          .get('body')
          .tap(http.saveHtml('getLoggedIn'))
          .then(parser.getFormDataLogin)
      })
      .then((postParams) => {
        const {exp, mod} = utils.getEXPandMOD()
        const {key1, key2, userPassCrypto} = getKeyAndPassCrypto(password)
        const query = {
          exp, mod, key1, key2,
          userPassCrypto,
          userId:
          username,
          password,
          isFailed: 'N'
        }
        const options = {
          url: urls.getRandomNumber,
          form: Object.assign({}, postParams, query)
        }
        return http.post(options)
          .get('body')
          .then(JSON.parse)
          .then(({randomNumber}) => parser
          .getFromIsQuery({randomNumber, postParams, query}))
      })
      .then((form) => {
        const options = {
          url: urls.loginExecute,
          form,
          headers: {Referer: urls.login}
        }
        return http.post(options)
          .get('body')
          .tap(http.saveHtml('getLoggedIn1'))
          .then(parser.checkLogin)
      })
      .then(() => parser.cookieHttp(http.getCookies()))
      .tap(({Cookie, cookieString}) => http.saveJson('cookieArray1')(Cookie))
  }
}

function getMutasi(http, options = {}) {
  const {query = {}} = options
  return Promise.resolve()
    .then(() => {
      const options = {
        url: urls.searchRequestBalance,
        headers: {
          Referer: urls.sckelaton,
          'Content-Type': 'application/json',
        },
        qs: {
          firstTimeLogin: 'N',
          success: true
        }
      }
      return http.get(options)
        .get('body')
        .tap(http.saveHtml('searchRequestBalance'))
        .then(parser.getRequestBalance)
    })
    .then((accountBalaces) => {
      return Promise.mapSeries(accountBalaces, ({accountNo, accountType}, index) => {
        const options = {
          url: `${urls.getBalance}${accountNo}`,
          headers: {
            Referer: urls.sckelaton,
            Accept: 'application/json',
          },
        }
        return http.get(options)
          .get('body')
          .tap(http.saveJson(`getBalance-${index}`))
          .then(JSON.parse)
          .then((balance) => {
            balance.accountNo = accountNo;
            balance.accountType = accountType;
            return balance;
          })
      })
    })
    .then((balances) => {
      return Promise.mapSeries(balances, (balance) => {
        const {form, params} = utils.searchTransaction(balance)
        return form;
      })
    })

}
