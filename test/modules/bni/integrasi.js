const test  = require('tape');
const BNIScraper = require('../../../src/modules/bni/index');
const {getTestData} = require('./test-utils');
const tesData = getTestData('integration');

const cookie = tesData.getCookieString();
const cridentials = {
  username: process.env.USERNAME_BNI,
  password: process.env.PASSWORD_BNI,
}

const BniScraper = BNIScraper({cridentials});

test('Integration Mandiri - checkCredentials', (assert) => {
  assert.plan(1);
  BniScraper.checkCredentials()
    .then((result) => {
      console.log(JSON.stringify(result, null, 2));
      assert.ok(Boolean(result), `test checkCredentials ok`);
    })
    .catch(assert.end)
})

test.only('Integration Mandiri - checkCredentials', (assert) => {
  assert.plan(1);
  const query = {
    from_date: '01-05-2019',
    to_date: '15-05-2019',
  }
  BniScraper.getMutasi(query)
    .then((result) => {
      console.log(JSON.stringify(result, null, 2));
      assert.ok(Boolean(result), `test checkCredentials ok`);
    })
    .catch(assert.end)
})
