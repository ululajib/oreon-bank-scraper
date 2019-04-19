const assert = require('assert');
const bri = require('../modules/bri');
const kittens = {
  bri,
}
module.exports = Scrapers;
function Scrapers(options = {}) {
  const {bank} = options
  const Scraper = kittens[bank];
  assert.ok(Boolean(Scraper), `No scraper for bank ${bank}`);
  return Scraper(options);
}
