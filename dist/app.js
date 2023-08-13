"use strict";
const button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log('클릭');
});
function example() {
    const usedMessage = "안녕 하세요";
    const unusedMessage = "안녕히 가세요";
    console.log(usedMessage);
}
function exampleFunc(params) {
    console.log('매개변수를 사용하지 않았습니다.');
}
function add(a, b) {
    if (a > 0) {
        return a + b;
    }
}
