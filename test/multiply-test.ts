assert = require('chai').assert;
calculator = require('../src/calculator');

describe('Multiplication Tests', () =>
{
    it('Multiplying 3 by 5 should give 15. ', () =>
    {
        const result = calculator.getMultiply(3, 5);

        assert.equal(result.result, 15);
    });

    it('Multiplying 3 by 0 should give 0. ', () =>
    {
        const result = calculator.getMultiply(3, 0);

        assert.equal(result.result, 0);
    });
});