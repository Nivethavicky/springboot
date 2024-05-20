

//captilizing each letter of the word 

let word = "welcome to learn javascript"
let arrOfWords = word.split(" ")
 let result=" "
console.log(arrOfWords)

// splitting each letter of a word

let sentence = word.split("")
console.log(sentence)

 let reverse_sen = sentence.reverse()
 console.log(reverse_sen)


for(let i=0;i<arrOfWords.length;i++) 
{
  if(arrOfWords[i].charAt(0) == arrOfWords[i].charAt(0).toUpperCase())
  {
     result += arrOfWords[i].charAt(0).toLowerCase() + arrOfWords[i].slice(1)
  }
  else
  {
    result += arrOfWords[i].charAt(0).toUpperCase() + arrOfWords[i].slice(1)
  }
  result += ""
  
}
console.log(result)
//reverse
let reversed_res= result.split(" ").reverse().join(" ")
console.log(reversed_res)




let d= "hello this is javascript"
let res=d.split(" ")
console.log(res)

let rev=res.reverse()
console.log(rev)


for(let i=0;i<rev.length;i++){
  let rev2=rev.split("").reverse()
  console.log(rev2)
}

// let rev2=rev.split('').reverse()
// console.log(rev2)