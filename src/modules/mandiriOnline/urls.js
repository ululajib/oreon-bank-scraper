const host = 'ibank.bankmandiri.co.id'
const uri = 'https://ibank.bankmandiri.co.id'
const urls = {
  host,
  uri,
  login: 'https://ibank.bankmandiri.co.id/retail3/loginfo/loginRequest',
  loginExecute: `${uri}/retail3/loginfo/performLoginExecute`,
  getRandomNumber: 'https://ibank.bankmandiri.co.id/retail3/loginfo/getRandomNumberLogin',
  searchRequestBalance: `${uri}/retail3/secure/mainretail/content`,
  isTimeOut: `${uri}/retail3/loginfo/isTimeout`,
  sckelaton: `${uri}/retail3/secure/pcash/retail/account/portfolio/skeleton`,
  getBalance: `${uri}/retail3/secure/pcash/retail/account/portfolio/getBalance/`,
}

module.exports = urls;
