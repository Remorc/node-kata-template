const example = require('./example')

describe("sum", () => {
    it("adds two numbers", function () {      // This is using an anonymous unnamed function, which is just a shorthand
        let addedNumbers = example.sum(1, 2)

        expect(addedNumbers).toEqual(3)
    })

    it("handles zero", () => {                // This is using an anonymous arrow function, which is just a shorthand
        let addedNumbers = example.sum(1, 0)

        expect(addedNumbers).toEqual(1)
    })
})