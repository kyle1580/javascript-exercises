const palindromes = function () {
    let charArray = String(arguments[0]).toLocaleLowerCase().match(/\w/g);
    let reversed = [...charArray].reverse();
    return charArray.join('') == reversed.join('');
};

// Do not edit below this line
module.exports = palindromes;
