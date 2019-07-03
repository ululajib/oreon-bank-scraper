const test = require('tape');
const BCAScraper = require('../../../src/modules/bca/index');
const {getTestData} = require('./test-utils');
const tesData = getTestData('integration');

const cookie = tesData.getCookieString();
const cridentials = {
  username: process.env.USERNAME_BCA,
  password: process.env.PASSWORD_BCA,
}
const bcaScraper = BCAScraper({cridentials})

test('integration BCA, check Credentials', (assert) => {
  assert.plan(1)
  bcaScraper.checkCredentials()
    .then((result) => {
      console.log(result);
      assert.ok(Boolean(result), 'test ok')
    })
    .catch(assert.end)
})
test.only('integration BCA, check getMutasi', (assert) => {
  assert.plan(1)
  const query = {
    from_date: '01-05-2019',
    to_date: '15-05-2019',
  }
  bcaScraper.getMutasi(query)
    .then((result) => {
      console.log(result);
      assert.ok(Boolean(result), 'test getmutasi')
    })
    .catch(assert.end)
})
