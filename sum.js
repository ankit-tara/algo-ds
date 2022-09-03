//Add two numbers without using '+' operator

var getSum = function (a, b) {
    while (b) {
        let sum = a ^ b
        let carry = (a & b) << 1;
        a = sum;
        b = carry;
    }
    return a;
};

console.log(getSum(1, -10))

//---------------

function add(a, b) {
    if (!b) {
        return a;
    }
    let sum = a ^ b;
    let carry = (a & b) << 1;
    return add(sum, carry);
}

console.log(add(1, -10))