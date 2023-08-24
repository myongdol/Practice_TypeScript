// const names:Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('완료');
//     }, 3000);
// });


// promise.then(data => {
//     data.split(' ');
// })


// function merge<T, U>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }

// const mergedObj = merge({name: '김씨', hobbie: ['watching movie']}, {age: 999});
// console.log(mergedObj.name); // '김씨'
// console.log(mergedObj.age);  // 999

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign(objA, objB) as T & U;
}

const mergedObj = merge({name: '김씨'}, {age: 999});
console.log(mergedObj.name); // '김씨'
console.log(mergedObj.age);  // 999
