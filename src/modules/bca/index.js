const Promise = require('bluebird');
const Http = require('http-scraper');
const path = require('path');
const moment = require('moment');
const scraper = require('./scraper');
const validator = require('./validator');
const {host, uri} = require('./urls');
const routines = {
  checkCredentials,
  getMutasi,
  logout,
  // changeCookieHandlers,
}
const userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:49.0) Gecko/20100101 Firefox/49.0';
module.exports = function scraperBri(options) {
  const {error, value} = validator.checkCredentials(options.cridentials);
  if (error) {
    throw error;
  }
  options.cridentials = value;
  const defaults = {
    type: 'bca',
    userAgent,
    delay: 0,
    followAllRedirects: true,
    capture: true,
    capturePath: path.resolve(__dirname, '../../../'),
    host,
    uri,
    gzip: true,
  };
  const settings = Object.assign({}, defaults, options);
  const http = Http(settings)

  return Object.assign(Object.create(routines), {
    settings,
    http,
    cookieHandlers: {},
  });
}

function checkCredentials() {
  const {cridentials} = this.settings;
  return Promise.resolve()
    .then(() => scraper.login(this.http, {cridentials}))
}

function getMutasi(query = {}) {
  query = getMaxmounth(query)
  const {error, value} = validator.getMutasi(query)
  if (error) {
    return Promise.reject(error)
  }
  query = value;
  const {cridentials} = this.settings;
  return Promise.resolve()
    .then(() => scraper.getMutasi(this.http, {cridentials, query}))
}

function logout() {
  const {cridentials} = this.settings;
  return Promise.resolve()
    .then(() => scraper.logout(this.http, {cridentials}))
}

function getMaxmounth(query) {
  const {from_date} = query
  const endOfMonth = moment(from_date, 'DD-MM-YYYY').endOf('month')
    .format('DD-MM-YYYY')
  query.endOfMonth = endOfMonth
  return query;
}
