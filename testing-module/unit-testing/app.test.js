const { sortingByAge, sortingByName } = require('./app');

describe("Testing sorting functionality of application", () => {
    test("Test the filtered result length after sorting by age", () => {
        const res = sortingByAge();
        expect(res).toHaveLength(5)
    })
    test("Test the filtered result length after sorting by name", () => {
        const res = sortingByName();
        expect(res).toHaveLength(5)
    })
    test("Test the filtered 1st result after sorting by age", () => {
        const res = sortingByAge();
        expect(res[0].age).toBe(20)
    })
    test("Test the filtered 1st result after sorting by name", () => {
        const res = sortingByName();
        expect(res[0].name).toBe("elon")
    })
    test("Test the filtered last result after sorting by age", () => {
        const res = sortingByAge();
        expect(res[res.length - 1].age).toBe(32)
    })
    test("Test the filtered last result after sorting by name", () => {
        const res = sortingByName();
        expect(res[res.length - 1].name).toBe("virat")
    })
})