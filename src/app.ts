class Department {  
    // private id: string;
    // private name: string;  
    private employees:string[] = []; 

    constructor(private readonly id: string, public name: string) {  
        // this.name = n;
        // this.id = id;
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
    constructor(id: string, private reports: string[]) {
        super(id, 'IT')
    }
    addReport(text:string) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports)
    }
}

const IT = new ITDepartment('userID', ['myongdol']);
IT.describe();  
IT.addEmployee('myongdol'); 
IT.addEmployee('dolmyong'); 
IT.printEmployeeInfomation() 
console.log(IT)

const accounting = new AccountingDepartment('user2', []);
accounting.addReport('보고합니다');
accounting.printReports();




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
