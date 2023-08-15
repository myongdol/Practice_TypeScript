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
    constructor(id, reports) {
        super(id, 'IT');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
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
accounting.addReport('보고합니다');
accounting.printReports();
