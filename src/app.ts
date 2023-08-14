class Department {  
    // private id: string;
    // private name: string;  
    private employees:string[] = []; 

    constructor(private id: string, public name: string) {  
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

const accounting = new Department('userID', 'Accounting');
accounting.describe();  
accounting.addEmployee('myongdol'); 
accounting.addEmployee('dolmyong'); 
accounting.printEmployeeInfomation() 



// const accountingCopy = { name:'myongdol',describe: accounting.describe };
// accountingCopy.describe(); // myongdol 출력됨
