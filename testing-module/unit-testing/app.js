const users = [
    { name: "John", age: 20 },
    { name: "elon", age: 24 },
    { name: "Rohit", age: 30 },
    { name: "virat", age: 32 },
    { name: "Sachin", age: 22 },
]

function sortingByAge() {
    return [...users].sort((a, b) => a.age - b.age)
}

function sortingByName() {
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
}

console.log("SORT by age:", sortingByAge())
console.log("SORT by age:", sortingByName())


module.exports = { sortingByAge, sortingByName }