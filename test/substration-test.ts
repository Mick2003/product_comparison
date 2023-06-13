assert = require('chai').assert;
calculator = require('../src/calculator');


describe('Subtraction Tests', () =>
{
    it('Subtracting 3 from 5 should give 5. ', () =>
    {
       const result = calculator.getSubtraction(5, 3);

         assert.equal(result.result, 2);
    });

    it("Subtracting 3 from 0 should give -3. ", () => {
        const result = calculator.getSubtraction(0, 3);

        assert.equal(result.result, -1);
    });
});