const test = require('tape');
const BCAScraper = require('../../../src/modules/bca/index');
const parser = require('../../../src/modules/bca/bca/parser');
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
    from_date: '01-07-2019',
    to_date: '15-07-2019',
  }
  bcaScraper.getMutasi(query)
    .then((result) => {
      console.log(result);
      assert.ok(Boolean(result), 'test getmutasi')
    })
    .catch(assert.end)
})
test('parser Bca, generate date 2', (assert) => {
  assert.plan(1)
  const query = {
    from_date: '01-07-2019',
    to_date: '15-07-2019',
  }
  const data = parser.generateDate2(query)
  console.log(data);
  assert.ok(Boolean(data), 'assert ok')
})
