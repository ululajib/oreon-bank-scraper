const cheerio = require('cheerio');
const moment = require('moment');
const {getCEncAndPEnc} = require('../../libs/pinEncryption');

module.exports = {
  getFormDataLogin,
  getFromIsQuery,
  checkLogin,
  getRequestBalance,
  cookieHttp,
}

function getRequestBalance(html) {
  const $ = cheerio.load(html)
  const dataAccount = $('#savingList').val()
  return JSON.parse(dataAccount);
}

function getFormDataLogin(html) {
  const $ = cheerio.load(html);
  const form = $('form').serializeArray();
  const postData = {}
  form.forEach((item) => {
    postData[item.name] = item.value;
  });
  return postData;
}

function getFromIsQuery({randomNumber, postParams, query}) {
  const {cEnc, pEnc} = getCEncAndPEnc({randomNumber, query})
  delete query.password
  return Object.assign({}, postParams, {randomNumber, cEnc, pEnc}, query);
}

function checkLogin(html) {
  const $ = cheerio.load(html)
  const loginName = $('#loginName').text().trim();
  const globalErrorMessage = $('#globalErrorMessage').text().trim();
  const errorMessage = $('#errorMessage').text().trim();

  if (loginName) {
    return true;
  }
  if (globalErrorMessage) {
    throw new Error(globalErrorMessage)
  }
  if (errorMessage) {
    throw new Error(errorMessage)
  }
}

function cookieHttp(cookies) {
  console.log(cookies);
  cookies = parserJson(cookies);
  const Cookie = cookies.map((cookie) => {
    let {key, value} = cookie
    if (typeof key === 'undefined') {
      key = 'foo'
      value = 'bar'
    }
    return `${key}=${value}`;
  })
  .filter((item) => {
    return item !== 'foo=bar';
  })
  return {
    Cookie,
    cookieString: Cookie.join('; ')
  }
  function parserJson(cookie) {
    return JSON.parse(JSON.stringify(cookie));
  }
}
