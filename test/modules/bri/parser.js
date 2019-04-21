const test = require('tape');
const BriParser = require('../../../src/modules/bri/parser');
const {getHTML} = require('./test-utils');

test('Parser BRI - getDataMutasi', (assert) => {
  assert.plan(1)
  const html = getHTML('getFormMutasi');
  const data = BriParser.getDataMutasi(html)
  console.log(data);
  assert.ok(Boolean(data), 'Parser getFormMutasi ok')
})

test.only('Parser BRI - getDataMutasi', (assert) => {
  assert.plan(1)
  const html = getHTML('formMutasi0');
  const result = BriParser.getMutasiData(html);
  console.log(result);
  assert.ok(Boolean(result), 'Parser bri berhasil.')
})
