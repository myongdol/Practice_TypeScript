function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('result: ' + num);
}
var combineValues;
combineValues = add;
combineValues = printResult;
// combineValues = 999;
console.log(combineValues(10, 10));
