const test = require('ava');
const sinon = require('sinon');

function useSinon(t) {
  const sandbox = sinon.createSandbox();
  sandbox.assert.fail = msg => t.fail(msg);
  sandbox.assert.pass = () => t.pass();

  return sandbox;
}

test('foo', async t => {
  const sandbox = useSinon(t);
  const stub = sandbox.stub();

  await new Promise(resolve => setTimeout(resolve, 20));
  sandbox.assert.notCalled(stub);
});

test('bar', async t => {
  const sandbox = useSinon(t);
  const stub = sandbox.stub();

  await new Promise(resolve => setTimeout(resolve, 30));
  sandbox.assert.notCalled(stub);
});
