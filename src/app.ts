class Department {  //클래스 정의 부서에 관련된 정보와 작업을 다룸
    name: string;  // 부서 이름을 저장하는 역할
    private employees:string[] = []; // 부서에 속한 직원들의 이름을 배열로 저장

    constructor(n: string) {  // 생성자 함수, 부서의 이름을 받아서 초기화
        this.name = n;
    }

    describe(this: Department) { //메서드, this 매개변수는 현재 클래스의 인스턴스 가리킴
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) { //메서드, 부서에 직원을 배열에 추가 합니다.
        this.employees.push(employee)
    }

    printEmployeeInfomation() { //메서드, 부서의 직원 수와 이름을 출력 합니다.
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting'); //Department클래스의 인스턴스를 생성, 생성자에 Accounting을 전달하여 부서 이름을 초기화
accounting.describe();  //describe 메서드를 호출하여 부서 이름 출력
accounting.addEmployee('myongdol'); // addEmployee를 호출하여 myongdol 이라는 직원추가
accounting.addEmployee('dolmyong'); //  ""  dolmyong이라는 직원 추가
accounting.printEmployeeInfomation() // 직원 수와 직원 이름 출력
// accounting.employees[2] = '나그네';


// const accountingCopy = { name:'myongdol',describe: accounting.describe };
// accountingCopy.describe(); // myongdol 출력됨
