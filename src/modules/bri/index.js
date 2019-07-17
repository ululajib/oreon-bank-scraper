const Promise = require('bluebird');
const Oreon = require('oreon-scraper');
const Http = require('http-scraper');
const path = require('path');
const moment = require('moment');
const scraper = require('./scraper');
const validator = require('./validator');
const {host, uri} = require('./urls');
const routines = {
  checkCredentials,
  logout,
  getMutasi,
  checkLoginWithCookie,
  changeCookieHandlers,
}
const userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:49.0) Gecko/20100101 Firefox/49.0';
module.exports = function scraperBri(options) {
  const {error, value} = validator.checkCredentials(options.cridentials);
  if (error) {
    throw error;
  }
  options.cridentials = value;
  const defaults = {
    type: 'bri',
    userAgent,
    delay: 0,
    followAllRedirects: true,
    capture: true,
    capturePath: path.resolve(__dirname, '../../../'),
    host,
    uri,
    gzip: true,
    type: 'bri',
  };
  const settings = Object.assign({}, defaults, options);
  const oreon = Oreon(settings)
  const http = Http(settings)

  return Object.assign(Object.create(routines), {
    settings,
    oreon,
    http,
    cookieHandlers: {},
  });
}

function checkCredentials() {
  const {cridentials, userAgent} = this.settings;
  return Promise.resolve()
    .then(() => scraper.login(this.http, {cridentials, userAgent}))
    .tap((cookie) => this.changeCookieHandlers(cookie))
}

function logout() {
  const {cridentials} = this.settings;
  return Promise.resolve()
    .then(() => scraper.logout(this.http, {cridentials}))
}

function checkLoginWithCookie() {
  const {cridentials} = this.settings;
  return Promise.resolve()
    .then(() => scraper.checkLoginWithCookie(this.http, {cridentials}))
}

function getMutasi(query = {}) {
  query = getMaxmounth(query)
  const {error, value} = validator.getMutasi(query)
  if (error) {
    return Promise.reject(error)
  }
  query = value
  let {cridentials, userAgent} = this.settings;
  return Promise.resolve()
    .then(() => scraper.login(this.http, {cridentials, userAgent}))
    .tap((cookie) => this.changeCookieHandlers(cookie))
    .then(() => scraper.getMutasi(this.http, {query}))
    .tap(({cookie}) => {
      cridentials.Cookie = cookie.Cookie
      return scraper.logout(this.http, {cridentials})
    })
    // .then(() => dataDami())
}

function getMaxmounth(query) {
  const {from_date} = query
  const endOfMonth = moment(from_date, 'DD-MM-YYYY').endOf('month')
    .format('DD-MM-YYYY')
  query.endOfMonth = endOfMonth
  return query;
}

function changeCookieHandlers(cookie) {
  this.cookieHandlers = cookie
}

function dataDami() {
  return {
    mutasi: damiMutasi(),
    cookie: {
     Cookie:
      [ 'TS013917c6=0114341846cfed7280fc4d6e77fe70a42537cfb62e73205da8f9993d29bd924f9474e2e1e8b411afad1e2b9983981679f13faf9760cb697299be4818c99dc8e8f340830757',
        'TS0168458c=0114341846a31ee2067f28284cf2a4925066efe8c2673374f6f5de46d9de60f0e170851ba52afaef441996418cadea00cac12446e5',
        'dtCookie=|X2RlZmF1bHR8MA',
        'BRIIBSESSID=7in462n0nee7rdpfpbpg5ded97vjsp7q' ],
     cookieString:
      'TS013917c6=0114341846cfed7280fc4d6e77fe70a42537cfb62e73205da8f9993d29bd924f9474e2e1e8b411afad1e2b9983981679f13faf9760cb697299be4818c99dc8e8f340830757; TS0168458c=0114341846a31ee2067f28284cf2a4925066efe8c2673374f6f5de46d9de60f0e170851ba52afaef441996418cadea00cac12446e5; dtCookie=|X2RlZmF1bHR8MA; BRIIBSESSID=7in462n0nee7rdpfpbpg5ded97vjsp7q' }
  }
}

function damiMutasi() {
  return [
    {
        "type": "debit",
        "nominal": "2500000",
        "keterangan": "PENARIKAN DARI ATM 601301432515942700050874",
        "tanggal": "2019-05-01",
        "noRek": "114701000616535"
    },
    {
        "type": "debit",
        "nominal": "6500",
        "keterangan": "TRANSFER 6013011328762173#205584887379#IBNK#TRFLA  LA     I D0436556881IBNK6013011328762173",
        "tanggal": "2019-05-03",
        "noRek": "114701000616535"
    },
    {
        "type": "debit",
        "nominal": "3000000",
        "keterangan": "TRANSFER 6013011328762173#205584887379#IBNK#TRFLA  LA     I D0436556881IBNK6013011328762173",
        "tanggal": "2019-05-03",
        "noRek": "114701000616535"
    },
    {
        "type": "debit",
        "nominal": "1000000",
        "keterangan": "PENARIKAN DARI ATM 601301432515942700050874",
        "tanggal": "2019-05-04",
        "noRek": "114701000616535"
    },
    {
        "type": "kredit",
        "nominal": "9209",
        "keterangan": "Bunga Rekening",
        "tanggal": "2019-05-15",
        "noRek": "114701000616535"
    },
    {
        "type": "debit",
        "nominal": "1842",
        "keterangan": "Pajak",
        "tanggal": "2019-05-15",
        "noRek": "114701000616535"
    },
    {
        "type": "debit",
        "nominal": "5500",
        "keterangan": "Biaya Administrasi",
        "tanggal": "2019-05-16",
        "noRek": "114701000616535"
    },
    {
        "type": "debit",
        "nominal": "518651",
        "keterangan": "PURCHASE EDC PRCH601301432515942705298289#11266355",
        "tanggal": "2019-05-19",
        "noRek": "114701000616535"
    }
]
}
