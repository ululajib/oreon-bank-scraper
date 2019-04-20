const test  = require('tape');
const BriScraper = require('../../../src/modules/bri/index');

const cridentials = {
  username: process.env.USERNAME_BRI,
  password: process.env.PASSWORD_BRI
}
const briScraper = BriScraper({cridentials});

test.only('Integration BRI - checkCredentials', (assert) => {
  assert.plan(1);
  briScraper.checkCredentials()
    .then((result) => {
      console.log(result);
      assert.ok(Boolean(result), `test checkCredentials ok`);
    })
    .catch(assert.end)
})
