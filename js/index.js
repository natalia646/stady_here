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

let descriptor = Object.getOwnPropertyDescriptor(user1, "age");
console.log(descriptor);

Object.defineProperty = (user2, 'age', {
  configurable: true,
  enumerable: true,
  value: 43,
  writable: true,
});
