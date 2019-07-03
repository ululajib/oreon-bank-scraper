const tool = require('curl-ganteng');
const jsonfile = require('jsonfile');
const fs = require('fs');
const dateFormat = require('dateformat');
const parser = require('./parser');

const BCA = function() {
  this.MAIN_URL = `https://ibank.klikbca.com/authentication.do`;
  this.retry = 0;
}

BCA.prototype.setUser = function (user) {
  this.username = user;
  try {
    this.cookie = jsonfile.readFileSync(`${__dirname}/temp/${this.username.toLowerCase()}.json`);
  } catch (e) {
    this.cookie = false;
  }
}

BCA.prototype.setPassword = function (password) {
  this.password = password;
}

BCA.prototype.getAccount = function () {
  return this.cookie;
}

BCA.prototype.getMutasi = function (bypass = false) {
  let current = this;
  let account = this.cookie;
  current.bypass = bypass;
  return current.login()
    .then((result) => {
      account = result;
      return tool.curl('https://ibank.klikbca.com/accountstmt.do?value(actions)=acct_stmt', {method: 'POST', cookie: account.cookie, referer: account.referer})
    })
    .then((res) => {
      let postDate = parser.generate_date();
      let post = {
        'value(D1)': '0',
        'value(endDt)': postDate.today,
        'value(endMt)': postDate.month,
        'value(endYr)': postDate.year,
        'value(fDt)': '',
        'value(r1)': '1',
        'value(startDt)': postDate.lastday,
        'value(startMt)': postDate.lastmonth,
        'value(startYr)': postDate.lastyear,
        'value(submit1)': 'Lihat Mutasi Rekening',
        'value(tDt)': ''
      };
      // console.log(post);
      let link = 'https://ibank.klikbca.com/accountstmt.do?value(actions)=acctstmtview';
      return tool.curl(link, {post, cookie: res.cookie});
    })
    .then((res) => {
      if(/window\.parent\.location\.href \= \'main\.jsp\'/gi.test(res.body)) {
        console.log(`Recheck mutasi ${current.username}`);
        current.retry ++;
        if(current.retry == 3) throw {message: `Retry 3x, Killing loop`}
        return current.logout().then(() => {
          return current.getMutasi();
        });
      }
      return current.logout().then((done) => {
        console.log(`Berhasil logout ${current.username}`);
        return current.parseMutasi(res);
      }).catch((err) => {
        console.log(`Can not logout: ${current.username}`);
        return current.parseMutasi(res);
      })
    })
}

BCA.prototype.logout = function () {
  let account = this.cookie;
  if(!account) return new Promise((resolve, reject) => resolve('Success logout'))
    return tool.curl('https://ibank.klikbca.com/authentication.do?value(actions)=logout', {cookie: account.cookie})
    .then((res) => {
      return 'Success logout';
    })
}

BCA.prototype.login = function (bypass = false) {
  let current = this;
  let account = current.cookie;
  if(account || current.bypass) {
    return current.logout().then((done) => {
      return tool.curl('https://ibank.klikbca.com/accountstmt.do?value(actions)=acct_stmt', {cookie: account.cookie, referer: account.referer, method: 'POST'})
      .then(current.checkLogin.bind(current))
      .then((res) => {
        jsonfile.writeFileSync(`${__dirname}/temp/${current.username.toLowerCase()}.json`, {username: current.username, cookie: res.cookie, referer: res.referer})
        return {username: current.username, cookie: res.cookie, referer: res.referer};
      })
    })
    .catch((err) => {
      if(err.code == 100) {
        console.log(`${err.message}, relogin`);
        current.cookie = false;
        return current.login();
      }
      throw err;
    })
  }
  return tool.curl(this.MAIN_URL)
    .then((res) => {
      let post = tool.serialize_post(res);
      post['value(user_id)'] = current.username;
      post['value(pswd)'] = current.password;
      return tool.curl(res.req_url, {cookie: res.cookie, post});
    })
    .then(current.checkLogin.bind(current))
    .then((res) => {
      current.cookie = {username: current.username, cookie: res.cookie, referer: res.referer};
      jsonfile.writeFileSync(`${__dirname}/temp/${current.username.toLowerCase()}.json`, {username: current.username, cookie: res.cookie, referer: res.referer})
      return {username: current.username, cookie: res.cookie, referer: res.referer};
    })
}

BCA.prototype.checkLogin = function (res) {
  let current = this;
  let account = this.cookie;
  if(/Mohon masukkan User ID \/ Password Anda yg benar/i.test(res.body)) {``
    tool.save_log(res.body, `${__dirname}/log/${current.username}_error_102.html`);
    throw {code: 102, message: `${current.username}: User/Pass Salah`};
  }
  if(/Anda dapat melakukan login kembali setelah 10 menit/i.test(res.body)) {
    tool.save_log(res.body, `${__dirname}/log/${current.username}_error_101.html`);
    current.logout().then((done) => {
    }).catch((err) => {
      console.log(err);
    })
    throw {code: 101, message: `${current.username}: User telah login`};
  }
  if(/window\.parent\.location\.href \= \'main\.jsp\'/gi.test(res.body) && !current.bypass) {
    tool.save_log(res.body, `${__dirname}/log/${current.username}_error_100.html`);
    current.logout().then((done) => {
    }).catch((err) => {
      console.log(err);
    })
    throw {code: 100, message: `${current.username}: Sesi expired`};
  }
  if(/PIN harus Angka/gi.test(res.body)) {
    tool.save_log(res.body, `${__dirname}/log/${current.username}_error_103.html`);
    throw {code: 101, message: `Pin anda harus numeric: ${current.password}`};
  }
  if(/var err\=\'/i.test(res.body)) {
    tool.save_log(res.body, `${__dirname}/log/${current.username}_error_110.html`);
    throw {code: 110, message: `${current.username}: Unknown Error`};
  }
  tool.save_log(res.body, `${__dirname}/log/${current.username}_checklogin.html`);
  let output = {};
  output.cookie = res.cookie;
  output.referer = res.req_url;
  return output;

}

BCA.prototype.parseMutasi = function (res) {
  let current = this;
  tool.save_log(res.body, `${__dirname}/log/${current.username}_mutasi.html`);
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
      let keterangan = $(this).find('td:nth-child(2)').text().trim();
      let nominal = $(this).find('td:nth-child(4)').text().trim().slice(0, -3).replace(/\,/g, '');
      let type = $(this).find('td:nth-child(5)').text().trim();
      if(type == 'CR') type = 'kredit';
      else if(type == 'DB') type = 'debit';
      mutasi.push({tanggal, keterangan, nominal, type, noRek});
    }
  });
  return mutasi;
}

module.exports = BCA;
