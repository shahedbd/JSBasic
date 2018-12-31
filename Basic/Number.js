//JavaScript has only one type of number. Numbers can be written with or without decimals.
//Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals
var x = 123e5;    // 12300000
var y = 123e-5;   // 0.00123

var x = 999999999999999;   // x will be 999999999999999
var y = 9999999999999999;  // y will be 10000000000000000

console.log(y);

//The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
var x = 0.2 + 0.1;         // x will be 0.30000000000000004
var x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3
console.log(x);

x = 10;
y = 20;
console.log(x + y);
x = "10";
y = "20";
console.log(x + y);
x = 10;
y = "20";
console.log(x + y);
x = "10";
y = 20;
console.log(x + y);

//A common mistake is to expect this result to be 30:
console.log("The result is: " + x + y);

//Numeric Strings: JavaScript will try to convert strings to numbers in all numeric operations:
var x = "100";
var y = "10";
console.log(x / y);
console.log(x - y);
console.log(x * y);
//Here JavaScript uses the + operator to concatenate the strings.
console.log(x + y);

//NaN - Not a Number:
//NaN is a JavaScript reserved word indicating that a number is not a legal number.
//Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
var x = 100 / "Apple";
console.log(x);
console.log(100 / "10");

x = 100 / "Apple";
console.log(isNaN(x));

//If you use NaN in a mathematical operation, the result will also be NaN:
var x = NaN;
var y = 5;
console.log(x + y)
console.log(typeof NaN)

//Infinity: *****************************************
x =  2 / 0;          // x will be Infinity
y = -2 / 0;          // y will be -Infinity
console.log(x);
console.log(y);

var myNumber = 2;
while (myNumber != Infinity) {          // Execute until Infinity
  myNumber = myNumber * myNumber;
}
console.log(myNumber);

//Hexadecimal: JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
x = 0xFF; 
console.log(x);

var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000

//Numbers Can be Objects
var x = 123;
var y = new Number(123);
console.log(x);
console.log(y.valueOf(1));
















































































