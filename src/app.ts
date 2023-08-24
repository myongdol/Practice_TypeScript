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
console.log(mergedObj);

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = '값이 없습니다.';
    if(element.length === 1) {
        descriptionText = '값을 하나 얻었습니다.' 
    } else if (element.length > 1) {
        descriptionText = '값이 ' + element.length + '개 입니다.'
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('안녕하세요?'))


function 추출및변환<T extends object, U extends keyof T>(obj: T, key: U) {
    return '값은: ' + obj[key];
}

추출및변환({name: '김씨'}, 'name')

