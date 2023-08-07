//  const person: {
//     name: string,
//     age: number,

//  } = {
   const person = {
    name: 'myongdol',
    age: 99,
    hobbies: ['movie', 'walk']
 }

 let favoriteMovie: string[];
 favoriteMovie = ['Intern'];

console.log(person.name)

for (const hobby of person.hobbies) {
   console.log(hobby.toUpperCase())
}