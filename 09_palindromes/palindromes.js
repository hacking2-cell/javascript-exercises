const palindromes = function (str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/\s+/g, '');
    const reverseStr = cleanStr.split('').reverse().join('');
    return (cleanStr === reverseStr);

};// npm test palindromes.spec.js

// Do not edit below this line
module.exports = palindromes;
