const tool = require('curl-ganteng');
const jsonfile = require('jsonfile');
const fs = require('fs');
const dateFormat = require('dateformat');
const moment  = require('moment');

module.exports = {
  generate_date,
  parse_mutasi,
  checklogin,
  pad,
  generateDate2,
}

function checklogin(res) {
  if(/Mohon masukkan User ID \/ Password Anda yg benar/i.test(res.body)) {
    tool.save_log(res.body, `log/error_102.html`);
    throw {code: 102, message: 'User/Pass Salah'};
  }
  if(/Anda dapat melakukan login kembali setelah 10 menit/i.test(res.body)) {
    tool.save_log(res.body, `log/error_101.html`);
    throw {code: 101, message: 'User telah login'};
  }
  if(/var err\=\'/i.test(res.body)) {
    tool.save_log(res.body, `log/error_100.html`);
    throw {code: 100, message: 'Sesi expired'};
  }
  let output = {};
  output.cookie = res.cookie;
  output.referer = res.req_url;
  return output;
}

function generate_date() {
  let today = new Date()
  let priorDate = new Date().setDate(today.getDate()-30);
  priorDate = new Date(priorDate);
  let output = {
    today : pad(today.getDate(),2),
    month : today.getMonth() + 1,
    year : today.getFullYear(),
    lastday : pad(priorDate.getDate(),2),
    lastmonth : priorDate.getMonth() + 1,
    lastyear : priorDate.getFullYear()
  }
  return output;
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function parse_mutasi(res) {
  let $ = tool.jquery(res.body);
  let mutasi = [];
  let noRek = $('tr[bgcolor="#e0e0e0"]:contains("Nomor Rekening")').find('td').last().text().trim();
  let saldo = $('tr:contains("Saldo Akhir")').children('td[align="right"]').text().trim().slice(0, -3).replace(/\,/g, '');
  $('table:nth-child(4)').find('tr:nth-child(2)').find('tr').each(function(index, el) {
    if(index != 0) {
      let tanggal = $(this).find('td').first().text();
      let today = new Date();
      if(/pend/i.test(tanggal)) {
        tanggal = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      } else {
        tanggal = tanggal.split('/');
        tanggal = new Date(today.getFullYear(), tanggal[1] - 1, tanggal[0] );
      }
      let keterangan = $(this).find('td:nth-child(2)').text();
      let nominal = $(this).find('td:nth-child(4)').text().trim().slice(0, -3).replace(/\,/g, '');
      let type = $(this).find('td:nth-child(5)').text();
      if(type == 'CR') type = 'kredit';
      else if(type == 'DB') type = 'debit';
      mutasi.push({tanggal, keterangan, nominal, type, noRek});
    }
  });
  return mutasi;
}

function generateDate2(query) {
  const {from_date, to_date} = query;
  const fromData = moment(from_date, 'DD-MM-YYYY')
  const toData = moment(to_date, 'DD-MM-YYYY')
  return {
    today: toData.format('DD'),
    month: Number(toData.format('M')),
    year: Number(toData.format('YYYY')),
    lastday: fromData.format('DD'),
    lastmonth: Number(fromData.format('M')),
    lastyear: Number(fromData.format('YYYY'))
  }
}
