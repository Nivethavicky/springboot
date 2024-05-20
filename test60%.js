
//sort in alphabetical order

{
  let str="webmaster";

  function ToFindAlphabeticalOrder(str){
    let splittedWords = str.split("");
    let sortedWords = splittedWords.sort();
    let joinedWords = sortedWords.join("");
    return joinedWords;
  }
  let result = ToFindAlphabeticalOrder(str)
  console.log(result);
}

//input:"the quick brown fox"
//output: 5

{
  let str="the quick brown fox";
  // let result = ToFindVowelLetters(str)

  function ToFindVowelLetters(str){
    let count=0;
    let letters=["a","e","i","o","u"];
    for(let a of str){
      if(letters.includes(a)){
        count++;
       // console.log(count);
      }
      
    }
    return count;
  }
 console.log(ToFindVowelLetters(str));
}

{
//capitiliaze each letter of word
function ToChangeUppercase(str) {
  
  let words = str.split(" ");
  console.log(words)
 
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase()+ words[i].slice(1);
  }
  return words.join(" ");
}

const str = "write a javascript program";
const result = ToChangeUppercase(str);
console.log(result);
}

//occurence of letter in string

{
  function countString(str,letter){
    let count=0;
    for(let i=0;i<str.length;i++){
      if(str.charAt(i)== letter){
        count++;
      }
    }
    return count;
  }
  const str="college campus";
  const letter="c";
  const result=countString(str,letter);
  console.log(result);
}

// Function to calculate the difference between two dates in days
function dateDifferenceInDays(dateString1, dateString2) {
  // Convert date strings to Date objects
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);

  // Calculate the difference in milliseconds
  const differenceInMs = date2 - date1;
  console.log(differenceInMs) //18662400000

  // Convert milliseconds to days
  const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);
  console.log((1000 * 60 * 60 * 24));
  console.log(18662400000 / 86400000)
  // Return the difference in days
  return differenceInDays;
}

// Test data
const fromDate = "04/02/2024";
const toDate = "11/04/2024";

// Calculate the difference in days
const difference = dateDifferenceInDays(fromDate, toDate);

// Print the difference
console.log("Difference between dates in days:", difference);

let array=[4,8,9,4,5,6,7,6,7,8]
array.copyWithin(4,3,7)
console.log(array)