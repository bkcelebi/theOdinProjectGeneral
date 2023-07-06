"use strict";

const myObject = {
  property: "Value",
  otherProperty: 77,
  "obnoxious property": function () {
    return 5;
  },
};

// console.log(myObject.property);
// console.log(myObject["obnoxious property"]);

// const variable = "property";

// console.log(myObject[variable]);
// console.log(myObject.variable); //undefined it's looking for a property named 'variable' in our object
// console.log(myObject("property"));

const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

const playerOne = {
  name: "tim",
  marker: "X",
  score: 15,
};

const playerTwo = {
  name: "jenn",
  marker: "O",
  score: 5,
};

// function printName(player) {
//   console.log(player.name);
// }

// printName(playerTwo);

function keepScore() {
  if (playerOne.score >= 10) {
    gameOver(playerOne);
  } else if (playerTwo.score >= 10) {
    gameOver(playerTwo);
  }
}

// keepScore();

function gameOver(winnerName) {
  console.log("Congratulations");
  console.log(winnerName.name + " is the winner!");
}

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
}

const player1 = new Player("Mike", "X");
const player2 = new Player("Alise", "O");

console.log(player1.name);
console.log(player2.name);

console.log(Object.getPrototypeOf(player1) === Player.prototype);
Object.getPrototypeOf(player2) === Player.prototype;

console.log(Object.getPrototypeOf(player1) === Object.getPrototypeOf(player2));

Player.prototype.sayHello = function () {
  console.log("Hello, I'm a player!");
};

player1.sayHello();
player2.sayHello();

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

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read");

console.log(theHobbit.info());
