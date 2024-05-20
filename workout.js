console.log("hello world!")

// program to add two numbers
{
let a=4;
let b=4;
let result=a+b;
console.log("the sum of a and b is:"+result);
}

// add two number using user input 
// let a=prompt("enter the first number");
// let b=prompt("enter the second number ");
// let result=a+b;
// console.log(result);
//square root of a number
let sq_root=4;
let ans=Math.sqrt(sq_root);
console.log(ans);

 console.log("to calculate area of a triangle")
 console.log("...........................")

//to calculate area of a triangle
let base= 2;
let height=4;
let triangle=1/2*base*height;
console.log("the area of a triangle is:"+triangle)


console.log("program to swap two variables")
 console.log("...........................")
let a=5;
let b=10;

//temp var for backup and swapping
let temp=a;
a=b;
b=temp;

//print
console.log("ater swaping:"+a+"  "+b);

{
console.log("program to find a number is positive,negative or zero")
 console.log("...........................")


 let numb=7;
 if(numb>0){
   console.log("the number is positive")
 }
 else if(numb<0){
  console.log("the number is negative")
 }
 else{
  console.log("the number is zero");
 }
}


console.log("program to find even or odd number")
 console.log("...........................")
 {
  let numb=80;
  if(numb%2==0){
    console.log("the number is even no")
  }
  else{
   console.log("the number is odd number");
  }
 }

 //ternary operator

 {
   let num =5;
   let a= (num%2==0) ? "even no":"odd no";
   console.log(a)
 
 }

 console.log("program to find largest of three number")
 console.log(".........................................")
 {
  let num1=-4;
  let num2=0;
  let num3=-1;
  if(num1>num2 && num1>num3){
    console.log("num1 is largest")
  }
  else if(num2>num1 && num2>num3){
   console.log("num2 is largest");
  }
  else if(num3>num1 && num3>num2){
    console.log("num3 is largest");
  }
  else{
    console.log("number should in integer,string ,char not accepted");
  }
  
 }



 console.log("program to check prime number")
 console.log(".........................................")
 {
let num=2;
let isprime=true;
if(num===1){
  console.log("i is neither prime nor composite")
}
//check if num greater than 1
else if(num>1){
 // loop start from 2 and upto num-1
  for(let i=2;i<num;i++){
   if( num%i==0){ //divided by zero, then its composite number
     isprime=false;
     break;
   }
  }

 if(isprime==false)  {
   console.log("the number is not a prime number")
 }
 else{
  console.log("the number is prime number")
 }  
 }

 //check if the num is less than 1
 else{
   console.log("the  num is not a prime num")
 }
  }

  

//factorial  using recursion
function fact(num){
  
   if(num>0){
     return num*fact(num-1);
   }
   else{
     return 1;
   }
   }
  console.log(fact(4));


  {
  //multiplication table
  
  const num=5;
  for(let i=1;i<=10;i++){
    let result= i*num;
    console.log(result)
  }
}

  //fibonacci sequence
  {
    let n1=0,n2=1,nextterm;
    let num=5;
    console.log("fibonacci serires....")
      console.log(n1)
      console.log(n2)
      nextterm=n1+n2;
      while(nextterm<=num){
        console.log(nextterm)
      n1=n2;
      n2=nextterm;
      nextterm=n1+n2;
      }
    }
  
{
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
}

{
  //sum of natural numbers
  let num=10,sum=0;
  for(let i=1;i<10;i++){
    sum+=i;
  }
  console.log("sum of natural numbers")
  console.log(sum)
}
  
{
//program to check whther the no is ending with same digit
let n1=18;
let n2=28;
let n3=18;
let res1=n1%10;
let res2=n2%10;
let res3=n3%10;
console.log("program to check whther the no is ending with same digit")
if(res1==res2 && res1==res3){
  console.log("the number's have same last digit");
}
else{
  console.log("the number's have different last digit");
}

}

{
  //fibonacci series using recursion
  function fibonacci(num){
    if(num<2){
      return num;
    }
    else{
      return fibonacci(num-1)+fibonacci(num-2);
    }  
    }
  }
 let num=10;
 if(num<0){
   console.log("enter positive integer")
 }else{
  for(i=0;i<=num;i++){
    console.log(fibonacci(i));
  }
 }
 
 
   

