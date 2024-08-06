const assert = require('assert');

describe("Solution", function () {
    it("Example Test Case", function () {
        assert.equal(run([-2,1,-3,4,-1,2,1,-5,4]), 6);
    });

    it("All Positive Numbers", function () {
        assert.equal(run([1, 2, 3, 4, 5]), 15);
    });

    it("All Negative Numbers", function () {
        assert.equal(run([-1, -2, -3, -4, -5]), -1);
    });

    it("Single Element Array", function () {
        assert.equal(run([5]), 5);
    });

    it("Mixed Positive and Negative Numbers", function () {
        assert.equal(run([1, -2, 3, 4, -1, 2, 1, -5, 4]), 6);
    });

    it("Case Where Maximum Element is Greater", function () {
        assert.equal(run([-1, -2, -3, -4, 10]), 10);
    });
});
