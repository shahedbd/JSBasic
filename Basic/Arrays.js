//JavaScript arrays are used to store multiple values in a single variable.
var arrayType1 = ["Saab", "Volvo", "BMW"];

var arrayType21 = "Saab";
var arrayType22 = "Volvo";
var arrayType23 = "BMW";

var arrayType3 = [
    "Saab",
    "Volvo",
    "BMW"
];
var arrayType4 = new Array("Saab", "Volvo", "BMW");

var person = ["Shahed", "Islam", 30];

for (var i = 0; i < person.length; i++)
    console.log(person[i]);

var personWithEntity = { firstName: "Shahed", lastName: "Islam", age: 30 };
console.log(personWithEntity.firstName);

//JavaScript variables can be objects. Arrays are special kinds of objects.
var myArray = [];
function myFunction(a, b) {
    return a * b;
}
var myCars = 100;
myArray[0] = Date.now;
myArray[1] = myFunction(5, 5);
myArray[2] = myCars;
for (var i = 0; i < myArray.length; i++)
    console.log(myArray[i]);

console.log(Date(Date.now()));
var d = Date();
a = d.toString();
console.log("The current date is: " + a)

//Array Properties and Methods
var personalInfo = ["Shahed", "Islam", 30, "Dhaka"];
console.log(personalInfo.length);
console.log(personalInfo.sort());
console.log();
//Accessing the First Array Element
console.log(personalInfo[0]);
//Accessing the Last Array Element
console.log(personalInfo[personalInfo.length - 1]);
var text = "<ul>";
for (i = 0; i < personalInfo.length; i++) {
    text += "<li>" + personalInfo[i] + "</li>";
}
text += "</ul>";
console.log(text);

//foreach
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
function myFunction(value) {
    text += "<li>" + value + "</li>";
}
console.log(text);
const arr = ['cat', 'dog', 'fish'];
arr.forEach(element => {
    console.log(element);
});

//For…In
const obj = { a: 1, b: 2, c: 3, d: 4 }
for (let elem in obj) {
    console.log(obj[elem])
}

//Adding Array Elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");
console.log(fruits);
console.log(fruits.sort());

//Adding elements with high indexes can create undefined "holes" in an array: *********
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon";
console.log(fruits);

//Associative Arrays
var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
console.log(person.length);
console.log(person[0]);

//If you use named indexes, JavaScript will redefine the array to a standard object.
//After that, some array methods and properties will produce incorrect results.
var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
console.log(person.length);     // person.length will return 0
console.log(person[0]);         // person[0] will return undefined

//Avoid new Array()
var points = new Array();     // Bad
var points = [];              // Good 
var points = new Array(40, 100, 1, 5, 25, 10); // Bad
var points = [40, 100, 1, 5, 25, 10];          // Good

//typeof
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(Array.isArray(fruits));

//Custom isArray function
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}

//Is array?
console.log(fruits instanceof Array);
