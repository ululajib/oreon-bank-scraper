const test  = require('tape');
const MandiriScraper = require('../../../src/modules/mandiri/index');
const {getTestData} = require('./test-utils');
const tesData = getTestData('integration');

const cookie = tesData.getCookieString();
const cridentials = {
  username: process.env.USERNAME_MANDIRI,
  password: process.env.PASSWORD_MANDIRI,
  Cookie: 'JSESSIONID=0001EyutRk8OiwGeYJHnnP-lwXj:-8034R8; Path=/; SCOOKIE=; BIGipServerpool_ib=559458496.47873.0000; path=/; visid_incap_2069360=5476H/f/SiGiaXGO6XD+ReIYE10AAAAAQUIPAAAAAADFfGVqiG+pUvG8Qu2Pq7TT; expires=Thu, 25 Jun 2020 06:00:26 GMT; Domain=.bankmandiri.co.id; nlbi_2069360=/GXdEisCwR+pkb6AthoRtwAAAACk899dnQM25zwVlEWQ5jx7; incap_ses_1111_2069360=9aLbJGLZX1O5EU7v6RBrD+IYE10AAAAAbbKIsQMwcUBO66Bm+QAxdQ==;'
}

const mandiriScraper = MandiriScraper({cridentials});

test('Integration Mandiri - checkCredentials', (assert) => {
  assert.plan(1);
  mandiriScraper.checkCredentials()
    .then((result) => {
      console.log(JSON.stringify(result, null, 2));
      assert.ok(Boolean(result), `test checkCredentials ok`);
    })
    .catch(assert.end)
})

test.only('Integration Mandiri - getMutasi', (assert) => {
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
