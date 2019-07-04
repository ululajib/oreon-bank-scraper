const BCA = require('./bca');

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
      let bca = new BCA();
      bca.setUser(username);
      bca.setPassword(password);
      return getMutasi();
    })
}

function getMutasi(http, options = {}) {
  const {cridentials, query} = options
  const {username, password} = cridentials;
  return Promise.resolve()
    .then(() => {
      let bca = new BCA();
      bca.setUser(username);
      bca.setPassword(password);
      return bca.getMutasi()
    })
}

function logout(http, options = {}) {
  const {cridentials} = options;
  const {password, username} = cridentials;
  return Promise.resolve()
    .then(() => {
      let bca = new BCA()
      bca.setUser(username);
      bca.setPassword(password);
      return bca.logout();
    })
}
