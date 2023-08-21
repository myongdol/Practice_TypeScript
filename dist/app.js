"use strict";
const e1 = {
    name: 'myongdol',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
;
function printEmplyeeInfo(emp) {
    console.log('Name ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startDate: ' + emp.startDate);
    }
}
printEmplyeeInfo(e1);
printEmplyeeInfo({ name: 'Myongdol', startDate: new Date() });
class Car {
    drive() {
        console.log('운전중');
    }
}
class Boat {
    drive() {
        console.log('항해중');
    }
    carryFish(amount) {
        console.log('물고기 운반중 ' + amount + '마리');
    }
}
const v1 = new Car();
const v2 = new Boat();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Boat) {
        vehicle.carryFish(3000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('이동속도는 : ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 30 });
const paragraph = document.getElementById('message-output');
const userInputElement = document.getElementById('user-input');
userInputElement.value = '안녕하세요';
if (userInputElement) {
    userInputElement.value = '반갑습니다.';
}
const errorBag = {
    email: '유효하지 않은 이메일 입니다.',
    username: '첫 글자는 대문자여야 합니다.'
};
