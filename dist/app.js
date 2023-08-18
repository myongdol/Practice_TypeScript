"use strict";
class Person {
    constructor(n) {
        this.age = 99;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user;
user = new Person('Myongdol');
console.log(user);
