'use strict'


let myNumber = 10;
myNumber = 10e-1;
myNumber = 0x00F;
myNumber = 0o007;
myNumber = Infinity;

let myFirstName = "Alberto";
let myLastName = "Botero";
let myFullName = `First Name:\t${myFirstName}\nLast Name:\t${myLastName}`;
let a = 8;
let valueA = 10;
let valueB = 5;

let total = valueA * valueB;

let fullName = `${myFirstName} ${myLastName}`;

console.log(total);

const RED = Symbol();
const ORANGE = Symbol();

console.log('Value of RED is ' + RED.valueOf().toString());
 console.log(RED === ORANGE);

 var name = `Alberto Botero`;
console.log(`Hello, ${name}!`);

console.log('5 is equal to "5"?'); 
console.log( 5 == "5");

console.log('5 is equal to "5"?'); 
console.log( 5 === "5");

let obj1 = {};

obj1.firstName = 'Alberto';
obj1.fullName = fullName;

let obj2 = { firstName: "Erik", lastName: "Davis"};

obj2.fullName = function () {
    return this.firstName + ' ' + this.lastName;
}

console.log(obj2.fullName());

console.log(JSON.stringify(obj2));


let myArray = [];

myArray.push("Alberto Botero");
myArray.push(47);


let myArray2 = ['Botero', 45];
console.log(myArray[0]);
console.log(obj1['firstName']);
console.log(obj1.fullName);

let myBirthday = new Date(1972, 0, 15);
console.log(myBirthday.toJSON());



