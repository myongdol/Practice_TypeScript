// type AddFn  = (a: number, b: number) => number;

// let add: AddFn;

// add = (n1: number, n2: number) => {
//     return n1 + n2;
// }
interface AddFn {
    (a: number, b:number): number
}

let add: AddFn;


add = (n1: number, n2: number) => {
    return n1 + n2;
}



interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 99;

    constructor(n: string) {
        this.name = n;
        if(n){
            this.name = n;
        }
    }

    greet(phrase: string) {
        if(this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('안녕하세요')
        }
        
    }
}


let user: Greetable;

user = new Person('Myongdol');
console.log(user)






// interface Shape {
//     getArea(): number;
// }

// class Circle implements Shape {
//     constructor(private radius: number) {}

//     getArea() {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// class Rectangle implements Shape {
//     constructor(private width: number, private height: number) {}

//     getArea() {
//         return this.width * this.height;
//     }
// }

// const circle = new Circle(5);
// const rectangle = new Rectangle(4, 6);

// console.log(circle.getArea()); // 원의 넓이 출력
// console.log(rectangle.getArea()); // 직사각형의 넓이 출력
