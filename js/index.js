class User {
  constructor(name, age, status, course) {
    this._name = name;
    this.age = age;
    this.status = status;
    this.course = course;
  }
}

const user1 = new User("rew", 43, true);
const user2 = new User("pit", 23, false, 6);

let descriptor = Object.getOwnPropertyDescriptor(user1, "age"); // дозволяє отримати повну інформацію про властивість обєкта(Властивості об’єкта, крім value, мають три спеціальні атрибути (так звані “прапори”):)
console.log(descriptor);

Object.defineProperty =
  (user2,
  "age",
  {
    configurable: true, // true/false --- дозволяє/забороняє зміну чи видалення прапорів властивості, однак дозволяє перевизначати властивость
    enumerable: true, // true/false --- дозволяє/забороняє бути штерованим в циклі (тобто даний ключ чи значення буде злічуватися циклом чи ні)
    value: 43,
    writable: true, // true/false --- дозволяє/забороняє перевизначати властивість
  });

let mathPi = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(mathPi);

const mathPiDesc = {
  configurable: false,
  enumerable: false,
  value: 3.141592653589793,
  writable: false,
}; // тобто в обєкті(класс) Math є ключ PI який, не можна перевизначати, не можна видалаяти чи змінювати будь-який прапорекь цієї властивості, та не ітерується
