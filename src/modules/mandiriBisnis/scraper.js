const phantom = require('phantom');
const Promise = require('bluebird');
const parser = require('./parser');
const urls = require('./urls');
const path = require('path');
const {writeFile, readFileSync} = require('fs');
const moment = require('moment');
const Scraper = {
  login,
}
module.exports = Scraper;
function login(http, options = {}) {
  const {cridentials} = options
  const {username, password} = cridentials
  let cookie = (cridentials.Cookie) ? cridentials.Cookie : '';
  if (cridentials.Cookie) {
    http.setCookies(cookie)
    return checkLogin()
      .then((loggedIn) => {
        if (loggedIn) {
          return parser.cookieHttp(http.getCookies());
        }
        return doLogin()
      })
      .tap(({Cookie, cookieString}) =>
        http.saveFile('cookieStrL1', {ext: 'txt'})(cookieString))
  }

  function checkLogin() {
    return Promise.resolve()
      .then(() => {
        const options = {
          url: urls.menuRequest,
          headers,
          qs: {
            action: 'menuRequest'
          },
        }
        return http.get(options)
          .get('body')
          .tap(http.saveHtml('stepLogin2'))
          .then(parser.checkCookie)
      })
  }

  return doLogin()
  function doLogin() {
    return Promise.resolve()
      .then(() => {
        const options = {
          url: urls.logout
        }
        return http.get(options)
          .get('body')
          .tap(http.saveHtml('getFromLogin'))
          .then((html) => parser.getFromLogin({html, cridentials}))
      })
      .then((form) => {
        const options = {
          url: urls.login,
          form,
          qs: {
            action: 'login'
          },
        }
        setRefererHeader(options, urls.logout)
        return http.post(options)
          .get('body')
          .tap(http.saveHtml('loginStep0'))
          .then(parser.checkLogin)
          .then(() => parser.cookieHttp(http.getCookies()))
      })
      .tap(({Cookie, cookieString}) =>
        http.saveFile('cookieStrL1', {ext: 'txt'})(cookieString))
  }

}

function setRefererHeader(options = {}, referer = '') {
  options.headers = options.headers || {};
  options.headers.Referer = referer;
  return options;
}
