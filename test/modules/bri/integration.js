const test  = require('tape');
const BriScraper = require('../../../src/modules/bri/index');
const {getTestData} = require('./test-utils');
const tesData = getTestData('integration');

const cookie = tesData.getCookieString();
const cridentials = {
  username: process.env.USERNAME_BRI,
  password: process.env.PASSWORD_BRI,
  cookie : [
    'TS013917c6=011434184668b43df3bc356756713ec72b3747d168dd862d85ff07ce6bbdd68e3be9159b923fea6f2442e56880bce014a2e68e5b24',
    'TS0168458c=0114341846dc13a49a8f2d4679acf042844d750abbe83571f8bba890e06468fabea24cb78450c980b9eb4fbc9f3460641572289e93',
    'dtCookie=30F5962C0B6D8F287D9862A5F276A4FB|X2RlZmF1bHR8MQ',
    'BRIIBSESSID=mjtvon8bbpad9juf07v2m4ehs4k6407g',
    'dtLatC=24',
    'dtPC=-',
    'dtSa=-'
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

test.only('Integration BRI - logout', (assert) => {
  assert.plan(1);
  briScraper.logout(cridentials.cookie)
    .then((result) => {
      console.log(result);
      assert.ok(Boolean(result), `test checkCredentials ok`);
    })
    .catch(assert.end)
})

test('Integration BRI - getMutasi', (assert) => {
  assert.plan(1);
  briScraper.getMutasi()
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
