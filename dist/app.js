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
    }
    printEmployeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
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
const IT = new ITDepartment('userID', ['myongdol']);
IT.describe();
IT.addEmployee('myongdol');
IT.addEmployee('dolmyong');
IT.printEmployeeInfomation();
console.log(IT);
const accounting = new AccountingDepartment('user2', []);
accounting.mostRecentReport2 = 'abc';
accounting.addReport('보고합니다');
accounting.printReports();
accounting.addEmployee('나그네');
accounting.printEmployeeInfomation();
console.log(accounting.mostRecentReport);
class Temperature {
    constructor() {
        this._celsius = 0;
    }
    get celsius() {
        return this._celsius;
    }
    set celsius(value) {
        if (value < -273.15) {
            throw new Error("에러발생.");
        }
        this._celsius = value;
    }
}
const temp = new Temperature();
temp.celsius = 25;
console.log(temp.celsius);
