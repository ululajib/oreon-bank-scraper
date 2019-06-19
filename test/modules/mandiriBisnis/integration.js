const test  = require('tape');
const mandiriBisnisScraper = require('../../../src/modules/mandiriBisnis/index');
const {getTestData} = require('./test-utils');
const tesData = getTestData('integration');

const cookie = tesData.getCookieString();
const cridentials = {
  username: process.env.USERNAME_MANDIRI_BISNIS,
  password: process.env.PASSWORD_MANDIRI_BISNIS,
  corpId: process.env.CORPID_MANDIRI_BISNIS,
  // Cookie: [],
}

const mandiriScraper = mandiriBisnisScraper({cridentials});

test('Integration Mandiri - checkCredentials', (assert) => {
  assert.plan(1);
  mandiriScraper.checkCredentials()
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
  mandiriScraper.getMutasi(query)
    .then((result) => {
      console.log(JSON.stringify(result, null, 2));
      assert.ok(Boolean(result), `test checkCredentials ok`);
    })
    .catch(assert.end)
})
