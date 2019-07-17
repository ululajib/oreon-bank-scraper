const tool = require('curl-ganteng');
const jsonfile = require('jsonfile');
const fs = require('fs');
const dateFormat = require('dateformat');
const parser = require('./parser');

const BNI = function() {
  this.MAIN_URL = `https://ibank.bni.co.id/MBAWeb/FMB`;
}

BNI.prototype.setUser = function (user) {
  this.username = user;
  try {
    this.cookie = jsonfile.readFileSync(`${__dirname}/temp/${this.username}.json`);
  } catch (e) {
    this.cookie = false;
  }
}

BNI.prototype.setPassword = function (password) {
  this.password = password;
}

BNI.prototype.getAccount = function () {
  return this.cookie;
}

BNI.prototype.getMutasi = function (cb) {
  let current = this;
  let account = this.cookie;
  return this.login()
    .then((result) => {
      account = result;
      return tool.curl(account.dashBoard, {cookie: account.cookie, referer: account.referer})
    })
    .then((res) => {
      let $ = tool.jquery(res.body);
      let mutasi = '';
      let saldo = 0;
      return tool.curl(account.mutasi, {cookie: res.cookie, referer: res.req_url})
        .then((res) => {
          let post = tool.serialize_post(res);
          post.MAIN_ACCOUNT_TYPE = 'OPR';
          post.AccountIDSelectRq = 'Lanjut';
          return tool.curl(post.formAction, {cookie: res.cookie, referer: res.req_url, post});
        })
        .then((res) => {
          let post = tool.serialize_post(res);
          post.TxnPeriod = 'LastMonth';
          post.FullStmtInqRq = 'Lanjut';
          const reks = parser.getReks(res.body);
          let mutasiPromises = [];
          reks.forEach((rek, index) => {
            setTimeout(function() {
              post.acc1 = rek;
              mutasiPromises.push(
                tool.curl(post.formAction, {cookie: res.cookie, referer: res.req_url, post})
                .then((res) => {
                  if(/Pagination/g.test(res.body)) {
                    let $ = tool.jquery(res.body);
                    let pages = res.body.match(/dari \d+/gi);
                    if(pages.length > 0) {
                      pages = pages[0].replace(/\w\D/ig, '').trim();
                      pages = parseInt(pages);
                      pages = Math.ceil(pages/10);
                    } else {
                      throw {error: true, message: 'Tidak dapat mengambil total jumlah mutasi'};
                    }
                    let promises = [];
                    let i = 1
                    function myLoop () {           //  create a loop function
                      setTimeout(function () {    //  call a 3s setTimeout when the loop is called
                        promises.push(tool.curl(parser.mutasiLink(res.req_url, i), {cookie: account.cookie, referer: res.req_url}).then((res) => {
                          const resultParse = current.parseMutasi(res.body);
                          saldo = resultParse.saldo;
                          return resultParse.mutasi;
                        }));
                        i++;                     //  increment the counter
                        if (i <= pages) {            //  if the counter < 10, call the loop function
                          myLoop();             //  ..  again which will trigger another
                        }                        //  ..  setTimeout()
                      }, 500)
                    }
                    myLoop();
                    // for (var i = 1; i <= pages; i++) {
                    //   promises.push()
                    // }
                    return delay(500*(pages+1)).then(() => {
                      return Promise.all(promises).then((result) => {
                        let output = [];
                        result.forEach((mutasi) => {
                          output = output.concat(mutasi);
                        })
                        return output;

                      })
                    })
                    //
                  } else {
                    const resultParse = current.parseMutasi(res.body);
                    saldo = resultParse.saldo;
                    return resultParse.mutasi;
                  }
                })
              )
            }, 1000*(index))
          })
          return delay(1000*(reks.length+1)).then(() => {
            return Promise.all(mutasiPromises).then((mts) => {
              let output = [];
              mts.forEach((mutasi) => {
                output = output.concat(mutasi);
              })
              return output;
            })
          })
        })
        .then((mutasi) => {
          return {mutasi, saldo}
        })
    })
    function delay(t) {
       return new Promise(function(resolve) {
           setTimeout(resolve, t)
       });
    }
}

BNI.prototype.logout = function () {
  let account = this.cookie;
  if(!account) return new Promise((resolve, reject) => resolve('Success logout'))
    try {
      fs.unlinkSync(`${__dirname}/temp/${account.username}.json`);
    } catch (e) {
      console.log(`can not remove temp for user: ${account.username}`);
    }
    return tool.curl(account.dashBoard, {cookie: account.cookie, referer: account.referer})
    .then((res) => {
      let post = tool.serialize_post(res);
      post.LogOut = 'Keluar';
      let $ = tool.jquery(res.body);
      let login_url = $('form').attr('action');
      return tool.curl(login_url, {post, cookie: res.cookie, referer: res.req_url})
    })
    .then((res) => {
      let post = tool.serialize_post(res);
      post.__LOGOUT__ = 'Keluar';
      let $ = tool.jquery(res.body);
      let login_url = $('form').attr('action');
      return tool.curl(login_url, {post, cookie: res.cookie, referer: res.req_url})
    })
    .then((res) => {
      return 'Success logout';
    })
}

