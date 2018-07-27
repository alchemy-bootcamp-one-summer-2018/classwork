/* globals test, assert */
/* globals add, subtract, multiply, divide */

test('add two numbers', () => {
    assert.equal(add(1, 2), 3);
});

test('subtract two numbers', () => {
    assert.equal(subtract(7, 4), 3);
});

test('multiplies two numbers', () => {
    assert.equal(multiply(2, 3), 6);
});

test('divides two numbers', () => {
    assert.equal(divide(12, 4), 3);
});

test.run();