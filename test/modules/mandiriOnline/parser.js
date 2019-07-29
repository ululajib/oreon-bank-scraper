const test  = require('tape');
const ParserMandiri = require('../../../src/modules/mandiriOnline/parser');
const {getTestData, getHTML} = require('./test-utils');

test('Parser Mandiri Online - getFormDataLogin', (assert) => {
  assert.plan(1)
  const html = getHTML('getLoggedIn');
  const form = ParserMandiri.getFormDataLogin(html)
  // console.log(form);
  assert.ok(Boolean(form), 'form OK!')
})

test('Parser Mandiri Online - getFormDataLogin', (assert) => {
  assert.plan(1)
  const qery = queryGetFromIsQuery();
  const form = ParserMandiri.getFromIsQuery(qery)
  // console.log(form);
  assert.ok(Boolean(form), 'form OK!')
})

test('Parser Mandiri Online - checkLogin', (assert) => {
  assert.plan(1)
  const html = getHTML('error');
  const form = ParserMandiri.checkLogin(html)
  console.log(form);
  assert.ok(Boolean(form), 'form OK!')
})

test.only('Parser Mandiri Online - getRequestBalance', (assert) => {
  assert.plan(1)
  const html = getHTML('searchRequestBalance');
  const data = ParserMandiri.getRequestBalance(html)
  console.log(data);
  assert.ok(Boolean(data), 'form OK!')
})

function queryGetFromIsQuery() {
    return {
      randomNumber: '75981009912098100991129810099101981009986981009911398100991179810099979810099739810099989810099739810099198100997981009999981009969981009994',
      postParams: {
        userId: '',
        userPass: '',
        userPassCrypto: '',
        lang: 'in',
        key1: '',
        key2: '',
        mod: '',
        exp: '',
        randomNumber: '',
        cEnc: '',
        pEnc: '',
        isFailed: ''
      },
      query: {
        exp: '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003',
        mod: 'B2AD4CAC8EF5113B80B294B16E3C18D22B82A658C3977CBF3DA96988A436C0B778955360E7603B443B19628E45CDFCCD28AD64271EFEFF807B778BDA90F883ED75DDD80FBD6582F918B32C33E641B88B71820BD94294551FAE1906763306EBD8F3FD2601CE284B4242527CA417380C177FA911430DC71C52A6ADBC2FA0DBA3D0FFB5A262FD044A4ED6FB0C511BD1FE8374D03574579002D6F4374D77D25B986D97E961A791BD68C26E2CE5FB2C8BE8E5B247E5FDE5C8F545A7BAD0370A6A33789E1C79657E5581F7706AFF73FFA8811BA2E7A1DB2A8928F265D746FB8E4E165F2E3B08B59E47F64BFE95AF5005A0AB16F18521EC5CA9DF9B0A5BFEDDE577237F',
        key1: '03d4fcfa4dd323df2200250d457bdc9d',
        key2: '0711af57a998725a37f4feedcb8ddf74',
        userPassCrypto: 'YCPPVQ/2cyk+M8dN0OcGPQ==',
        userId: 'RONNIDAR1989',
        password: 'Spidermen3',
        isFailed: 'N'
      }
    }
}
