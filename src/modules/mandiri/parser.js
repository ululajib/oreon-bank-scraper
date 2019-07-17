const cheerio = require('cheerio');
const moment = require('moment');
const striptags = require('striptags');
const Dates = require('date-math');
const dateFormat = require('dateformat');

module.exports = {
  getFormLogin,
  getNorek,
  getFormDataMutasi,
  getMutasi,
  checkLoing,
  checkLogin2,
  concatArrayMutasi,
}

function checkLoing(res) {
  const html = res.body;
  if (/System Error/i.test(html)) {
    throw new Error('System Error !')
  }
  const $ = cheerio.load(html)
  const error = $('font[class="alert"]').html();
  if (error) {
    const message = striptags(error.trim().replace(/\s\s/, ' '));
    if (/User telah melakukan login/i.test(message)) {
      throw new Error('User telah login, harap tunggu hingga cache habis')
    }
    else {
      throw $('html').text();
    }
  }
  return res;
}

function checkLogin2(res) {
    const html = res.body;
    res.isCheckLogin = true
    if (/System Error/i.test(html)) {
      res.isCheckLogin = false;
    }
    const $ = cheerio.load(html)
    const error = $('font[class="alert"]').html();
    if (error) {
      res.isCheckLogin = false;
    }
    return res;
}

function getFormLogin({html, cridentials}) {
  const {username, password} = cridentials;
  const $ = cheerio.load(html)
  let url = $('#formAction').val();
  let posts = $('form').serializeArray();
  let post = {};
  posts.forEach((item) => {
    post[item.name] = item.value;
  });
  post.userID = username;
  post.password = password;
  return post;
}

function getNorek(html) {
  const $ = cheerio.load(html)
  const output = [];
  $('select[name="fromAccountID"]').find('option').each(function(index, el) {
    let idRek = $(this).val();
    let noRek = parseInt($(this).text().trim());
    if(idRek){
      output.push({noRek, idRek});
    }
  });
  return output;
}

function getFormDataMutasi(html, noRek, query) {
  const $ = cheerio.load(html)
  const {from_date, to_date} = query;
  let url = $('#formAction').val();
  let posts = $('form').serializeArray();
  let post = {};
  posts.forEach((item) => {
    post[item.name] = item.value;
  });
  // let mont_ago = get_mont_ago();
  const [frDay, frMonth, frTh] = moment(from_date, 'DD-MM-YYYY')
    .format('DD-M-YYYY').split('-')
  const [toDay, toMonth, toTh] = moment(to_date, 'DD-MM-YYYY')
    .format('DD-M-YYYY').split('-')

  post.fromAccountID = noRek.idRek;
  post.fromDay = frDay
  post.fromMonth = frMonth
  post.fromYear = frTh
  post.toDay = toDay
  post.toMonth = toMonth
  post.toYear = toTh
  return post;
}

function get_mont_ago() {
  let today = new Date();
  return Dates.day.shift(today, - 20);
}

function getMutasi(html, {noRek}) {
  const $ = cheerio.load(html)
  const errorAlert = $('.alert').text()
  if (errorAlert) {
    throw new Error(errorAlert)
  }
  const saldo = $('#closingbal').text().trim().slice(0, -3).replace(/\./g, '');
  let mutasi = [];
  $('table').find('table:contains("Keterangan Transaksi")').find('tr[height="25"]').each(function(index, el) {
    let tanggal = $(this).find('td').first().text().split('/');
    tanggal = new Date(dateFormat(`${tanggal[1]} ${tanggal[0]} ${tanggal[2]}`, "d mmmm yyyy"));
    let keterangan = $(this).find('td:nth-child(2)').html().mytrim().replace(/\<br\>/g, '\n');
    // keterangan = (keterangan);
    let debet = $(this).find('td:nth-child(3)').text().trim().slice(0, -3).replace(/\./g, '');
    let kredit = $(this).find('td:nth-child(4)').text().trim().slice(0, -3).replace(/\./g, '');
    let type = '';
    let nominal = '';
    if(debet != 0) {
      type = 'debit';
      nominal = debet;
    } else if(kredit != 0) {
      type = 'kredit';
      nominal = kredit;
    }
    mutasi.push({type, nominal, keterangan, tanggal, noRek });
  });
  return mutasi;
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

String.prototype.mytrim = function() {
  return this.trim().replace(/\s\s+/g, ' ');
}
