var main = require('../index');
var assert = require('assert');
describe('Regular factorial value', function() {
    it('should return 5 for Fib(5)', function() {
        assert.strictEqual(main.factorial(5), 120);
      });
});

describe('First two terms', function() {
  it('should return 0 and 1 for first two terms', function() {
      assert.strictEqual(main.factorial(0), 0);
      assert.strictEqual(main.factorial(1), 1);
    });
});

describe('Negative number is undefined', function(){
  it('should return undefined', function() {
    assert.strictEqual(main.factorial(-2), undefined)
  });
});