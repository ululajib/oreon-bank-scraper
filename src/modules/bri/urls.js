const host = 'ib.bri.co.id';
const uri = `https://${host}/`;

const urls = {
  host,
  uri,
  main: `${uri}ib-bri/`,
  login: `${uri}ib-bri/Login.html`,
  loginPost: `${uri}ib-bri/Homepage.html`,
  captca: `${uri}ib-bri/login/captcha`,
  welcome: `${uri}ib-bri/Welcome.html`,
  getFormAccount: `${uri}ib-bri/MyAccount.html`,
  getFormMutasi: `${uri}ib-bri/AccountStatement.html`,
  getMutasi: `${uri}ib-bri/Br11600d.html`,
  logout: `${uri}ib-bri/Logout.html`,
}

module.exports = urls;
