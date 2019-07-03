const test = require('tape');
const BCAScraper = require('../../../src/modules/bca/index');
const {getTestData} = require('./test-utils');
const tesData = getTestData('integration');

const cookie = tesData.getCookieString();
const cridentials = {
  username: process.env.USERNAME_BNI,
  password: process.env.PASSWORD_BNI,
}
const bcaScraper = BCAScraper({cridentials})

test.only('integration BCA, check Credentials', (assert) => {
  assert.plan()
  bcaScraper.checkCredentials()
    .then((result) => {
      console.log(result);
      assert.ok(Boolean(result), 'test ok')
    })
    .catch(assert.end)
})
