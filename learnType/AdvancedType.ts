type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'myongdol',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic;


function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): number
function add(a: number, b: string): number
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
};

const result = add('계', '란');
result.split(' ');


const fetchedUserData = {
    id: 'user1',
    name: '김회장',
    job: { title: 'CEO', description: '김회장 컴퍼니'}
}

console.log(fetchedUserData?.job?.title);


const userInput = null; 

const storedData = userInput ?? 'DEFAULT';








// type UnknownEmployee = Employee | Admin;

// function printEmplyeeInfo (emp: UnknownEmployee) {
//     console.log('Name '+ emp.name)
//     if('privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges)
//     }
//     if('startDate' in emp) {
//         console.log('startDate: ' + emp.startDate)
//     }
// }

// printEmplyeeInfo(e1);
// printEmplyeeInfo({name: 'Myongdol', startDate: new Date()})


// class Car {
//     drive() {
//         console.log('운전중');
//     }
// }

// class Boat {
//     drive() {
//         console.log('항해중');
//     }

//     carryFish(amount: number) {
//         console.log('물고기 운반중 ' + amount +'마리')
//     }
// }

// type Vehicle = Car | Boat;

// const v1 = new Car();
// const v2 = new Boat();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive()

//     if(vehicle instanceof Boat) {
//         vehicle.carryFish(3000);
//     }  
// }

// useVehicle(v1);
// useVehicle(v2);


// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch(animal.type) {
//         case 'bird': 
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//     }
//     console.log('이동속도는 : ' + speed)
// }

// moveAnimal({type: 'bird', flyingSpeed: 30});


// const paragraph = document.getElementById('message-output');

// // const userInputElement = document.getElementById('user-input')!;
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
// userInputElement.value = '안녕하세요';

// if(userInputElement) {
//     (userInputElement as HTMLInputElement).value = '반갑습니다.';
// }


// interface ErrorContainer {
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: '유효하지 않은 이메일 입니다.',
//     username: '첫 글자는 대문자여야 합니다.'
// };