var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = { firstName: "Shahed", lastName: "Islam" };    // Object

console.log(x.firstName, x.lastName);

var x = 16 + 4 + " Development";
console.log(x)
var x = "Development " + 16 + 4;
console.log(x)

//JavaScript Types are Dynamic
var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String

//Strings
var carName = "Volvo XC60";   // Using double quotes
var carName = 'Volvo XC60';   // Using single quotes

var answer = "It's alright";             // Single quote inside double quotes
var answer = "He is called 'Johnny'";    // Single quotes inside double quotes
var answer = 'He is called "Johnny"';    // Double quotes inside single quotes

//Numbers
var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals

//Booleans
var x = false;
var y = new Boolean(false);
console.log(y);

var IsLoggedIn = new Boolean(0); // false
var IsLoggedIn = new Boolean(NaN); // false
var IsLoggedIn = new Boolean("Foo"); // true
var IsLoggedIn = new Boolean(1); // true

//Arrays
var cars = ["Saab", "Volvo", "BMW"];
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log(cars);
console.log(person);

//The typeof Operator
typeof ""                  // Returns "string"
typeof "John"              // Returns "string"
typeof "John Doe"          // Returns "string"

typeof 0                   // Returns "number"
typeof 314                 // Returns "number"
typeof 3.14                // Returns "number"
typeof (3)                 // Returns "number"
typeof (3 + 4)             // Returns "number"
console.log(typeof (3 + 4));

//Undefined
var car;                // Value is undefined, type is undefined
truck = undefined;        // Value is undefined, type is undefined

//Empty Values
var car = "";              // The value is "", the typeof is "string"

//Null
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = null;        // Now value is null, but type is still an object
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = undefined;   // Now both value and type is undefined

//Difference Between Undefined and Null
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true

//Primitive Data: A primitive data value is a single simple data value with no additional properties and methods.
//string, number, boolean, undefined
typeof "John"              // Returns "string" 
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x                   // Returns "undefined" (if x has no value)

//Complex Data
typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"



