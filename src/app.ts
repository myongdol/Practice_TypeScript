class Department {  
    static fisicalYear = 2023;
    // private id: string;
    // private name: string;  
    protected  employees:string[] = []; 

    constructor(private readonly id: string, public name: string) {  
        // this.name = n;
        // this.id = id;
    }
    
    static createEmployee(name: string) {
        return {name: name};
    }

    describe(this: Department) { 
        console.log(`'Department (${this.id}: ${this.name})`);
    }

    addEmployee(employee: string) { 
        this.employees.push(employee)
    }

    printEmployeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
 admins: string[];
 constructor(id: string, admins:string[]) {
    super(id, 'IT');
    this.admins = admins;
 }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    
    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('보고서 없음');
    }
    
    set mostRecentReport2(value: string) {
        if(!value) {
            throw new Error('유효한 값을 전달 해주세요')
        }
        this.addReport(value);
    }
 
    constructor(id: string, private reports: string[]) {
        super(id, 'IT')
        this.lastReport = reports[0];
    }
    addEmployee(name: string) {
        if(name==='myongdol') {
            return;
        }
        this.employees.push(name)
    }

    addReport(text:string) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports)
    }
}
const employee1 = Department.createEmployee('김씨');
console.log(employee1, Department.fisicalYear)
const IT = new ITDepartment('userID', ['myongdol']);
IT.describe();  
IT.addEmployee('myongdol'); 
IT.addEmployee('dolmyong'); 
IT.printEmployeeInfomation() 
console.log(IT)

const accounting = new AccountingDepartment('user2', []);
// console.log(accounting.mostRecentReport);
// accounting.mostRecentReport2 = '';
accounting.mostRecentReport2 = 'abc';
accounting.addReport('보고합니다');
accounting.printReports();
accounting.addEmployee('나그네')
accounting.printEmployeeInfomation();

console.log(accounting.mostRecentReport);


class MathUtils {
  static add(x: number, y: number): number {
    return x + y;
  }
}

const result = MathUtils.add(10, 20); // 30
console.log(result)

class Counter {
  static count: number = 0;

  static increment() {
    Counter.count++;
  }
}

Counter.increment();
console.log(Counter.count); // 1


// class Temperature {
//     private _celsius: number = 0;

//     get celsius(): number {
//         return this._celsius;
//     }

//     set celsius(value: number) {
//         if (value < -273.15) {
//             throw new Error("에러발생.");
//         }
//         this._celsius = value;
//     }
// }

// const temp = new Temperature();
// temp.celsius = 25; // 세터를 사용하여 값을 설정
// console.log(temp.celsius); // 게터를 사용하여 값을 조회
// class Person {
//     readonly name: string;

//     constructor(name: string) {
//         this.name = name;
//     }
// }

// const person = new Person("Myongdol");
// console.log(person.name); // 출력: "Myongdol"
// person.name = "나그네"; // 오류: Cannot assign to 'name' because it is a read-only property.

// const accountingCopy = { name:'myongdol',describe: accounting.describe };
// accountingCopy.describe(); // myongdol 출력됨
