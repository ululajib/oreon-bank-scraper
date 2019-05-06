const cheerio = require('cheerio');
const moment = require('moment');
const dateFormat = require('dateformat');

module.exports = {
  formLogin,
  loginPost,
  parserFormMutasi,
  checkCookie,
  cookieHttp,
  getAccountNo,
  getMutasiData,
  getDataMutasi,
  checkIsUseAccount,
  concatArrayMutasi,
}

function concatArrayMutasi(array) {
  const result = [];
  array.map((items) => {
    items.map((item) => {
      result.push(item)
    })
  })

  return result;
}

function getDataMutasi(html) {
  const accoutNo = getAccountNo(html);
  const form = parserFormMutasi(html);
  return {accoutNo, form}
}

function getMutasiData(html) {
  const $ = cheerio.load(html);
  const mutasi = []
  const tagTr = $('#tabel-saldo').find('tr').get().filter((item) => {
    if ($(item).find('td').eq(0).text().trim()) return item
  })
  tagTr.map((item, index) => {
    const tag = $(item).find('td');
    let type = '';
    let nominal = ''
    let tanggal = tag.eq(0).text().split('/');
    tanggal = new Date(dateFormat(`${tanggal[1]} ${tanggal[0]} ${tanggal[2]}`, "d mmmm yyyy"));
    const noRek = $('#ACCOUNT_NO').val();
    const keterangan = tag.eq(1).text().trim();
    const debet = cleanCurrency(tag.eq(2).text().trim());
    const kredit = cleanCurrency(tag.eq(3).text().trim());

    if (debet) {
      type = 'debit';
      nominal = debet;
    }else if (kredit) {
      type = 'kredit';
      nominal = kredit;
    }

    mutasi.push({type, nominal, keterangan, tanggal, noRek})
  })
  return mutasi
}

function cleanCurrency(str) {
  return str.replace(',00', '').split('.').join('');
}

function getAccountNo(html) {
  const $ = cheerio.load(html);
  const tagOptions = $('#ACCOUNT_NO').find('option').get().filter((item) => {
    if ($(item).val().length) return $(item).val();
  })
  const accoutNo = tagOptions.map((item) => {
    return item.attribs.value;
  })
  return accoutNo;
}

function checkCookie(html) {
  const $ = cheerio.load(html);
  const check = $('#frm1 h4').text();
  if (/Form Permintaan Mutasi Rekening/ig.test(check)) {
    return true
  }
  return false
}

function cookieHttp(cookies) {
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

function checkIsUseAccount(html) {
  const $ = cheerio.load(html);
  let error = false, message = '';
  const isUseAccount = $('#errormsg-wrap h2').text().trim();
  if (isUseAccount) {
    error = true;
    message = isUseAccount;
  }
  const errorCode = $('title').text()
  if (/General Error/ig.test(errorCode)) {
    error = true;
    message = $('#form-wrap > form > h2').text();
  }

  return {error, message};
}

function parserFormMutasi(html) {
  const $ = cheerio.load(html);
  const fromDate = moment().format('YYYY-MM-DD');
  const toDate = moment().format('YYYY-MM-DD');

  let posts = $('form').serializeArray();
  let post = {};
  posts.forEach((item) => {
    post[item.name] = item.value;
  });
  post.FROM_DATE = fromDate;
  post.TO_DATE = toDate;
  post['data-lenght'] = 2;
  post.ACCOUNT_NO = '114701000616535';
  post.submitButton = 'Tampilkan';
  return post;
}

function formLogin(html) {
  const $ = cheerio.load(html);
  let posts = $('#loginForm').serializeArray();
  let post = {};
  posts.forEach((item) => {
    post[item.name] = item.value;
  });
  return post;
}

function loginPost(html) {
  console.log(html);
  return 'ajib';
}
