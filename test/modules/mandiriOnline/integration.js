const test  = require('tape');
const mandiriOnlineScraper = require('../../../src/modules/mandiriOnline/index');
const {getTestData} = require('./test-utils');
const tesData = getTestData('integration');

const cookie = tesData.getCookieString();
const cridentials = {
  username: process.env.USERNAME_MANDIRI_ONLINE,
  password: process.env.PASSWORD_MANDIRI_ONLINE,
}

const mandiriScraper = mandiriOnlineScraper({cridentials});
test.only('integration mandiri-online, checkCredentials', (assert) => {
  assert.plan(1)
  mandiriScraper.checkCredentials()
    .then((value) => {
      console.log(value);
      assert.ok(Boolean(value), 'check is OK!')
    })
    .catch(assert.end)
})
