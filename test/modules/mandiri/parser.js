const test = require('tape');
const mandiri = require('../../../src/modules/mandiri/parser');
const {getHTML} = require('./test-utils');

test('Parser BRI - getNorek', (assert) => {
  assert.plan(1)
  const html = getHTML('getFormMutasi');
  const data = mandiri.getNorek(html)
  console.log(data);
  assert.ok(Boolean(data), 'Parser getNorek ok')
})

test.only('Parser BRI - getFormDataMutasi', (assert) => {
  assert.plan(1)
  const query = {
    from_date: '01-05-2019',
    to_date: '15-05-2019',
  }
  const html = getHTML('getFormMutasi');
  const data = mandiri.getFormDataMutasi(html, { noRek: 1120006450881, idRek: '20100715043818' }, query)
  console.log(data);
  assert.ok(Boolean(data), 'Parser getFormDataMutasi ok')
})

test('Parser BRI - getMutasi', (assert) => {
  assert.plan(1)
  const html = getHTML('getMutasi-0');
  const data = mandiri.getMutasi(html, { noRek: 1120006450881, idRek: '20100715043818' })
  console.log(data);
  assert.ok(Boolean(data), 'Parser getFormDataMutasi ok')
})
