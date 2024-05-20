// string with capital and small letters,count the capital and small letter in string

let string="WelCoMe To tHe ProGRammINg WorlD"
let capcount=0;
let smallcount=0;

for(let i=0;i<string.length;i++)
{
  if(string[i] >= 'A' && string[i] <= 'Z')
  {
    capcount++;
  }

  else if(string[i]>='a' &&  string[i]<='z')
  {
    smallcount++;
  }
}
  console.log("uppercase letters:" +capcount)
  console.log("lowercase letters:" +smallcount)


  //find sum of digits

  let number=12345
  let num='12345'
  let sum=0
  for(let i=0;i<num.length;i++){
    sum += parseInt(num[i])
    
  }
  console.log(sum)


  //check whether the given number is perfect square of 2

  function is_perfect_square(n) {

    while (n > 0) {
        if(n == 2 || n == 1){
          result=true;
          break;
        }
        else if(n%2 == 0){
          n=n/2;
        }
        else{
          result=false;
          break;
        }

    }
  console.log("checking whether the given number is perfect square of 2:" +result);
}
 
let n = 64,result=false;
if (is_perfect_square(n)) {
    console.log("Yes,its perfect square of 2");
} 

 
n = 18,result=false;
if (is_perfect_square(n)) {
    console.log("Yes");
} 


/*Sample Input 'The lines are printed in reverse order.';

 Sample Output
 Output: ' In the are lines order printed reverse.'
Without inbuild function*/



const input = 'The lines are printed in reverse order.';
const words = []; // Array to store individual words

// Step 1: Split the sentence into words
let word = "";

for (let i = 0; i < input.length; i++) {
    if (input[i] !== ' ') {
        word += input[i]; // Add character to the current word
    } else  {
        // Add the current word to the array of words
        words.push(word);
        word = ''; // Reset the word for the next word
    }
   
}

// Add the last word to the array of words
words.push(word);
console.log(words)

// Step 2: Sort the words based on their lengths
for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words.length - i - 1; j++) {
        // Compare lengths of adjacent words and swap if necessary
        if (words[j].length > words[j + 1].length) {
            let temp = words[j];
            words[j] = words[j + 1];
            words[j + 1] = temp;
        }
    }
}

// Step 3: Reconstruct the sorted words into a sentence
let sortedSentence = '';
for (let i = 0; i < words.length; i++) {
    sortedSentence += words[i];
    if (i !== words.length - 1) {
        sortedSentence += ' '; // Add space between words
    }
}

console.log("Output:", sortedSentence);
