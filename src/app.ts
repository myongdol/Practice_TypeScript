class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

const accounting = new Department('Accounting');

console.log(accounting)



// 함수를 변수에 할당
const add = (a: number, b: number) => a + b;

// 함수를 다른 함수의 인자로 전달
const applyOperation = (operation: (a: number, b: number) => number, a: number, b: number) => {
    return operation(a, b);
}

const result = applyOperation(add, 5, 3); // add 함수를 전달하여 연산 수행
console.log(result); // 출력: 8

// 함수를 반환값으로 사용
const getMultiplier = (factor: number) => {
    return (num: number) => num * factor;
}

const multiplyBy2 = getMultiplier(2);
const multiplyBy3 = getMultiplier(3);

console.log(multiplyBy2(4)); // 출력: 8
console.log(multiplyBy3(4)); // 출력: 12


// 객체를 변수에 할당
const person = {
    name: "Myongdol",
    age: 99,
};

// 객체를 다른 객체의 속성으로 사용
const userDetails = {
    user: person,
    isAdmin: false,
};

console.log(userDetails.user.name); // 출력: Myongdol

// 객체를 함수의 인자로 전달
const displayUserInfo = (user: { name: string, age: number }) => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

displayUserInfo(person); // 출력: Name: Myongdol, Age: 99