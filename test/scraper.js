let scraperBank = require('../src')
const options = {
  bank: 'bri',
  cridentials: {
    username: 'foo',
    password: 'bar'
  }
}

scraperBank = scraperBank(options)
scraperBank.checkCredentials()
  .then((result) => {
    console.log(result);
  })
