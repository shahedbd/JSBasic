var person = { firstName: "R M Shaidul", lastName: "Islam", age: 30, eyeColor: "Black" };

console.log(person.firstName);
console.log(person["firstName"]);

Object.keys(person).forEach(function (key) {
    console.log(key, person[key]);
});

//The JavaScript this keyword refers to the object it belongs to.
var person = {
    firstName: "R M Shaidul",
    lastName: "Islam",
    id: 98,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

//Accessing Object Methods
console.log(person.fullName());

//Do Not Declare Strings, Numbers, and Booleans as Objects!
var x = new String();        // Declares x as a String object
var y = new Number();        // Declares y as a Number object
var z = new Boolean();       // Declares z as a Boolean object



