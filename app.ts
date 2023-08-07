//  const person: {
//     name: string,
//     age: number,

//  } = {
   const person: {
      name:string;
      age: number;
      hobbies: string[];
      role: [number, string]
   }= {
    name: 'myongdol',
    age: 99,
    hobbies: ['movie', 'walk'],
    role: [2, 'author']
 }

 person.role.push('myongdol');
//  person.role[1] = 12;

 let favoriteMovie: string[];
 favoriteMovie = ['Intern'];

console.log(person.name)

for (const hobby of person.hobbies) {
   console.log(hobby.toUpperCase())
}