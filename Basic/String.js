//String Reference: https://www.w3schools.com/jsref/jsref_obj_string.asp

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

console.log(sln);

//But strings can also be defined as objects with the keyword new:
var x = "John";
var y = new String("John");

var str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate"));
console.log(str.lastIndexOf("locate"));
console.log(str.lastIndexOf("John"));
console.log(str.indexOf("locate",15));

//Searching for a String in a String
console.log(str.search("locate"));

//The two methods are NOT equal. These are the differences:
//The search() method cannot take a second start position argument.
//The indexOf() method cannot take powerful search values (regular expressions).

//The slice() Method
var str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 13));
console.log(str.slice(-12, -6));

//The substring() Method
//The difference is that substring() cannot accept negative indexes.
console.log(str.substring(7, 13));

//The substr() Method
//The difference is that the second parameter specifies the length of the extracted part.
console.log(str.substr(7, 1));
console.log(str.substr(7, 6));
console.log(str.substr(7));

//Replacing String Content
str = "Please visit Microsoft!";
console.log(str.replace("Microsoft!", "W3Schools"));

//regular expression: To replace case insensitive, use a regular expression with an /i flag (insensitive):
console.log(str.replace(/MICROSOFT/i, "W3Schools"));

//To replace all matches, use a regular expression with a /g flag (global match):
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
console.log(n);

//Converting to Upper and Lower Case
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());

//The concat() Method
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
console.log(text3);

//String.trim()
var str = "       Hello World!        ";
console.log(str.trim());
var str = "       Hello World!        ";
console.log(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));

//The charAt() Method
var str = "HELLO WORLD";
console.log(str.charAt(0));

//The charCodeAt() method returns the unicode of the character at a specified index in a string:
//The method returns a UTF-16 code (an integer between 0 and 65535).
var str = "HELLO WORLD";
console.log(str.charCodeAt(0));

//Property Access
var str = "HELLO WORLD";
console.log(str[0]);

//Converting a String to an Array
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe
console.log(txt);

