const test  = require('tape');
const mandiriOnlineScraper = require('../../../src/modules/mandiriOnline/index');
const {getTestData} = require('./test-utils');
const tesData = getTestData('integration');

const cookie = tesData.getCookieString();
const cridentials = {
  username: process.env.USERNAME_MANDIRI_ONLINE,
  password: process.env.PASSWORD_MANDIRI_ONLINE,
  Cookie: [
    "ibankbankmandiri=53651648.24862.0000",
    "fcib=og=="
  ]
}

const mandiriScraper = mandiriOnlineScraper({cridentials});
test('integration mandiri-online, checkCredentials', (assert) => {
  assert.plan(1)
  mandiriScraper.checkCredentials()
    .then((value) => {
      console.log(value);
      assert.ok(Boolean(value), 'check is OK!')
    })
    .catch(assert.end)
})

test.only('integration mandiri-online, getmutasi', (assert) => {
  assert.plan(1)
  const query = {
    from_date: '01-06-2019',
    to_date: '30-06-2019',
  }
  mandiriScraper.getMutasi(query)
    .then((value) => {
      console.log(value);
      assert.ok(Boolean(value), 'check is OK!')
    })
    .catch(assert.end)
})
