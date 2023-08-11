function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('result: ' + num);
}
var combineValues;
combineValues = add;
var plus = function (a, b) { return a + b; };
var minus = function (a, b) { return a - b; };
// console.log(plus(10, 10));
// console.log(minus(20, 10));
function addAndHandler(n1, n2, callBack) {
    var result = n1 + n2;
    var value = callBack(result);
}
addAndHandler(20, 30, function (result) {
    console.log(result);
});
// addEvent 함수 정의
function addEvent(element, eventName, callback) {
    element.addEventListener(eventName, callback, false);
}
// addEvent 함수 호출
addEvent(document, "keydown", function (e) {
    if (e.keyCode === 1) {
        e.preventDefault();
    }
});
