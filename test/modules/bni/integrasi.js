const test  = require('tape');
const BNIScraper = require('../../../src/modules/bni/index');
const BNI = require('../../../src/modules/bni/bni');
const {getTestData, getHTML} = require('./test-utils');
const tesData = getTestData('integration');

const cookie = tesData.getCookieString();
const cridentials = {
  username: process.env.USERNAME_BNI,
  password: process.env.PASSWORD_BNI,
}

const BniScraper = BNIScraper({cridentials});

test('Integration BNI - checkCredentials', (assert) => {
  assert.plan(1);
  BniScraper.checkCredentials()
    .then((result) => {
      console.log(JSON.stringify(result, null, 2));
      assert.ok(Boolean(result), `test checkCredentials ok`);
    })
    .catch(assert.end)
})

test.only('Integration BNI - getMutasi', (assert) => {
  assert.plan(1);
  const query = {
    from_date: '01-06-2019',
    to_date: '16-06-2019',
  }
  BniScraper.getMutasi(query)
    .then((result) => {
      console.log(JSON.stringify(result, null, 2));
      assert.ok(Boolean(result), `test checkCredentials ok`);
    })
    .catch(assert.end)
})

test('Integration BNI - LogOut', (assert) => {
  assert.plan(1);
  BniScraper.logout()
    .then((result) => {
      console.log(JSON.stringify(result, null, 2));
      assert.ok(Boolean(result), `test logout ok`);
    })
    .catch(assert.end)
})


test('parser mutasi bni - getMutasi', (assert) => {
  assert.plan(1)
  const html = getHTML('mutasi')
  const bni = new BNI()
  const data = bni.parseMutasi(html)
  console.log(data);
  assert.ok(Boolean(data), 'assert ok')
})
