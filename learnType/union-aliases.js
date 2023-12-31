"use strict";
function combine(input1, input2, resultType) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === '감자') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(12, 34, '감자');
const combinedStringAges = combine('12', '34', '감자');
const combinedNames = combine('LimeFlavor', 'hello', '토마토');
console.log(combinedAges);
console.log(combinedNames);
console.log(combinedStringAges);
