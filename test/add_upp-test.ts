let assert = require('chai').assert;
let calculator = require('../src/calculator');

describe ('Addition tests', () => {
    it ('Adding 2 to 3 should give 5', () => {
        const sum = calculator.getAddUp(2, 3);

        assert.equal(sum.result, 5);
    });

    it ('Adding 2 to 0 should give 2', () => {
        const sum = calculator.getAddUp(2, 0);

        assert.equal(sum.result, 2);
    });
});