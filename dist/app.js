"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fisicalYear = 2023;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT부서 - ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('보고서 없음');
    }
    set mostRecentReport2(value) {
        if (!value) {
            throw new Error('유효한 값을 전달 해주세요');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'IT');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    describe() {
        console.log('회계부서 - ID: ' + this.id);
    }
    addEmployee(name) {
        if (name === 'myongdol') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('김씨');
console.log(employee1, Department.fisicalYear);
const IT = new ITDepartment('userID', ['myongdol']);
IT.describe();
IT.addEmployee('myongdol');
IT.addEmployee('dolmyong');
IT.printEmployeeInfomation();
console.log(IT);
const accounting = new AccountingDepartment('user2', []);
accounting.mostRecentReport2 = 'abc';
accounting.addReport('보고합니다');
accounting.addEmployee('나그네');
accounting.describe();
console.log(accounting.mostRecentReport);
class Shape {
    constructor(name) {
        this.name = name;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Triangle extends Shape {
    constructor(base, height) {
        super('Triangle');
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}
const circle = new Circle(5);
console.log(`${circle.name}의 넓이: ${circle.calculateArea()}`);
const triangle = new Triangle(4, 6);
console.log(`${triangle.name}의 넓이: ${triangle.calculateArea()}`);
