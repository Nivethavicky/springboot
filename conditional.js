//if - the block og code will be executed ,if the specified condition is true

//else - the block og code will be executed ,if the same condition is false

//else if- if the first condition is false, specify new condition 

//switch- to specify many alternatives cases,

//conditional statement  will be executed based on the boolean values(true/false)
//if  syntax
if(true){
  console.log("if block executed")
}

console.log("...........................................")

//if else syntax
if(false){
  console.log("hi")
}else
{
  console.log("else block executed")
}


console.log("...........................................")

//example1
let a=5;
let b=6;
if(b>a){
  console.log("b is greater than a")
}else{
  console.log("a is greater than b")
}


console.log("...........................................")

//example2
 a=8;
 b=9;
if(b>a){
  console.log("b is greater than a")
}
else if(a>b)
{
  console.log("a is greater than b")
}
else
{
  console.log("a is equal to b")
}


console.log("...........................................")

//syntax

// switch(expression)
// {
//   case x:
//     //code
//     break;
//   case y:
//     //code
//     break;
//   default: 
//     //code  

// }
//here break and default are optional
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.


// If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

// The default case does not have to be the last case in a switch block:

// If default is not the last case in the switch block, remember to end the default case with a break.


// If multiple cases matches a case value, the first case is selected.

// If no matching cases are found, the program continues to the default label.

// If no default label is found, the program continues to the statement(s) after the switch.

console.log("...........................................")
//example

let x = 0;
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
console.log(text)


//example 2
 a=3;
let number;
switch(a)
{
  case 1:
    number="one";
    break;

  case 2:
    number="two";
    break; 
  case 3:
    number="three";
    //break;
  
  case 4:
    number="four";
   // break;  
    
  default:
    console.log("nothing matches")  
      
}
console.log(number)

//loop
//loop can execute a block of code number of times
// 

// Instead of writing:
// text += cars[0] + "<br>"; 
// text += cars[1] + "<br>"; 
// text += cars[2] + "<br>"; 
// text += cars[3] + "<br>"; 
// text += cars[4] + "<br>"; 
// text += cars[5] + "<br>";


// You can write:
// for (let i = 0; i < cars.length; i++) { 
//   text += cars[i] + "<br>";

