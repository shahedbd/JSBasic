var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits);
console.log(fruits.pop());
console.log(fruits);

console.log(fruits.push("Ornage"));
console.log(fruits);

var x = fruits.pop();
console.log(x);

console.log(fruits);
console.log(fruits.shift());
console.log(fruits);

var x = fruits.shift();
console.log(x);
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits);

//The unshift() method returns the new array length.
x = fruits.unshift("US Lemon");
console.log(x);
console.log(fruits);

//The length property provides an easy way to append a new element to an array:
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);
fruits[fruits.length] = "Kiwi"; 
console.log(fruits.length);
console.log(fruits);

//Deleting Elements: Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
delete fruits[0]; 
console.log(fruits);
console.log(fruits.length);
//*** Using delete may leave undefined holes in the array. Use pop() or shift() instead.



