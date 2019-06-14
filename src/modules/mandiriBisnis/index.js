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
  // logout,
  // getMutasi,
  // checkLoginWithCookie,
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
    type: 'mandiriBisnis',
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
}
