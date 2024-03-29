"use strict";

function log(x) {
  console.log(x);
}

// const myObject = {
//   property: "Value",
//   otherProperty: 77,
//   "obnoxious property": function () {
//     return 5;
//   },
// };

// console.log(myObject.property);
// console.log(myObject["obnoxious property"]);

// const variable = "property";

// console.log(myObject[variable]);
// console.log(myObject.variable); //undefined it's looking for a property named 'variable' in our object
// console.log(myObject("property"));

// const playerOneName = "tim";
// const playerTwoName = "jenn";
// const playerOneMarker = "X";
// const playerTwoMarker = "O";

// const playerOne = {
//   name: "tim",
//   marker: "X",
//   score: 15,
// };

// const playerTwo = {
//   name: "jenn",
//   marker: "O",
//   score: 5,
// };

// // function printName(player) {
// //   console.log(player.name);
// // }

// // printName(playerTwo);

// function keepScore() {
//   if (playerOne.score >= 10) {
//     gameOver(playerOne);
//   } else if (playerTwo.score >= 10) {
//     gameOver(playerTwo);
//   }
// }

// keepScore();

// function gameOver(winnerName) {
//   console.log("Congratulations");
//   console.log(winnerName.name + " is the winner!");
// }

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function () {
//     console.log(name);
//   };
// }

// const player1 = new Player("Mike", "X");
// const player2 = new Player("Alise", "O");

// console.log(player1.name);
// console.log(player2.name);

// console.log(Object.getPrototypeOf(player1) === Player.prototype);
// Object.getPrototypeOf(player2) === Player.prototype;

// console.log(Object.getPrototypeOf(player1) === Object.getPrototypeOf(player2));

// Player.prototype.sayHello = function () {
//   console.log("Hello, I'm a player!");
// };

// player1.sayHello();
// player2.sayHello();

// const player = new Player("burak", "O");
// console.log(player.name);
// player.sayName();

// const newPlayer = new Player("Rachael", "X");
// console.log(newPlayer.name);
// newPlayer.sayName();

// function Student(name, grade) {
//   this.name = name;
//   this.grade = grade;
// }

// Student.prototype.sayName = function () {
//   console.log(this.name);
// };

// Student.prototype.goToProm = function () {
//   console.log("Eh.. go to prom?");
// };

// const newStudent = new Student("burky", 4);
// newStudent.sayName();
// newStudent.goToProm();

// function Student() {}

// Student.prototype.sayName = function () {
//   console.log(this.name);
// };

// EightGrader.prototype = Object.create(Student.prototype);

// function EightGrader(name) {
//   this.name = name;
//   this.grade = 8;
// }

// const studentOne = new EightGrader("Mike");

// studentOne.sayName();

// NinthGrade.prototype = Object.create(Student.prototype);

// NinthGrade.prototype.sayName = function () {
//   console.log("HAHAHAHA");
// };

// function NinthGrade(name) {
//   this.name = name;
//   this.grade = 9;
// }

// const studentTwo = new NinthGrade("perl");
// studentTwo.sayName();

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = function () {
//     return `${title} by ${author}, ${pages} pages, ${read}`;
//   };
// }

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read");

// console.log(theHobbit.info());

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function () {
//     console.log(name);
//   };
// }

// console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype);

// const player1 = new Player("Burky", "X");

// console.log(player1.valueOf());

// console.log(player1.hasOwnProperty("valueOf"));
// console.log(Object.prototype.hasOwnProperty("valueOf"));

// console.log(Object.getPrototypeOf(Object.prototype));

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayName = function () {
//   console.log(`Hello, I'm ${this.name}!`);
// };

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }

// Player.prototype.getMarker = function () {
//   console.log(`My marker is "${this.marker}"`);
// };

// console.log(Object.getPrototypeOf(Player.prototype));

// Object.setPrototypeOf(Player.prototype, Person.prototype);
// console.log(Object.getPrototypeOf(Player.prototype));

// const player1 = new Player("Burky", "X");
// const player2 = new Player("Rachy", "O");

// player1.sayName();
// player2.sayName();

// player1.getMarker();
// player2.getMarker();

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayName = function () {
//   console.log(`Hello, I'm ${this.name}!`);
// };

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }

// // Player.prototype = Person.prototype;
// Object.setPrototypeOf(Player.prototype, Person.prototype);

// console.log(Object.getPrototypeOf(Player.prototype));

// function Enemy(name) {
//   this.name = name;
//   this.marker = "^";
// }

// // Enemy.prototype = Person.prototype;
// Object.setPrototypeOf(Enemy.prototype, Person.prototype);

// console.log(Object.getPrototypeOf(Enemy.prototype));

// Enemy.prototype.sayName = function () {
//   console.log("HAHA");
// };

// const carl = new Player("carl", "X");
// carl.sayName();

// let x = {};

// log(Object.getPrototypeOf(x));

// log(x.toString());

// let y = [];

// log(Object.getPrototypeOf(y));

// log(y.__proto__.__proto__);

// log(Object.getPrototypeOf(y) === Array.prototype);
// log(Object.getPrototypeOf(Object.getPrototypeOf(y)) === Object.prototype);

// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
// }

// function Warrior(name, level, weapon) {
//   Hero.call(this, name, level);
//   this.weapon = weapon;
// }

// function Healer(name, level, spell) {
//   Hero.call(this, name, level);
//   this.spell = spell;
// }

// Object.setPrototypeOf(Healer.prototype, Hero.prototype);
// Object.setPrototypeOf(Warrior.prototype, Hero.prototype);

// Hero.prototype.greet = function () {
//   return `${this.name} says hello.`;
// };

// Warrior.prototype.attack = function () {
//   return `${this.name} attacks with the ${this.weapon}.`;
// };

// Healer.prototype.heal = function () {
//   return `${this.name} casts ${this.spell}.`;
// };

// const hero1 = new Warrior("Burky", 1, "axe");
// const hero2 = new Healer("Rachy", 1, "cure");

// log(hero1.attack());
// log(hero2.heal());

// log(hero1.greet());
// log(hero2.greet());

// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       alert("I walk");
//     }
//     this.isWalking = false;
//   },

//   sleep() {
//     this.isSleeping = true;
//   },
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal,
// };

// rabbit.sleep();
// rabbit.walk();

// log(rabbit);

// log(rabbit.isSleeping);
// log(rabbit.isWalking);

// animal.sleep();
// log(animal.isSleeping);
// log(animal);

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// // log(Object.keys(rabbit));

// // for (let prop in rabbit) log(prop);

// // log(Object.prototype.__proto__);
// // log(rabbit.__proto__.__proto__.__proto__);

// for (let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     log(`Our: ${prop}`);
//   } else {
//     log(`Inherited: ${prop}`);
//   }
// }

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// alert( rabbit.jumps ); // ? (1)

// delete rabbit.jumps;

// alert( rabbit.jumps ); // ? (2)

// delete animal.jumps;

// alert( rabbit.jumps ); // ? (3)

// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// alert(rabbit.jumps); // ? (1)

// delete rabbit.jumps;

// alert(rabbit.jumps); // ? (2)

// delete animal.jumps;

// alert(rabbit.jumps); // ? (3)

// let head = {
//   glasses: 1,
// };

// let table = {
//   __proto__: head,
//   pen: 3,
// };

// let bed = {
//   __proto__: table,
//   sheet: 1,
//   pillow: 2,
// };

// let pockets = {
//   __proto__: bed,
//   money: 2000,
// };

// // Object.setPrototypeOf(table.prototype, head.prototype);

// log(head.glasses);
// log(table.glasses);
// log(bed.glasses);
// log(pockets.glasses);

// let animal = {
//   eat() {
//     this.full = true;
//   },
// };

// let rabbit = {
//   __proto__: animal,
// };

// rabbit.eat();

// log(rabbit.full);
// log(rabbit);

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach = [food];
//   },
// };

// let speedy = {
//   __proto__: hamster,
//   // stomach: [],
// };

// let lazy = {
//   __proto__: hamster,
//   // stomach: [],
// };

// This one found the food
// speedy.eat("apple");
// log(speedy.stomach); // apple

// // This one also has it, why? fix please.
// log(lazy.stomach); // apple

// function test() {
//   this.testOne = "test1";
// }

// test();

// log(window.testOne);
// log(window === this);

// function test() {
//   log(this === undefined);
// }

// test();

// const calc = {
//   numb: 0,
//   increment() {
//     log(this === calc);
//     this.numb += 1;
//     return this.numb;
//   },
// };

// log(calc.increment());
// log(calc.increment());

// const myDog = Object.create({
//   sayName() {
//     log(this === myDog);
//     return this.name;
//   },
// });

// myDog.name = "Milo";

// log(myDog.sayName());

// function Pet(type, legs) {
//   this.type = type;
//   this.legs = legs;
//   // this.logInfo = function () {
//   //   log(this === myCat);
//   //   log(this === window);
//   //   log(`The ${this.type} has ${this.legs} legs`);
//   // };

//   this.logInfo = () => {
//     log(this === myCat);
//     log(`The ${this.type} has ${this.legs} legs`);
//   };
// }

// const myCat = new Pet("Cat", 4);

// // log(setTimeout(myCat.logInfo.bind(myCat), 1000));
// log(setTimeout(myCat.logInfo, 1000));

// // myCat.logInfo();

// function Country(name, traveled) {
//   this.name = name ? name : "United Kingdom";
//   this.traveled = Boolean(traveled); // transform to a boolean
// }

// Country.prototype.travel = function () {
//   this.traveled = true;
// };

// // Constructor invocation
// const france = new Country("France", false);
// // Constructor invocation
// const unitedKingdom = new Country();
// const turkey = new Country();

// france.travel(); // Travel to France

// log(turkey.name);
// log(turkey.traveled);
// log(turkey.traveled);

// log(unitedKingdom.traveled);
// log(france.traveled);

// log(france);
// france.travel(); // Travel to France
// log(france.traveled);

// log(unitedKingdom);
// unitedKingdom.travel();
// log(unitedKingdom.traveled);

// log(turkey);
// turkey.travel();
// log(turkey.traveled);

// function Vehicle(type, wheelsCount) {
//   if (!(this instanceof Vehicle)) {
//     throw Error("Error: Incorrect invocation");
//   }

//   this.type = type;
//   this.wheelsCount = wheelsCount;
//   return this;
// }

// // Constructor invocation
// const car = new Vehicle("Car", 4);
// log(car.type); // => 'Car'
// log(car.wheelsCount); // => 4
// log(car instanceof Vehicle); // => true

// // Function invocation. Throws an error.
// const brokenCar = Vehicle("Broken Car", 3);
