/**
 * This function takes 2 numbers as arguments
 * and returns the sum.
 * 
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
var sum = function (num1, num2) { return num1 + num2; };
function sum2(num1, num2) {
    return num1 + num2;
}
var element;
var link;
var value = sum(2, 2);
var value2 = sum2(2, 2);
if (typeof value === 'string') {
    value = +(value);
}
// sum(1, 2) // 3
// sum(2, 2) // 4
// sum(1, 'Sid') //1Sid
