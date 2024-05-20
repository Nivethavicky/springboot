let str = "The lines are printed in reverse order"
let obj={}
let lengthOfWord = 0
let word="";
for(let i=0;i<str.length;i++){
  word += str[i]
  console.log(word)

  if(str[i] == " "){
    lengthOfWord=word.trim().length
    obj[word]=lengthOfWord
    lengthOfWord = 0
    word=""
  }
}
console.log(obj)
console.log(Object.entries(obj))