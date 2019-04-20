let scraperBank = require('../src')
const options = {
  bank: 'bri',
  cridentials: {
    username: 'ronnid0504',
    password: '123456abc'
  }
}

scraperBank = scraperBank(options)
scraperBank.checkCredentials()
  .then((result) => {
    console.log(result);
  })
