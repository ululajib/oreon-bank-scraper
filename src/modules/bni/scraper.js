const BNI = require('./bni');

module.exports = {
  login,
  getMutasi,
  logout,
}

function login(http, options = {}) {
  const {cridentials} = options;
  const {username, password} = cridentials;
  return Promise.resolve()
    .then(() => {
      let bni = new BNI();
      bni.setUser(username)
      bni.setPassword(password)
      return bni.login()
        .then((account) => account.username)
    })
    .then((Cookie) => {
      return {
        Cookie,
        cookieString: Cookie,
      }
    })
}

function getMutasi(http, options = {}) {
  const {cridentials, query} = options;
  const {username, password} = cridentials;
  return Promise.resolve()
    .then(() => {
      let bni = new BNI();
      bni.setUser(username)
      bni.setPassword(password)
      return bni.getMutasi()
    })
    .then((mutasi) => {
      return Object.assign({}, {
        mutasi,
        cookie: username,
      })
    })
}

function logout(http, options = {}) {
  const {cridentials} = options
  const {username, password} = cridentials;
  return Promise.resolve()
    .then(() => {
      let bni = new BNI();
      bni.setUser(username);
      return bni.getMutasi();
    })
}
