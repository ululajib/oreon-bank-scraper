const test = require('tape');
const BriParser = require('../../../src/modules/bri/parser');
const {getHTML} = require('./test-utils');

const cookieString = cookieStr()

test('Parser BRI - getDataMutasi', (assert) => {
  assert.plan(1)
  const query = {
    from_date: '01-06-2019',
    to_date: '30-06-2019'
  }
  const html = getHTML('getFormMutasi');
  const data = BriParser.getDataMutasi(html, query)
  console.log(data);
  assert.ok(Boolean(data), 'Parser getFormMutasi ok')
})

test('Parser BRI - checkErrorBRR2009', (assert) => {
  assert.plan(1)
  const html = getHTML('error-BBR2009');
  const data = BriParser.getMutasiData(html)
  console.log(data);
  assert.ok(Boolean(data), 'Parser getFormMutasi ok')
})

test('Parser BRI - getMutasiData', (assert) => {
  assert.plan(1)
  const html = getHTML('formMutasi0');
  const result = BriParser.getMutasiData(html);
  console.log(result);
  assert.ok(Boolean(result), 'Parser bri berhasil.')
})

test('Parser BRI - checkIsUseAccount', (assert) => {
  assert.plan(1)
  const html = getHTML('postLogin');
  const result = BriParser.checkIsUseAccount(html);
  console.log(result);
  assert.ok(Boolean(result), 'Parser bri berhasil.')
})

test('Parser BRI - cookieHttp', (assert) => {
  assert.plan(1)
  const cookie = cookieStr();
  const result = BriParser.cookieHttp(cookie);
  console.log(result);
  assert.ok(Boolean(result), 'Parser bri berhasil.')
})

test.only('Parser BRI - getSaldo', (assert) => {
  assert.plan(1)
  const html = getHTML('getBalance');
  const result = BriParser.getBalance(html);
  console.log(result);
  assert.ok(Boolean(result), 'Parser bri berhasil.')
})


function cookieStr() {
  return [
  Cookie="TS013917c6=0114341846e3b38bf174e8ddfcd48d186a57d4a72b967b62545d3a59ed1597d5fefb79f2fe995861384b6f59079e0ab6554404ab45f4ea209d828523f7c489282dfbbe2fe4; Path=/; hostOnly=true; aAge=1ms; cAge=318ms",
  Cookie="TS0168458c=011434184621abcb67dbb8aa8ae970557c338e04c1b52b5841d685c0eb45e60f53699e582444bb79a593ccb7976b08c7a14ace265e; Path=/; hostOnly=true; aAge=1ms; cAge=318ms",
  Cookie="dtCookie=|X2RlZmF1bHR8MA; Path=/; hostOnly=true; aAge=1ms; cAge=317ms",
  Cookie="BRIIBSESSID=sa7iac07ftjn6ttice58otkqdpot2oko; Path=/; hostOnly=true; aAge=1ms; cAge=317ms"
]
}
