let scraperBank = require('../src')
const options = {
  bank: 'bri',
  cridentials: {
    username: process.env.USERNAME_BRI,
    password: process.env.PASSWORD_BRI,
  }
}

scraperBank = scraperBank(options)
scraperBank.checkCredentials()
  .then((result) => {
    console.log(result);
  })
