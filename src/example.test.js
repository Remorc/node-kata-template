const example = require('./example')

function addNegativeNumber() {
    let addedNumbers = example.sum(-1, 2)

    expect(addedNumbers).toEqual(1)
}

describe("sum", () => {
    it("adds negative numbers", addNegativeNumber)   // This is using a named function

    it("adds two numbers", function () {      // This is using an anonymous unnamed function, which is just a shorthand
        let addedNumbers = example.sum(1, 2)

        expect(addedNumbers).toEqual(3)
    })

    it("handles zero", () => {                // This is using an anonymous arrow function, which is just a shorthand
        let addedNumbers = example.sum(1, 0)

        expect(addedNumbers).toEqual(1)
    })
})