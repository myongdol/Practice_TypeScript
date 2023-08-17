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
        super(id, '회계부서');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('user2', []);
        return this.instance;
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
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.mostRecentReport2 = 'abc';
accounting.addReport('보고합니다');
accounting.addEmployee('나그네');
accounting.describe();
console.log(accounting.mostRecentReport);
class PlayerInfo {
    constructor() {
        this.playerName = "Guest";
    }
    static getInstance() {
        if (!PlayerInfo.instance) {
            PlayerInfo.instance = new PlayerInfo();
        }
        return PlayerInfo.instance;
    }
    setPlayerName(name) {
        this.playerName = name;
    }
    getPlayerName() {
        return this.playerName;
    }
}
const player1 = PlayerInfo.getInstance();
const player2 = PlayerInfo.getInstance();
player1.setPlayerName("Myongdol");
console.log(player2.getPlayerName());
