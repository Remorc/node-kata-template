const example = require('./example')

describe("sum", () => {
    it("adds two numbers", () => {
        const addedNumbers = example.sum(1, 2)

        expect(addedNumbers).toEqual(3)
    })
})