console.log("hello")
//sum of natural numbers
//simple caluculator
let operator='/',num1=10,num2=5;
let result;
switch(operator){
  case '-':
    result=num1-num2;
    break;

  case '*':
    result=num1*num2;
    break;  

  case '+':
    result=num1+num2;
    break; 
  default:
    result="invalid"; 
}
console.log("simple calculator")
console.log(result)

