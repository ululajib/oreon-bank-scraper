const test = require('tape');
const mandiriBisnis = require('../../../src/modules/mandiriBisnis/parser');
const {getHTML} = require('./test-utils');

test.only('Parser BRI - checkCookie', (assert) => {
  assert.plan(1)
  const html = getHTML('menus');
  const data = mandiriBisnis.checkCookie(html)
  console.log(data);
  assert.ok(Boolean(data), 'Parser getFormMutasi ok')
})
