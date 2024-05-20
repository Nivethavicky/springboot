// if-else

let num1= 25;
let num2= 30;

if(num1>num2){
  console.log("num1 is greater than num2");
}
else{
  console.log("num1 is less than num2");
}

// if-elseif-else
let mark=49;
if(mark>= 90)
{
  console.log("grade:A");
}
else if(mark >= 80) 
{
  console.log("grade:B")
}
else if(mark >= 70)
{
  console.log("grade c")
}
else if(mark>=60)
{
  console.log("grade d")
}
else if(mark>=50)
{
  console.log("grade d")
}
else
{
  console.log("fail")
}

//nested if
 let num=7;
if(num>10){
  console.log("number is greater than 10")
  if(num>20){
   console.log("number is also greater than 20")
  }
} 
   else{
       console.log("number is less than 10")
     }

//for loop

for(i=0;i<20;i++){
  console.log("some code")
}

// another example(for loop)

let array=[1,2,3,4,5,6,7,8,9];
for(i=5;i<array.length;i++){
  console.log("array elements get printed upto the array length")
}

//while loop
let s=0;
while(s<8){
  console.log("print something")
  s++
}

//do while
let q=0;
do{
  console.log("do while")
  q++
}while(q<8)


// switch case


let day = 'Monday';
let message;

switch (day) {
    case 'Monday':
        message = "It's Monday, ";
        break;
    case 'Tuesday':
        message = "Happy Tuesday! ";
        break;
    case 'Wednesday':
        message = "It's Wednesday";
        break;
    case 'Thursday':
        message = "Thursday - almost there";
        break;
    case 'Friday':
        message = " It's Friday, time to celebrate!";
        break;
    case 'Saturday':
        message = "Happy Saturday! Enjoy your weekend!";
        break;
    case 'Sunday':
        message = "Sunday - a day to relax and recharge.";
        break;
    default:
        message = "Invalid day entered!";
        break;
}
  
console.log(message)

//while and do while


// Using a while loop
let count = 1;
while (count <= 5) {
    console.log("While loop iteration " + count);
    count++;
}

// Using a do-while loop
let numb = 1;
do {
    console.log("Do-while loop iteration " + numb);
    numb++;
} while (numb<= 5);

// Example using break statement
console.log("Example using break statement:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Breaking the loop at i = " + i);
        break;
    }
    console.log("Iteration " + i);
}

// Example using continue statement
console.log("\nExample using continue statement:");
for (let j = 1; j <= 5; j++) {
    if (j === 3) {
        console.log("Skipping iteration at j = " + j);
        continue;
    }
    console.log("Iteration " + j);
}
