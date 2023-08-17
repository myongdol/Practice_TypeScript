"use strict";
let user;
user = {
    name: 'Myongdol',
    age: 99,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
user.greet('안녕 하세요 - ');
