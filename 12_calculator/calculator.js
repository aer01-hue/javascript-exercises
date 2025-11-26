function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply( a, b) {
    return a / b;
}

function power(a, b) {
    return a ** b;
}

function factorial(num) {
    if (num < 0) return NaN;
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
