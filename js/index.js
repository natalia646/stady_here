class User {
  constructor(name, age, status) {
    this.name = name;
    this.age = age;
    this.status = status;
  }

  greting() {
    return `Hi ${this.name}`;
  }
}

const user1 = new User("rew", 43, true);
const user2 = new User("pit", 23, false);
class Compere {
  static equal(a, b) {
    return a === b;
  }

  static more(a, b) {
    return a > b;
  }

  static less(a, b) {
    return a < b;
  }

  static half(n) {
    return n / 2;
  }
}

console.log(Compere.equal(5, 7));
console.log(Compere.more(user1.age, user2.age));


class Counting extends Compere{
  static count (...arg){
    return arg.reduce((acum, n) => acum += n )
  }
}

console.log(Counting.count(4, 6, 8, 9, 3));
console.log(Counting.equal(4, 6, 8, 9, 3));
console.log(Compere.count(4, 6, 8, 9, 3)); // false