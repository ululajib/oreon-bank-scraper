const test  = require('tape');
const mandiriBisnisScraper = require('../../../src/modules/mandiriBisnis/index');
const {getTestData} = require('./test-utils');
const tesData = getTestData('integration');

const cookie = tesData.getCookieString();
const cridentials = {
  username: process.env.USERNAME_MANDIRI_BISNIS,
  password: process.env.PASSWORD_MANDIRI_BISNIS,
  corpId: process.env.CORPID_MANDIRI_BISNIS,
  "Cookie": [
    "JSESSIONID=H5j4dKkdTTK5rKb94JNJJSHJ7Z92Y7cQ0ZgsKs4y7zTCTLbT7jJm!-1200730925!1694537717",
    "visid_incap_1970073=0pp7kVTRSWaISrUvcGFaXRzkCl0AAAAAQUIPAAAAAAAvxu/G047BG+Td0uNHJV3r",
    "nlbi_1970073=QKqCMSGAMn0x1KjVs5NZ4gAAAABHJD56fcXuk8ysaO+rWQPE",
    "incap_ses_1118_1970073=n9soPxYVGAciuJ+tjO+DDxzkCl0AAAAAwPcADPu7zRoQCsc+RNrv0Q=="
  ],
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
    from_date: '28-07-2019',
    to_date: '29-07-2019',
  }
  mandiriScraper.getMutasi(query)
    .then((result) => {
      console.log(JSON.stringify(result, null, 2));
      assert.ok(Boolean(result), `test checkCredentials ok`);
    })
    .catch(assert.end)
})
