"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'myongdol',
    age: 99,
    hobbies: ['movie', 'walk'],
    role: Role.ADMIN
};
let favoriteMovie;
favoriteMovie = ['Intern', 123, true];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('어드민 입니다');
}
var Lightcolor;
(function (Lightcolor) {
    Lightcolor[Lightcolor["Red"] = 0] = "Red";
    Lightcolor[Lightcolor["Yellow"] = 1] = "Yellow";
    Lightcolor[Lightcolor["Green"] = 2] = "Green";
})(Lightcolor || (Lightcolor = {}));
let TrafficLight = Lightcolor.Yellow;
console.log(TrafficLight);
let value = 5;
value = "string";
value = [1, 2, 3];
value = { key: "value" };
console.log(value);
