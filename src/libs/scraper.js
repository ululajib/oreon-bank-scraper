const assert = require('assert');
const bri = require('../modules/bri');
const mandiriBisnis = require('../modules/mandiriBisnis');
const bni = require('../modules/bni');
const mandiri = require('../modules/mandiri');
const kittens = {
  bri,
  mandiriBisnis,
  bni,
  mandiri,
}
module.exports = Scrapers;
function Scrapers(options = {}) {
  const {bank} = options
  const Scraper = kittens[bank];
  assert.ok(Boolean(Scraper), `No scraper for bank ${bank}`);
  return Scraper(options);
}
