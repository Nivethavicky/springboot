// add two numbers
{
  let a=9
  let b=12
  let c= a+b
  console.log(c)
}

//sqrt of number
{
  function sqrt(a){
    return Math.sqrt(a)
  }
 console.log(sqrt(5))
 console.log(sqrt(6)) 
 console.log(sqrt(3)) 
 console.log(sqrt("hello"))  
 console.log(sqrt(true)) 
 console.log(sqrt(false)) 
 console.log(sqrt(-6)) 
}

// to find area of triangle

{
 let a=4
 let b=6
 let area=1/2*a*b
 console.log(area)
}

// in function
function area(a,b){
  return 1/2*a*b
}
console.log(area(4,6))
console.log(area(6,6))
console.log(area(4,10))

// js program to swap two variables

let a=9
let b=5
console.log("before swap:"+ a,b)
let temp= a
a=b
b=temp

console.log("after swap:"+a,b)

//swap strings
{
let a="hello"
let b='world'
console.log("before swap:"+ a,b)
let temp= a
a=b
b=temp
console.log("after swap:"+a,b)
}

//js program to generate random number

{
  const a=Math.random()
  console.log(a)
  console.log(a)
  
}

//finding random number between any two given number
// between 1 to 10
{
  let a=1
  let b=10

  const random=Math.random()*(10-1)+1
  console.log(random)
 
  console.log( Math.floor(9.5))
  const random1=Math.floor(Math.random()*(10-1)+1)
  console.log(random1)

}

// js program to check number is postive negative or zero
{
 let num=parseInt(true)
  if(num>0){
    console.log("the number is positive number")
  }
  else if(num<0){
    console.log("the number is negative number")
  }
  else{
    console.log("the number is zero")
  }
  console.log(num)

}

//js program to check odd or even number
{
function findOddOrEven(num){
  if(num%2===0){
    console.log("the number is even number")
  }
  else{
    console.log("the number is odd number")
  }
  
  
}
console.log(findOddOrEven(3))
console.log(findOddOrEven(6))
}


// using return statement in function{

{
function findOddOrEven(num){
  if(num % 2 === 0){
    return "the number is even number";
  }
  else{
    return "the number is odd number";
  }
}

console.log(findOddOrEven(3)); // Output: "the number is odd number"
console.log(findOddOrEven(6)); // Output: "the number is even number"
}


// js program to find largest of three numbers
{
  function findLargest(num1,num2,num3){
   if(num1>num2 && num1>num3)
     return "num1 is largest number"
   else if(num2>num1 && num2>num3)
     return "num2 is the largest"

   else if(num1===num2 && num2===num3)  
      return "all numbers are equal"
   else
      return "num3 is largest"  
   }
   console.log(findLargest(4,7,3))
   console.log(findLargest(4,2,3))
   console.log(findLargest(7,7,7))
  }



  // javascript program to check prime number

  {
    let num=4;
    if(num===0 || num<1){
     console.log("the number is not a prime number ")
    }
    else if(num===1)
     console.log("the number is neither prime nor composite") 
    
    else if(num>1)
    {
      for(let i=2;i<num;i++)
      {
        if(num%i==0)
        {
         console.log("the number is prime number")
         break;
        }
        else
        {
          console.log("the number is not prime number")
          break;
        }
      }
    }

  }


  //prime number between interval
  {
    function isPrime(num) {
      if (num <= 1) {
          return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
              return false;
          }
      }
      return true;
  }
  
  function primeNumbersInRange(start, end) {
      let primes = [];
      for (let i = start; i <= end; i++) {
          if (isPrime(i)) {
              primes.push(i);
          }
      }
      return primes;
  }

  
  // Example usage:
  const start = 10;
  const end = 30;
  console.log(`Prime numbers between ${start} and ${end}:`, primeNumbersInRange(start, end));
  
  }


  //factorial of a number

  {
    let num = 6;

if (num < 0) {
    console.log(`The factorial of ${num} does not exist`);
} else if (num === 0) {
    console.log(`The factorial of ${num} is 1`);
} else {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${num} is ${fact}`);
}

  }


  //js program to display multiplication table
{
  let table=10;
  console.log('the multiplication table of ${table} is')
 for(i=1;i<table;i++){
   let res= i*table;
   console.log( i + "*" + table + "=" +res)
 }

}

 //js program to display multiplication table upto range
 {
  let table=10;
  let range =20;
  console.log('the multiplication table of ${table} is')
 for(i=1;i<=range;i++){
   let res= i*table;
   console.log( i + "*" + table + "=" +res)
 }

}

// {

// const prompt = require('prompt-sync')();

// const input = prompt('Enter your input: ');
// console.log('You entered:', input);

// }

//palindrome
{
  function palindrome(str){
    let length = str.length;
    for(let i = 0; i < length / 2; i++){
        if(str.charAt(i) !== str.charAt(length - i - 1)){
            return "it is not a palindrome"; // If characters don't match, it's not a palindrome
        }
    }
    return "it is palindrome"; // If loop completes, it's a palindrome
}

console.log(palindrome("madam")); // Output: true
console.log(palindrome("hello")); // Output: false

}

//palindrome using builtin method

{
  function checkPalindrome(str){
    //string to array
    const arr = str.split('')
    console.log(arr)
    //reverse
    const reverse = arr.reverse()
    console.log(reverse)

    //join using " "
    const join = arr.join("")
    console.log(join)
    console.log(str)

    if(str===join){
      return "it is palindrome"
    }
    else{
      return "it is not a palindrome"
    }
  }
   console.log(checkPalindrome("madam"))
  
}

{
//multiple line into single line
function checkPalindrome(string){
  //single line
  const revstring=string.split('').reverse().join("")
  if(string===revstring){
    return "it is palindrome"
  }
  else{
    return "it is not a palindrome"
  }
}
 console.log(checkPalindrome("madam"))

}

//sort words in alphabetical order
{
function sort(str){
  const res= str.split(" ").sort().join(" ")
  return res
}
console.log(sort("hello this is javascript and i am new to learn java"))

console.log(sort("hey what are you doing"))
}


{
//sort words in alphabetical order and show it in array using for
{
  function sort(str){
    const res= str.split(" ").sort()
    return res

    for(let a of res){
      console.log(a)
    }
  }
  console.log(sort("hello this is javascript and i am new to learn java"))
  
  console.log(sort("hey what are you doing"))
  }
    
    
}


//javascript program to replace a character of string

{
  function sort(str){
    const res= str.toLowerCase().split(" ").sort().join(" ")
    return res
  }
  console.log(sort("hello this is javascript and i am new to learn java"))
  
  console.log(sort("hey what are you doing"))
  }


  //number of occcurence of character in string
  {
    function occurence(string,letter){
      let count=0;
      for(let i=0;i<string.length;i++){
        if(string[i]=== letter){
          count++
        }
      }
      return count
    }
    console.log(occurence("hello woooorrrld","r"))
  }

  {
    let str="apple"
    console.log(str.slice(-3))
    console.log(str.slice(1))
    console.log(str.slice(2,4))
    
  }