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
// console.log(plus(10, 10));
// console.log(minus(20, 10));
function addAndHandler(n1, n2, callBack) {
    const result = n1 + n2;
    const value = callBack(result);
}
addAndHandler(20, 30, (result) => {
    console.log(result);
});
/*
// 콜백 함수 타입 정의
interface MyCallback {
    (e: Event): void;
  }
  
  // addEvent 함수 정의
  function addEvent(element, eventName, callback: MyCallback) {
    element.addEventListener(eventName, callback, false);
  }
  
  // addEvent 함수 호출
  addEvent(document, "keydown", (e) => {
    if (e.keyCode === 1) {
      e.preventDefault();
    }
  });
  */ 
