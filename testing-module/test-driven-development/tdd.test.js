const isPalindrome = require("./tdd");

// if input is abc, return false
test("if input is abc, return false", () => {
    const result = isPalindrome("abc")
    expect(result).toBe(false)
})
// if input is aba, return true
test("if input is aba, return true", () => {
    const result = isPalindrome("aba")
    expect(result).toBe(true)
})
// if input is Aba, return true
test("if input is Aba, return true", () => {
    const result = isPalindrome("Aba")
    expect(result).toBe(true)
})
// if input is "", return true
test("if input is '', return true", () => {
    const result = isPalindrome("")
    expect(result).toBe(true)
})
// if input is a, return true
test("if input is 'a', return true", () => {
    const result = isPalindrome("a")
    expect(result).toBe(true)
})
// if input is 121, return true
test("if input is 121, return true", () => {
    const result = isPalindrome(121)
    expect(result).toBe(true)
})
// if input is 123, return false
test("if input is 123, return false", () => {
    const result = isPalindrome(123)
    expect(result).toBe(false)
})
// if input is -121 (ignore negative), return true
test("if input is -121, return true", () => {
    const result = isPalindrome(-121)
    expect(result).toBe(true)
})
// if input is null, return null
test("if input is null, return null", () => {
    const result = isPalindrome(null)
    expect(result).toBe(null)
})
// if input is {},[],()=>{}, return null
test("if input is {},[],()=>{}, return null", () => {
    const result = isPalindrome({})
    expect(result).toBe(null)
})
// if input is Multiple inputs(consider only first input), return based on first input
test("if input is (122,aba), return false", () => {
    const result = isPalindrome(122, "aba")
    expect(result).toBe(false)
})
// if input has whitespaces, calculate results by ignoring whitespace
test("if input is '        aba   ', return true", () => {
    const result = isPalindrome("        aba      ")
    expect(result).toBe(true)
})
