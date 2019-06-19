const test = require('tape');
const mandiriBisnis = require('../../../src/modules/mandiriBisnis/parser');
const {getHTML} = require('./test-utils');

test('Parser BRI - checkCookie', (assert) => {
  assert.plan(1)
  const html = getHTML('menus');
  const data = mandiriBisnis.checkCookie(html)
  console.log(data);
  assert.ok(Boolean(data), 'Parser getFormMutasi ok')
})
test.only('Parser BRI - paraseInquiry', (assert) => {
  assert.plan(1)
  const html = getHTML('transsection');
  const data = mandiriBisnis.paraseInquiry(html)
  console.log(data);
  assert.ok(Boolean(data), 'Parser getFormMutasi ok')
})
