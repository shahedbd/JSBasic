//toString()
var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23

//toExponential: returns a string, with a number rounded and written using exponential notation.
x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0

x = 5
console.log(x.toExponential());

//The toFixed() Method
x = 9.656;
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));

//The toPrecision() Method: returns a string, with a number written with a specified length:
var x = 9.656;
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));
console.log(x.toPrecision(6));
x = 55
console.log(x.toPrecision(4));

//The valueOf() Method: returns a number as a number.
x = 123;
console.log(x.valueOf());
console.log((123).valueOf());
console.log((100 + 23).valueOf());


console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));

//The Number() Method Used on Dates: Number() can also convert a date to a number:
console.log(Number(new Date("2017-09-30")));

//The parseInt() Method: parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

//The parseFloat() Method: parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));

//JavaScript MIN_VALUE and MAX_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
//JavaScript POSITIVE_INFINITY and NEGATIVE_INFINITY
console.log(Number.POSITIVE_INFINITY);
console.log(1 / 0);
console.log(Number.NEGATIVE_INFINITY);
console.log(-1 / 0);

//JavaScript NaN - Not a Number
console.log(Number.NaN);






















