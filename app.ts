function add(n1: number, n2: number):number {
    return n1 + n2;
}

function printResult(num: number) { 
    console.log('result: ' + num)
}

let combineValues: Function;
combineValues = add;
combineValues = printResult;
// combineValues = 999;

console.log(combineValues(10, 10));