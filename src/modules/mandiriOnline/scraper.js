const Promise = require('bluebird');
const parser = require('./parser');
const urls = require('./urls');
const path = require('path');
module.exports = {
  login,
}
function login(http, options = {}) {
  const {cridentials} = options
  return doLogin()
  function doLogin() {
    return Promise.resolve()
      .then(() => {
        const options = {
          url: urls.login,
        }
        return http.get(options)
          .get('body')
          .tap(http.saveHtml('getLoggedIn'))
      })
  }
}
