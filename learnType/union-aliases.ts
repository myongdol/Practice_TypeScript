type CombineType = number | string;
type ConversionDec = '감자' | '토마토';

function combine(input1: CombineType, input2: CombineType, resultType: ConversionDec) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultType === '감자' ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultType === '감자') {
    //      return +result
    // } else {
    //     return result.toString();
    // }
}

const combinedAges = combine(12, 34, '감자');
const combinedStringAges = combine('12', '34', '감자');
const combinedNames = combine('LimeFlavor', 'hello', '토마토');

console.log(combinedAges);
console.log(combinedNames);
console.log(combinedStringAges);