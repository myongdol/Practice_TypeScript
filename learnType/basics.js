"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
let number1;
number1 = 10;
const number2 = 2.5;
const printResult = true;
const resultPhrase = '정답은 : ';
add(number1, number2, printResult, resultPhrase);
