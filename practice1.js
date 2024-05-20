let str = "the lines are printed in reverse order"
let word=" "
let lengthOfWord=0
let obj={}
for(let i=0;i<str.length;i++){
  word += str[i]


  if(str[i]==" "){
    lengthOfWord=word.trim().length
    obj[word]=lengthOfWord
    lengthOfWord=0;
    word=" "
  }
}
console.log(Object.entries(obj))
const res= obj
for (let i = 0; i < res.length - 1; i++) {
  for (let j = 0; j < res.length - i - 1; j++) {

    if (res[j][1] > res[j + 1][1]) {
      let temp = res[j];
      res[j] = res[j + 1];
      res[j + 1] = temp;
  }
}


console.log(res);

}

