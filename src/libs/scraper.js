const bri = require('../modules/bri');
const kittens = {
  bri,
}
module.exports = Scrapers;
function Scrapers(options = {}) {
  const {bank} = options
  const Scraper = kittens[bank];
  return Scraper(options);
}
