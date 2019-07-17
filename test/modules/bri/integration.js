const test  = require('tape');
const BriScraper = require('../../../src/modules/bri/index');
const {getTestData} = require('./test-utils');
const tesData = getTestData('integration');

const cookie = tesData.getCookieString();
const cridentials = {
  username: process.env.USERNAME_BRI,
  password: process.env.PASSWORD_BRI,
  Cookie : [
    "TS013917c6=01143418462dfba152b2bfb24fa29ad3d84f9e160e4d800368dfac185f93f1757ef38b179ea9317e182f171d32d17b91799f90d15db32f9cf6a9123458ffbf0147979f65b4",
    "TS0168458c=0114341846f47c09e2bde4f86d6aa90556a6a57a6d4d800368dfac185f93f1757ef38b179ec1e26ea485da089886c8f63342fc3600",
    "dtCookie=|X2RlZmF1bHR8MA",
    "BRIIBSESSID=oc9d6j07flr8mlatg7bq456t4572f3no"
  ]
}

const briScraper = BriScraper({cridentials});

console.log(briScraper.cookieHandlers);

test('Integration BRI - checkCredentials', (assert) => {
  assert.plan(1);
  briScraper.checkCredentials()
    .then((result) => {
      console.log(JSON.stringify(result, null, 2));
      assert.ok(Boolean(result), `test checkCredentials ok`);
    })
    .catch(assert.end)
})

test('Integration BRI - logout', (assert) => {
  assert.plan(1);
  briScraper.logout(cridentials.Cookie)
    .then((result) => {
      console.log(result);
      assert.ok(Boolean(result), `test checkCredentials ok`);
    })
    .catch(assert.end)
})

test.only('Integration BRI - getMutasi', (assert) => {
  assert.plan(1);
  const query = {
    from_date: '01-06-2019',
    to_date: '30-06-2019'
  }
  briScraper.getMutasi(query)
    .then((result) => {
      console.log(result);
      console.log(briScraper.cookieHandlers);
      assert.ok(Boolean(result), `test checkCredentials ok`);
    })
    .catch(assert.end)
})

test('Integration BRI - checkLoginWithCookie', (assert) => {
  assert.plan(1);
  briScraper.checkLoginWithCookie()
    .then((result) => {
      console.log(result);
      assert.ok(Boolean(result), `test checkLoginWithCookie ok`);
    })
    .catch(assert.end)
})
