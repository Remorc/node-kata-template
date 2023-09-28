const example = require('./example')

describe("sum", () => {
    it("adds two numbers", () => {
        let addedNumbers = example.sum(1, 2)

        expect(addedNumbers).toEqual(3)
    })
    
    it("handles zero", () => {
        let addedNumbers = example.sum(1, 0)

        expect(addedNumbers).toEqual(1)
    })
})