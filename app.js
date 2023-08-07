//  const person: {
//     name: string,
//     age: number,
//  } = {
var person = {
    name: 'myongdol',
    age: 99,
    hobbies: ['movie', 'walk'],
    role: [2, 'author']
};
person.role.push('myongdol');
person.role[1] = 12;
var favoriteMovie;
favoriteMovie = ['Intern'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
