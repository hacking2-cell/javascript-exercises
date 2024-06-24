const fibonacci = function(n) {
    if (typeof n === 'string') n = Number(n);
    if (n < 0) return 'OOPS';
    let a = 0;
    let b = 1;
    let result = 0;
    for (let i = 0; i < n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