BNI.prototype.login = function () {
  const current = this;
  const account = current.cookie;
  if(account) {
    return tool.curl(account.dashBoard, {cookie: account.cookie, referer: account.referer})
    .then(current.checkLogin.bind(current))
    .then((res) => {

      jsonfile.writeFileSync(`${__dirname}/temp/${current.username}.json`, {username: current.username, cookie: res.cookie,dashBoard: res.dashBoard, mutasi: res.mutasi, referer: res.req_url })
      return {username: current.username, cookie: res.cookie,dashBoard: res.dashBoard, mutasi: res.mutasi, referer: res.req_url };
    })
    .catch((err) => {
      if(err.code == 100) {
        console.log('relogin');
        current.cookie = false;
        return current.login();
      }
      throw err;
    })
  }
  return tool.curl(this.MAIN_URL)
    .then((res) => {
      const $ = tool.jquery(res.body);
      const url = $('.lgnaln').attr('href');
      return tool.curl(url, {cookie: res.cookie, referer: res.req_url});
    })
    .then((res) => {
      let post = tool.serialize_post(res);
      let $ = tool.jquery(res.body);
      post.CorpId = current.username;
      post.PassWord = current.password;
      post.__AUTHENTICATE__ = 'Login';
      const login_url = $('form').attr('action');
      return tool.curl(login_url, {post, cookie: res.cookie});
    })
    .then(current.checkLogin.bind(current))
    .then((res) => {
      jsonfile.writeFileSync(`${__dirname}/temp/${current.username}.json`, {username: current.username, cookie: res.cookie,dashBoard: res.dashBoard, mutasi: res.mutasi, referer: res.req_url })
      return {username: current.username, cookie: res.cookie,dashBoard: res.dashBoard, mutasi: res.mutasi, referer: res.req_url };
    })
}

BNI.prototype.checkLogin = function (res) {
  const current = this;
  let $ = tool.jquery(res.body);
  if(/Sesi berakhir/i.test(res.body) || /Sesi Anda berakhir/i.test(res.body)) {
    tool.save_log(res.body, `${__dirname}/log/${current.username}_error_100.html`)
    throw {code: '100', message: 'Sesi expired'};
  }
  if(/Login baru tidak diijinkan/i.test(res.body) || /Sesi Anda berakhir/i.test(res.body)) {
    tool.save_log(res.body, `${__dirname}/log/${current.username}_error_101.html`)
    throw {code: '101', message: 'User telah login'};
  }
  if($('.clsMConError').text()) {
    tool.save_log(res.body, `${__dirname}/log/${current.username}_error_110.html`)
    throw {code: 110, message: 'unknown error'}
  };
  if(/Application Error/ig.test(res.body)) {
    tool.save_log(res.body, `${__dirname}/log/${current.username}_error_110.html`)
    throw {code: 102, message: 'Application Error'}
  };

  tool.save_log(res.body, `${__dirname}/log/${current.username}_checklogin.html`)
  let post = tool.serialize_post(res);
  let login_url = $('form').attr('action');
  post.dashBoard = $('#dashBoard').val();
  let username = res.username;
  return tool.curl(login_url, { post, cookie: res.cookie, referer: res.req_url})
  .then((res) => {
    let $ = tool.jquery(res.body);
    res.dashBoard = $('.btnHome').attr('href');
    res.mutasi = $('a:contains("MUTASI REKENING")').attr('href');
    if(!res.dashBoard) throw 'cant get dashboard url';
    if(!res.mutasi) throw 'cant get muatsi url';
    return res;
  })
}

BNI.prototype.parseMutasi = function (body) {
  let current = this;
  let $ = tool.jquery(body);
  let page = $('span#PageNumberData').text();
  let noRek = $('.clsComboTd:contains("Nomor Rekening")').find('#H').text().trim();
  tool.save_log(body, `${__dirname}/log/${this.username}_mutasi_${noRek}_${page ? '_' + page : ''}.html`);
  let output = [];
  let tanggal = [];
  let uraian = [];
  let tipe = [];
  let nominal = [];
  let saldo = 0;
  let selector = /Pagination/g.test(body) ? '#Pagination' : '#TitleBar';
  $(selector).children('table').each(function(index, el) {
    if (!saldo && /saldo/i.test($(this).text())) {
      console.log(index);
      saldo = $(this).find('.BodytextCol2').text();
    }
    if(/tanggal transaksi/i.test($(this).text())) {
      let val = $(this).find('.BodytextCol2').text();
      tanggal.push(new Date(dateFormat(val, "d mmmm yyyy")));
    }
    if(/Uraian Transaksi/i.test($(this).text())) {
      let val = $(this).find('.BodytextCol2').text();
      uraian.push(val);
    }
    if(/Tipe/i.test($(this).text())) {
      let val = $(this).find('#H').text();
      val = (val == 'Cr') ? 'kredit' : (val == 'Db') ? 'debit' : 'n/a';
      tipe.push(val);
    }
    if(/Nominal/i.test($(this).text())) {
      let val = $(this).find('.BodytextCol2').text();
      nominal.push(parser.format_number(val));
    }
  });
  for (var i = 0; i < tanggal.length; i++) {
    output[i] = {tanggal: tanggal[i], keterangan: uraian[i], type: tipe[i], nominal: nominal[i], noRek};
  }
  return {mutasi: output, saldo};
}


module.exports = BNI;
