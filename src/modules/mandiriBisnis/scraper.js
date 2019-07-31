process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const phantom = require('phantom');
const Promise = require('bluebird');
const parser = require('./parser');
const urls = require('./urls');
const path = require('path');
const {writeFile, readFileSync} = require('fs');
const moment = require('moment');
const Dates = require('date-math');
const querystring = require('querystring');
const Scraper = {
  login,
  getMutasi,
  logout,
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
      .then(() => {
        const options = {
          url: 'https://mcm.bankmandiri.co.id/corp/common/login.do?action=menuRequest',
          qs: {
            action: 'menuRequest'
          },
        }
        setRefererHeader(options, 'https://mcm.bankmandiri.co.id/corp/common/login.do?action=doMainFrame')
        return http.get(options)
          .get('body')
          .tap(http.saveHtml('stepLogin2'))
          .then(() => parser.cookieHttp(http.getCookies()))
      })
      .tap(({Cookie, cookieString}) =>
        http.saveFile('cookieStrL1', {ext: 'txt'})(cookieString))
  }
}

function getMutasi(http, options = {}) {
  const {query = {}} = options
  const Headers = {
    'upgrade-insecure-requests': 1,
    'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    authority: 'mcm.bankmandiri.co.id',
  }
  return Promise.resolve()
    .then(() => {
      const options = {
        url: urls.transaction,
        headers: Headers,
      }
      setRefererHeader(options, urls.menuRequest)
      return http.get(options)
        .get('body')
        .tap(http.saveHtml('getMutasi0'))
        .then(parser.paraseInquiry)
    })
    .then((urlInquiry) => {
      const options = {
        url: urlInquiry,
      }
      setRefererHeader(options, urls.menuRequest)
      return http.get(options)
        .get('body')
        .tap(http.saveHtml('getMutasi1'))
        .then(parser.fetchNoRekening)
    })
    .then((noReks) => {
      return Promise.mapSeries(noReks, (noRek, index) =>
        Promise.resolve({noRek, index})
          .then(({noRek, index}) => getMutasion({noRek, index, query}))
      )
    })
    .then(parser.concatArrayMutasi)
    .tap(http.saveJson('mapMutasi'))
    .then((mutasi) => {
      return Object.assign({}, {
        mutasi,
        cookie: parser.cookieHttp(http.getCookies()),
        saldo: 0,
      })
    })

    function getMutasion({noRek, index, query}) {
      const postQuery = generatePostQuery(noRek, query)
      const options = {
        url: `${urls.getMutasi}${postQuery.query}`,
        form: postQuery.post,
      }
      return http.post(options)
        .get('body')
        .tap(http.saveHtml(`resultMutasi${index}`))
        .then((html) => parser.parserMutasi({html, noRek}))
    }

    function generatePostQuery(noRek, queries) {
      let {from_date, to_date} = queries;
      from_date = moment(from_date).format('DD-MM-YYYY').split('-');
      to_date = moment(to_date).format('DD-MM-YYYY').split('-');
      let today = new Date();
      let transferDateDay1 = Number(from_date[0]);
      let transferDateMonth1 = Number(from_date[1]);
      let transferDateYear1 = Number(from_date[2]);
      let transferDateDay2 = Number(to_date[0]);
      let transferDateMonth2 = Number(to_date[1]);
      let transferDateYear2 = Number(to_date[2]);
      let transactionType = '%';
      let timeLength =  new Date(today.getFullYear(), today.getMonth() + 1 , 0).getDate();
      let showTimeLength = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
      let screenState = 'TRX_DATE';
      let checkDate = 'Y';
      let archiveFlag = 'N';
      let accountType = 'S';
      let accountTypeCode = '';
      let accountNumber = noRek;
      let accountDisplay = noRek;
      let accountNm = 'MASINDO BUANA WISATA';
      let curr = 'IDR';
      let currDisplay = 'IDR';
      let frOrganizationUnit = '12412';
      let customFile= 'CSV';

      let post = {
        customFile,
        accountNm,
        frOrganizationUnit,
        accountNm,
        transferDateDay1,
        transferDateDay2,
        transferDateMonth1,
        transferDateMonth2,
        transferDateYear1,
        transferDateYear2,
        transactionType,
        timeLength,
        showTimeLength,
        screenState,
        checkDate,
        archiveFlag,
        accountType,
        accountNumber,
        accountDisplay,
        curr,
        currDisplay,
        accountTypeCode,
      }
      let query = {
        action: 'downloadTrxInquiry',
        day1: transferDateDay1,
        day2: transferDateDay2,
        mon1: transferDateMonth1,
        mon2: transferDateMonth2,
        year1: transferDateYear1,
        year2: transferDateYear2,
        accountNumber,
        frOrganizationUnitNm: '',
        accountType,
        currDisplay,
        type: 'download',
        screen: 'search',
        trxFilter: '%25'
      }
      return {post, query: querystring.stringify(query)}
    }
}

function logout(http, options = {}) {
  const {cridentials} = options;
  return Promise.resolve()
    .then(() => {
      const options = {
        url: urls.logout,
        qs: {
          action: 'logout'
        }
      }
      return http.get(options)
        .get('body')
        .tap(http.saveHtml('Logout'))
    })
}

function setRefererHeader(options = {}, referer = '') {
  options.headers = options.headers || {};
  options.headers.Referer = referer;
  return options;
}
