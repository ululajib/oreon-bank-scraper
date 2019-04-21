const Promise = require('bluebird');
const Oreon = require('oreon-scraper');
const path = require('path');
const scraper = require('./scraper');
const validator = require('./validator');
const routines = {
  checkCredentials,
  logout,
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
    capture: true,
    capturePath: path.resolve(__dirname, '../../../'),
  };
  const settings = Object.assign({}, options, defaults);
  const oreon = Oreon(settings)

  return Object.assign(Object.create(routines), {
    settings,
    oreon,
  });
}

function checkCredentials() {
  const {cridentials, userAgent} = this.settings;
  return Promise.resolve()
    .then(() => scraper.login(this.oreon, {cridentials, userAgent}))
}

function logout(cookie = '') {
  const {cridentials, userAgent} = this.settings;
  return Promise.resolve()
    .then(() => scraper.logout(this.oreon, {cridentials, userAgent, cookie}))
}
