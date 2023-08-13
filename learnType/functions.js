"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('result: ' + num);
}
let combineValues;
combineValues = add;
const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
function addAndHandler(n1, n2, callBack) {
    const result = n1 + n2;
    const value = callBack(result);
}
addAndHandler(20, 30, (result) => {
    console.log(result);
});
