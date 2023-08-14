"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`'Department (${this.id}: ${this.name})`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
        this.id = 'userID2';
    }
    printEmployeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('userID', 'Accounting');
accounting.describe();
accounting.addEmployee('myongdol');
accounting.addEmployee('dolmyong');
accounting.printEmployeeInfomation();
class Person {
    constructor(name) {
        this.name = name;
    }
}
const person = new Person("Myongdol");
console.log(person.name);
person.name = "나그네";
