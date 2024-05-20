// advanced for loop ,array elements only printed,index cant be printed
let array3=[1,2,3,4,5,6,7];
for(let l of array3){
  console.log(l);
}

//calling object properties using in

let obj4={
  name:"nivetha",
  age:25,
  gender:"female"
}

for(let h in obj4){
  console.log(h+" "+ obj4[h])
}


//string inbuilt methods

// charAt
let str="welcome back"; 

console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
console.log(str.charAt(4));
console.log(str.charAt(5));
console.log(str.charAt(6));


// split()
console.log(str.split("c"));
console.log(str.split(""));
console.log(str.split("l"));
console.log(str.split("k"));


//indexOf() ,-1 is printed for unknown letter

console.log(str.indexOf("c"));
console.log(str.indexOf("s"));
console.log(str.indexOf(""));
console.log(str.indexOf("k"));
console.log(str.indexOf("z"));
console.log(str.indexOf("c",7)); //omits 7 places


//  lastindexof()
console.group("..........")
 console.log(str.lastIndexOf("c"));  //doubt ans 9, but getting 10            doubt

 //slice()
 console.log(str.slice(0,5)); //01234 printed i.e before 5 gets printed
 console.log(str.slice(1,5));

 //search()
 
 console.log(str.search("a"));
 

 let str1= "BGFDGahjb"
 console.log(str1.search(/a/i)); //reg exp case insensitive matching

 //match()
 console.log(str.match("c")); 
 console.log(str.match("k"));  //groups undefined doubt                              doubt
 console.log(str.match(/e/gi)); //search fully (globally)
 console.log(str.match(/a/gi))
 console.log(str.match(/c/gi))
 console.log(str.match(/z/gi)) //null, no z in input


 //matchAll()
 console.log(str.matchAll("a")) // regular exp not needed ,prints entire detail       doubt

 //property access []
let text = "HELLO WORLD";
let char = text[5];           //doubt


 

let x = 10;
let y = 20;
let z = "The result is: " + x + y;
console.log(z)
 


 const t = 5;
 t= 5+7;
 console.log(t)



