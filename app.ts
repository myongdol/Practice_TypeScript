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

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
 name: 'myongdol',
 age: 99,
 hobbies: ['movie', 'walk'],
 role: Role.ADMIN
}

 
//  person.role.push('myongdol');
//  person.role[1] = 12;

 let favoriteMovie: any[];
 favoriteMovie = ['Intern', 123, true];

console.log(person.name)

for (const hobby of person.hobbies) {
   console.log(hobby.toUpperCase())
}

if(person.role === Role.ADMIN) {
   console.log('어드민 입니다')
}

enum Lightcolor {
   Red,
   Yellow,
   Green,
  }
  
  let TrafficLight: Lightcolor = Lightcolor.Yellow;
  console.log(TrafficLight);

  let value: any = 5;
   value = "string";
   value = [1, 2, 3];
   value = { key: "value" };
   console.log(value);