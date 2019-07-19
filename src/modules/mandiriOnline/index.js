const Promise = require('bluebird');
const Http = require('http-scraper');
const path = require('path');
const {host, uri} = require('./urls');
const validator = require('./validator');
const scraper = require('./scraper');
const routines = {
  checkCredentials,
}
const userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:49.0) Gecko/20100101 Firefox/49.0';
module.exports = function scraperMandiriOnline(options) {
  const {error, value} = validator.checkCredentials(options.cridentials)
  if (error) {
    throw error
  }
  options.cridentials = value
  const defaults = {
    type: 'mandiriOnline',
    userAgent,
    delay: 0,
    followAllRedirects: true,
    capture: true,
    capturePath: path.resolve(__dirname, '../../../'),
    host,
    uri,
    gzip: true,
  }
  const settings = Object.assign({}, defaults, options)
  const http = Http(settings)
  return Object.assign(Object.create(routines), {http, settings})
}

function checkCredentials() {
    const {cridentials} = this.settings
    return Promise.resolve()
      .then(() => scraper.login(this.http, {cridentials}))
}
