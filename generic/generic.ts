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


class 데이터보관함<T extends string | number | boolean> {
    private data: T[] = [];

    추가하기(item: T) {
        this.data.push(item);
    };

    제거하기(item: T) {
        if(this.data.indexOf(item) === 1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };

    획득하기() {
        return [...this.data];
    }
}

const 글자보관함 = new 데이터보관함<string>();
글자보관함.추가하기('김씨');
글자보관함.추가하기('헬로');
글자보관함.제거하기('헬로')
console.log(글자보관함.획득하기());

// const 객체보관함 = new 데이터보관함<object>();
// 객체보관함.추가하기({name: '이씨'});
// 객체보관함.추가하기({name: '최씨'});
// 객체보관함.제거하기({name: '이씨'});
// console.log(객체보관함.획득하기());


interface 목표 {
    제목: string;
    내용: string;
    날짜: Date;
};

function 목표생성(제목: string, 내용: string, 날짜: Date): 목표 {
    let 작은목표: Partial<목표> = {};
    작은목표.제목 = 제목;
    작은목표.내용 = 내용;
    작은목표.날짜 = 날짜;
    return 작은목표 as 목표;
}
const 출석부: Readonly<string[]> = ['김씨', '이씨'];