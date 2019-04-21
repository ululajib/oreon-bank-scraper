const test  = require('tape');
const BriScraper = require('../../../src/modules/bri/index');
const {getTestData} = require('./test-utils');
const tesData = getTestData('integration');

const cookie = tesData.getCookieString();
const cridentials = {
  username: process.env.USERNAME_BRI,
  password: process.env.PASSWORD_BRI,
  cookie
}

const briScraper = BriScraper({cridentials});

test('Integration BRI - checkCredentials', (assert) => {
  assert.plan(1);
  briScraper.checkCredentials()
    .then((result) => {
      console.log(result);
      assert.ok(Boolean(result), `test checkCredentials ok`);
    })
    .catch(assert.end)
})

test.only('Integration BRI - logout', (assert) => {
  assert.plan(1);
  briScraper.logout(cridentials.cookie)
    .then((result) => {
      console.log(result);
      assert.ok(Boolean(result), `test checkCredentials ok`);
    })
    .catch(assert.end)
})
