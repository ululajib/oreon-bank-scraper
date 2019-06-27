const BNI = require('./bni');

module.exports = {
  login,
  getMutasi,
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
}

function getMutasi(http, options = {}) {
  const {cridentials, query} = options
  const {username, password} = cridentials;
  return Promise.resolve()
    .then(() => {
      let bni = new BNI();
      bni.setUser(username)
      bni.setPassword(password)
      return bni.getMutasi()
    })
}
