"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
const add = (a, b) => a + b;
const applyOperation = (operation, a, b) => {
    return operation(a, b);
};
const result = applyOperation(add, 5, 3);
console.log(result);
const getMultiplier = (factor) => {
    return (num) => num * factor;
};
const multiplyBy2 = getMultiplier(2);
const multiplyBy3 = getMultiplier(3);
console.log(multiplyBy2(4));
console.log(multiplyBy3(4));
const person = {
    name: "Myongdol",
    age: 99,
};
const userDetails = {
    user: person,
    isAdmin: false,
};
console.log(userDetails.user.name);
const displayUserInfo = (user) => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
};
displayUserInfo(person);
