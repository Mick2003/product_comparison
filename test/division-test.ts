assert = require('chai').assert;
calculator = require('../src/calculator');

describe('Devision Tests', () => {
    it('Dividing 6 by 2 should give 3. ', () => {
        const result = calculator.getDevide(6, 2);

        assert.equal(result.result, 3);
    });

    it('Dividing 30 by 6 should give 5. ', () => {
        const result = calculator.getDevide(30, 6);

        assert.equal(result.result, 5);
    });
});