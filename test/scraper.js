let scraperBank = require('../src')
const options = {
  bank: 'bri',
  cridentials: {
    username: 'foo',
    password: 'bar'
  }
}

scraperBank = scraperBank(options)
console.log(scraperBank.checkCredentials());
