const isPalindrome = (inp) => {
    if (inp === "") return true;
    if (!inp || (typeof (inp) !== 'number' && typeof (inp) !== 'string')) return null;
    // return true;
    if (typeof (inp) === 'number') {
        inp = Math.abs(inp).toString()
    }

    inp = inp.toString().toLowerCase().trim();
    const reverse = inp.split("").reverse().join("");
    return reverse === inp;
}

module.exports = isPalindrome;