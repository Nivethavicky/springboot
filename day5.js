
//capitilizing first letter of each word

let word = "welcome to learn javascript"
let arrOfWords = word.split(" ")
 let result=""
console.log(arrOfWords)
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
  result+=" "
  
}
console.log(result)


