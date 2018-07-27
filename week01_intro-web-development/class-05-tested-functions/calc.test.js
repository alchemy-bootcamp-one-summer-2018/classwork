/* globals test, assert */
/* globals calc */

test('add two numbers', () => {
    assert.equal(calc.add(1, 2), 3);
});

test('subtract two numbers', () => {
    assert.equal(calc.subtract(7, 4), 3);
});

test('multiplies two numbers', () => {
    assert.equal(calc.multiply(2, 3), 6);
});

test('divides two numbers', () => {
    assert.equal(calc.divide(12, 4), 3);
});

test.run();