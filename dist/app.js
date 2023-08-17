"use strict";
class Person {
    constructor(n) {
        this.age = 99;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user;
user = new Person('Myongdol');
console.log(user);
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(circle.getArea());
console.log(rectangle.getArea());
