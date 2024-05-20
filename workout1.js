//program related to string
//program to find the ascii value of character
let string="hello"
let result=string.charCodeAt(1)
console.log(result)

{
//string is palindrom or not
let string="malayalam"
let result=ispalindrome(string)
console.log(result)
function ispalindrome(string){
  let length=string.length;
  for(let i=0;i<length/2;i++){
    if(string[i]!== string[length-1-i])
    {
      return "its not a palindrome"
    }

  }
  return "its a palindrome"
}

}


{
//palindrome using in built function

let string="mada"
let funtn = checkPalindrome(string)
console.log(funtn)

function checkPalindrome(string){
  let array=string.split("")
  console.log(array)
  let reverse=array.reverse()
  console.log(reverse)
  let joinstring=reverse.join("")
  console.log(joinstring)
  if(string == joinstring){
    console.log("it is a palindrome")
  }
  else{
    console.log("it is not a palindrome")
  }
  }
  
}



{
  //program to sort words in alphabetical order
  let string="this is javascript"
  let arrayvalue=string.split(" ")
  let sortvalue=arrayvalue.sort();
  let joinvalue=sortvalue.join(" ")
  console.log(joinvalue)
}

{
  //sort using inbuilt method
  let array="dcna"
  console.log(sort(array))
  function sort(array){
    let arr=array.split("")
    for(i=0;i<arr.length;i++){
      for(j=0;j<arr.length;j++){
        if(arr[j]>arr[i]){
          temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
        }
      }
      
    }
    return arr.join("")
  }
}

{
//program to replace character of a string
let string="this is red color and red color is blue"
let result=string.replace("red","yellow")
console.log(result)

let result1=string.replace(/red/gi,"yellow")
console.log(result1)

}