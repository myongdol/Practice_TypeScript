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
        this.id = 'userID2'
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
accounting.printEmployeeInfomation() 



class Person {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person("Myongdol");
console.log(person.name); // 출력: "Myongdol"
person.name = "나그네"; // 오류: Cannot assign to 'name' because it is a read-only property.

// const accountingCopy = { name:'myongdol',describe: accounting.describe };
// accountingCopy.describe(); // myongdol 출력됨
