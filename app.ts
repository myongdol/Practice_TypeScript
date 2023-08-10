function add(n1: number, n2: number):number {
    return n1 + n2;
}

function printResult(num: number) { 
    console.log('result: ' + num)
}

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;
// combineValues = 999;

console.log(combineValues(10, 10));

type MathFunction = (a: number, b: number) => number;

const plus: MathFunction = (a, b) => a + b;
const minus: MathFunction = (a, b) => a - b;

console.log(plus(10, 10));
console.log(minus(20, 10));