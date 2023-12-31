abstract class Department {  
    static fisicalYear = 2023;
    // private id: string;
    // private name: string;  
    protected  employees:string[] = []; 

    constructor(protected readonly id: string, public name: string) {  
        // this.name = n;
        // this.id = id;
    }
    
    static createEmployee(name: string) {
        return {name: name};
    }

    abstract describe(this: Department): void; 

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

 describe() {
     console.log('IT부서 - ID: ' + this.id)
 }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    
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
 
    private constructor(id: string, private reports: string[]) {
        super(id, '회계부서')
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('user2', []);
        return this.instance
    }

    describe() {
        console.log('회계부서 - ID: ' + this.id)
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

// const accounting = new AccountingDepartment('user2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2)
// console.log(accounting.mostRecentReport);
// accounting.mostRecentReport2 = '';
accounting.mostRecentReport2 = 'abc';
accounting.addReport('보고합니다');
accounting.addEmployee('나그네')
// accounting.printReports();
// accounting.printEmployeeInfomation();
accounting.describe();

console.log(accounting.mostRecentReport);


class PlayerInfo {
    private static instance: PlayerInfo; // 정적 변수로 싱글턴 인스턴스 저장
    private playerName: string;

    private constructor() {
        this.playerName = "Guest"; // 기본 이름 설정
    }

    // 싱글턴 인스턴스 반환
    public static getInstance(): PlayerInfo {
        if (!PlayerInfo.instance) {
            PlayerInfo.instance = new PlayerInfo();
        }
        return PlayerInfo.instance;
    }

    // 플레이어 이름 설정
    public setPlayerName(name: string): void {
        this.playerName = name;
    }

    // 플레이어 이름 가져오기
    public getPlayerName(): string {
        return this.playerName;
    }
}



const player1 = PlayerInfo.getInstance();
const player2 = PlayerInfo.getInstance();

player1.setPlayerName("Myongdol");
console.log(player2.getPlayerName()); // 출력: "Myongdol"

// // 추상 클래스 정의
// abstract class Shape {
//     constructor(public name: string) {}

//     abstract calculateArea(): number; // 추상 메서드
// }

// // 원 클래스
// class Circle extends Shape {
//     constructor(public radius: number) {
//         super('Circle');
//     }

//     calculateArea(): number {
//         return Math.PI * this.radius ** 2;
//     }
// }

// // 삼각형 클래스
// class Triangle extends Shape {
//     constructor(public base: number, public height: number) {
//         super('Triangle');
//     }

//     calculateArea(): number {
//         return 0.5 * this.base * this.height;
//     }
// }

// // 추상 클래스와 하위 클래스 사용
// const circle = new Circle(5);
// console.log(`${circle.name}의 넓이: ${circle.calculateArea()}`);

// const triangle = new Triangle(4, 6);
// console.log(`${triangle.name}의 넓이: ${triangle.calculateArea()}`);


// class MathUtils {
//   static add(x: number, y: number): number {
//     return x + y;
//   }
// }

// const result = MathUtils.add(10, 20); // 30
// console.log(result)

// class Counter {
//   static count: number = 0;

//   static increment() {
//     Counter.count++;
//   }
// }

// Counter.increment();
// console.log(Counter.count); // 1


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
