let y=8.5678;
let x=9.5478;
let z=x+y;
console.log(z)

const input = 'The lines are printed in reverse order.';
console.log(input)

const words = []; // Array to store individual words
console.log(words)


// Step 1: Split the sentence into words
let word = '';
console.log(word)


for (let i = 0; i < input.length; i++) {
    if (input[i] !== ' ') {
        word += input[i]; // Add character to the current word
    } else {
        // Add the current word to the array of words
        words.push(word);
        word = ''; // Reset the word for the next word
    }
   
}

if (input[i] !== ' ') {
  word += input[i]; // Add character to the current word
  console.log(word)



  