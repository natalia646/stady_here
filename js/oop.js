
//! Конструктори
function User(name, age, status) {
    // конструктор - Функція що визначає характеристики обєкта
    this.name = name;
    this.age = age;
    this.status = status;
    this.greting = function () {
      // використю ф-ю
      console.log(`Hi ${this.name}`);
    };
  }
  
  const user1 = new User("nata", 22, true); //new створює новий обєкт
  console.log(user1);
  user1.greting();
  const user2 = new User("anna", 24, false);
  console.log(user2);
  user2.greting();
  
  // якщо в обєкті повинен бути ще обєктб то використовуємо:
  function Users(name, age, status, frend) {
    //композицію
    this.name = name;
    this.age = age;
    this.status = status;
    this.frend = frend;
    console.log(this);
  }
  const users1 = new Users("nata", 22, true, { name: "iva", age: 23 });
  
  function Userss(name, age, status, frendName, frendAge) {
    //агрегацію
    this.name = name;
    this.age = age;
    this.status = status;
    this.frend = { name: frendName, age: frendAge };
    console.log(this);
  }
  const userss1 = new Userss("nata", 22, true, "iva", 24);
  
  //! Object and OOP
  function beep() {
    console.log(`${this.make} ${this.modal} beep-beep`);
  }
  const teslaX = {};
  teslaX.make = "Tesla";
  teslaX.model = "X";
  teslaX.prise = 90000;
  teslaX.beep = beep;
  
  console.log(teslaX);
  teslaX.beep();
  
  const miniCooper = {
    make: "Mini",
    modal: "Cooper",
    prise: 40000,
    beep: beep,
  };
  console.log(miniCooper);
  miniCooper.beep();
  
  // конструктор
  function Car(make, modal, prise) {
    this.make = make;
    this.modal = modal;
    this.prise = prise;
    this.beep = function () {
      console.log(`${this.make} ${this.modal} beep-beep`);
    };
  }
  
  const porschPanamera = new Car("Porsch", "panamera", 150000);
  const fordMustang = new Car("Ford", "Mustang", 200000);
  
  // клас
  class SuperCar {
    constructor(make, modal, prise, name) {
      this.make = make; // назю власними властивостями
      this.modal = modal;
      this.prise = prise;
      this._name = name
    }
    beep() {
      console.log(`Super car ${this.make} ${this.modal} beep-beep`);
    }
  
    get name() {   // просто поверне певну властивість екземпляра exemplar.name
      return this._name;
    }
    set name(value) {    // якщо екземпляру присвоїти значення value (exemplar.name = value) то  set-ом можна керувати що виводити
        if (value.length < 4) {
        console.log("Name is too short");
        return;
      }
      return this._name;
    }
  }
  
  const ferariLa = new SuperCar("Fereri", "La", 200000);
  console.log(ferariLa);
  console.log(fordMustang);
  
  class EVSuserCar extends SuperCar {
    // наслідування
    constructor(make, modal, prise, battery) {
      super(make, modal, prise);
      this.battery = battery;
    }
    beep() {
      super.beep();
      console.log(`Battery ${this.battery}`);
    }
  }
  
  const hummerEV = new EVSuserCar("GM", "Hummer", 150000, 42);
  console.log(hummerEV);
  hummerEV.beep();
  
  
  // STATIC 
  const user12 = new User("rew", 43, true);
  const user22 = new User("pit", 23, false);
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
  console.log(Compere.more(user12.age, user22.age));
  
  //(статичні методи доступни при наслідування)
  class Counting extends Compere{
    static count (...arg){
      return arg.reduce((acum, n) => acum += n )
    }
  }
  
  console.log(Counting.count(4, 6, 8, 9, 3));
  console.log(Counting.equal(4, 6, 8, 9, 3));
  console.log(Compere.count(4, 6, 8, 9, 3)); // false


  //! apply, call, bind
function Car(make, modal, prise) {
    this.make = make;
    this.modal = modal;
    this.prise = prise;
    this.greeting = function () {
      return `Hello ${this.make} ${this.modal}`;
    };
  }
  
  const porschPanameraa = new Car("Porsch", "panamera", 150000);
  const fordMustangg = new Car("Ford", "Mustang", 200000);
  console.log(porschPanameraa);
  
  Car.prototype.beep = function () {
    return `${this.make} ${this.modal} beep-beep`;
  };
  Car.prototype.say = function (text) {
    this.text = text;
    return `${this.make} ${this.modal} ${this.text}`;
  };
  
  console.log(porschPanameraa.beep());
  console.log(fordMustangg.say("cool auto"));
  console.log(fordMustangg.greeting());
  
  porschPanameraa.showPrise = function () {
    return `${this.prise}`;
  };
  console.log(porschPanameraa.showPrise());
  
  //apply (виконай цю функцію, яка є в конструктоді 1, для конструктора 2)
  console.log(porschPanamera.showPrise.apply(fordMustang));
  
  porschPanamera.year = function (year, month) {
    return `I'm from ${month} ${year} `;
  };
  console.log(porschPanamera.year(2022, "September"));
  
  console.log(porschPanamera.year.apply(fordMustang, [2021, "May"]));
  //call тe саме що apply, але приймає аргументи через кому, не як масив
  console.log(porschPanamera.year.call(fordMustang, 2021, "May"));
  
  //bind просто копіює ту чи іншу функцію, а не її результат (різними способами)
  const showPYear = porschPanamera.year.bind(fordMustang, 2019, "Jun");
  console.log(showPYear());
  const showPYear2 = porschPanamera.year.bind(fordMustang);
  console.log(showPYear2(2018, "December"));
  