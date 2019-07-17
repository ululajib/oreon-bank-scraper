const phantom = require('phantom');
const Promise = require('bluebird');
const parser = require('./parser');
const urls = require('./urls');
const path = require('path');
const {writeFile, readFileSync} = require('fs');
const moment = require('moment');
const Dates = require('date-math');
const querystring = require('querystring');
const tools = require('../../libs/curl-f');
const Scraper = {
  login,
  getMutasi,
  logout,
}
module.exports = Scraper;

const headers = {
  'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:49.0) Gecko/20100101 Firefox/49.0',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'id-ID,id;q=0.8,en-US;q=0.6,en;q=0.4',
  Connection: 'keep-alive',
  Origin: 'https://ib.bankmandiri.co.id',
  'Upgrade-Insecure-Requests': 1,
}

function login(http, options = {}) {
  const {cridentials} = options
  const {username, password} = cridentials
  let cookie = (cridentials.Cookie) ? cridentials.Cookie : '';
  if (cridentials.Cookie) {
    http.setCookies(cookie)
    return checkLogin()
      .then((response) => {
        if (response.isCheckLogin) {
          return {
            Cookie: response.cookie,
            cookieString: response.cookie
          }
        }
        return doLogin()
      })
  }

  function checkLogin() {
    return Promise.resolve()
      .then(() => {
        const options = {
          cookie,
          headers,
        }
        return tools.curl(urls.mutasi, options)
      })
      .tap((res) => http.saveHtml('checkLogin')(res.body))
      .then((res) => parser.checkLogin2(res))
  }

  return doLogin()
  function doLogin() {
    return Promise.resolve()
      .then(() => {
        return tools.curl(`${urls.login}?action=form&lang=in_ID`)
      })
      .tap((res) => http.saveHtml('loginStep1')(res.body))
      .then((res) => {
        const html = res.body;
        const post = parser.getFormLogin({html, cridentials})
        const options = {
          post,
          cookie: res.cookie,
          headers,
        }
        return tools.curl(`${urls.login}`, options)
      })
      .tap((res) => http.saveHtml('loginStep2')(res.body))
      .then((res) => parser.checkLoing(res))
      .then((res) => res.cookie)
      .then((Cookie) => {
        return {
          Cookie,
          cookieString: Cookie,
        }
      })
  }
}

function getMutasi(http, options = {}) {
  const {query, cookie} = options
  return Promise.resolve()
    .then(() => {
      const options = {
        cookie,
        headers,
      }
      return tools.curl(urls.mutasi, options)
    })
    .tap((res) => http.saveHtml('getFormMutasi')(res.body))
    .then((res) => {
      const noReks = parser.getNorek(res.body)
      return Promise.mapSeries(noReks, (noRek, index) =>
        Promise.resolve()
          .then(() => {
            const post = parser.getFormDataMutasi(res.body, noRek, query)
            const options = {
              post,
              headers,
              cookie: res.cookie
            }
            return tools.curl(urls.mutasi, options)
          })
          .tap((res) => http.saveHtml(`getMutasi-${index}`)(res.body))
          .then((res) => parser.getMutasi(res.body, noRek))
        )
        .then(parser.concatArrayMutasi)
        .tap(http.saveJson('mapMutasi'))
        .then((mutasi) => {
          return Object.assign({}, {
            mutasi,
            cookie: res.cookie,
            saldo: 0,
          })
        })
    })
}

function logout(cookie) {
  return Promise.resolve()
    .then(() => {
      return tools.curl(urls.logout, {cookie, headers})
    })
}

function get_mont_ago() {
  let today = new Date();
  return Dates.day.shift(today, - 20);
}
