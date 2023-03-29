// в об'єктах
const person = {
  id: 25,
  statis: true,
};
const {id: number, statis } = person;
console.log(number);
console.log(statis);

// в масивах
const numbers = ['one', 'two', 'three', 'four'];
const [one, two, , four] = numbers;
const [,, ...three] = numbers; // може бути тільки в кінці
console.log(one);
console.log(two);
console.log(three);
console.log(four);

// обмін значеннями
let a = 1;
let b = 2;
[a, b] = [b, a];

//аргументи функції
const student = {
  name: "lisa",
  age: 23,
  nation: "Ukrain",
  family: {
    mother: 'Tania',
    father: 'Bob',
    sister: 'Alisa'
  },
  greting: function () {
    return  `Hello! My name is ${this.name}. My age is ${this.age}. And I from ${this.nation}`;
  },
};


const student2 = {
  name: "Ala",
  age: 43,
  nation: "Poland",
  family: {
    mother: 'Tania',
    father: 'Bob',
    sister: 'Alisa'
  },
}

function whoIs({name, age, family: {mother: motherName} }){
  return student.greting.call(student2) + `. My mother's ${motherName}`
}
console.log(whoIs(student2))