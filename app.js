//  const person: {
//     name: string,
//     age: number,
//  } = {
//    const person: {
//       name:string;
//       age: number;
//       hobbies: string[];
//       role: [number, string]
//    }= {
//     name: 'myongdol',
//     age: 99,
//     hobbies: ['movie', 'walk'],
//     role: [2, 'author']
//  }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'myongdol',
    age: 99,
    hobbies: ['movie', 'walk'],
    role: Role.ADMIN
};
//  person.role.push('myongdol');
//  person.role[1] = 12;
var favoriteMovie;
favoriteMovie = ['Intern', 123, true];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
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
var TrafficLight = Lightcolor.Yellow;
console.log(TrafficLight);
var value = 5;
value = "string";
value = [1, 2, 3];
value = { key: "value" };
console.log(value);
