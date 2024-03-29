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
  getBalance,
}

function getBalance(html) {
  const $ = cheerio.load(html)
  const tagTr = $('#tabel-saldo').find('tr[class="x"]').get()
  const balance = tagTr.map((item) => {
    const tds = $(item).find('td')
    const noRek = tds.eq(0).text().trim()
    const saldo = tds.eq(4).text().trim().replace(/\./g, '')
    return {noRek, saldo}
  })
  return balance;
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

function getDataMutasi(html, query) {
  const accoutNo = getAccountNo(html);
  const form = parserFormMutasi(html, query);
  return {accoutNo, form}
}

function getMutasiData(html) {
  const $ = cheerio.load(html);
  const title = $('title').text();
  if (/Transaksi Error/g.test(title)) {
    let messageError = $('.form h2.errorresp').text()
    messageError += ' - Tunggu sekitar 15 menit untuk menunggu cookie kedaluwarsa'
    throw new Error(messageError)
  }
  const mutasi = [];
  const tagTr = $('#tabel-saldo').find('tr').get().filter((item) => {
    if ($(item).find('td').eq(0).text().trim()) return item
  })
  tagTr.map((item, index) => {
    const tag = $(item).find('td');
    let type = '';
    let nominal = ''
    let tanggal = tag.eq(0).text().split('/');
    // tanggal = new Date(dateFormat(`${tanggal[1]} ${tanggal[0]} ${tanggal[2]}`, "d mmmm yyyy"));
    tanggal = moment(`${tanggal[0]} ${tanggal[1]} ${tanggal[2]}`, 'DD MM YY').format('YYYY-MM-DD')
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

function parserFormMutasi(html, query) {
  const $ = cheerio.load(html);
  const {from_date, to_date} = query;
  const fromDate = moment(from_date, 'DD-MM-YYYY');
  const toDate = moment(to_date, 'DD-MM-YYYY');

  let posts = $('form').serializeArray();
  let post = {};
  posts.forEach((item) => {
    post[item.name] = item.value;
  });
  post.FROM_DATE = fromDate.format('YYYY-MM-DD');
  post.TO_DATE = toDate.format('YYYY-MM-DD');
  post.DDAY1 = fromDate.format('DD');
  post.DMON1 = fromDate.format('MM');
  post.DYEAR1 = fromDate.format('YYYY');
  post.DDAY2 = toDate.format('DD');
  post.DMON2 = toDate.format('MM');
  post.DYEAR2 = toDate.format('YYYY');
  post.MONTH = toDate.format('MM');
  post.YEAR = toDate.format('YYYY');
  // post['data-lenght'] = 2;
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
