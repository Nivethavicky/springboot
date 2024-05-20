//calling obj keys,values,entries
let obj1={
  name:"nivetha",
  gender:"female",
  color:"green"
}

console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))

//object freeze

let obj2 = { name: "John", age: 30 };

Object.freeze(obj2);

obj2.name = "Jane"; // Attempting to change the value of an existing property
obj2.address = "123 Main St"; // Attempting to add a new property

console.log(obj2); // Output: { name: "John", age: 30 }

//object seal
let obj3 = { name: "John", age: 30 };

Object.seal(obj3);

obj3.name = "Jane"; // Changing the value of an existing property
obj3.address = "123 Main St"; // Attempting to add a new property

console.log(obj3); // Output: { name: "Jane", age: 30 }


// operators
console.log(35+78)
console.log(10%3)  //returns remainder
console.log(10>6)
console.log("15"===15) //strict equality ,no type conversion
console.log("15"==15)  //loose equality,type coversion occurs ,string is converted to num
console.log(2>4 && 4>3)  //logical and
console.log(2>4 || 4>2)  //logical or
let g=67>80 ? 30:70 //ternary operator
console.log(g)



//pre increment and post increment
let ip= 5;
let result = ip++; // Assign current value of i to result, then increment i
console.log(result); // Output: 5
console.log(ip);      // Output: 6


let iq = 5;
let result1 = ++iq; // Increment i first, then assign it to result
console.log(result1); // Output: 6
console.log(iq);      // Output: 6
