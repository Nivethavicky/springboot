{
  console.log("program 1")

console.log(" program to find most repeated even number in array")

// const arr=[1,2,3,3,4,5,4,4]
// let mostRepeatedEven=findMostRepeatedEven()
// console.log("The most repeated even number in array is:",mostRepeatedEven)

// function findMostRepeatedEven(arr){
//  const frequencyArray=[]
//  let maxcount=0;
//  let mostRepeatedEvenNumber=null

//  //loop to iterate through an array
//  for(let num of arr){
//      //check if num is even
//      if(num%2 === 0){
         //increment the count for this num
//          frequencyArray[num]++
//          if(frequencyArray[num] > maxcount)
//          {
//              maxcount=frequencyArray[num]
//              mostRepeatedEvenNumber=num;
//          }

//      }
    
//  }
//  return mostRepeatedEvenNumber
// }
// }
}


{

//bit
function findMostRepeatedEvenNumber(arr) {
  // Initialize an array to store the frequency of even numbers
  const frequency = [];
  //for (let i = 0; i < 1000; i++) { // Assuming numbers in the array are less than 1000
    
  // frequency.push(0); // Initialize all frequencies to 0
  //}

  // Count occurrences of even numbers in the array
  let maxCount = 0;
  let mostRepeatedEvenNumber = null;
  for (let num of arr) {
      if (num % 2 === 0) { // Check if the number is even
          frequency[num]++; // Increment count for this number
          if (frequency[num] > maxCount) {
              maxCount = frequency[num]; // Update maximum count
              mostRepeatedEvenNumber = num; // Update most repeated even number
          }
      }
  }

  return mostRepeatedEvenNumber;
}


// Example usage:

const arr = [2, 4, 5, 2, 8, 6, 4, 8, 8,8,8,8,10, 10, 10];
const mostRepeatedEven = findMostRepeatedEvenNumber(arr);
console.log("Most repeated even number:", mostRepeatedEven);

}

{
//program1
function findMostRepeatedEvenNumber(arr) {
  let maxCount = 0;
  let mostRepeatedEvenNumber = null;

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
      let count = 0;

      // Check if the current element is even
      if (arr[i] % 2 === 0) {
          // Count the number of occurrences of the current element in the array
          for (let j = 0; j < arr.length; j++) {
              if (arr[j] === arr[i]) {
                  count++;
              }
          }

          // Update the most repeated even number if necessary
          if (count > maxCount) {
              maxCount = count;
              mostRepeatedEvenNumber = arr[i];
          }
      }
  }

  return mostRepeatedEvenNumber;
}

// Example usage:
const arr = [2, 4, 5, 2, 8, 6, 4, 8, 10, 10, 10];
const mostRepeatedEven = findMostRepeatedEvenNumber(arr);
console.log("Most repeated even number:", mostRepeatedEven);



}

{
//bit
function containsVowel(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of word) {
      if (vowels.includes(char.toLowerCase())) {
          return true;
      }
  }
  return false;
}

function rewriteSentence(sentence) {
  const words = sentence.split(" ");
  const rewrittenWords = [];

  for (let word of words) {
      if (containsVowel(word)) {
          // If the word contains a vowel, rewrite it in alphabetical order
          const sortedWord = word.split("").sort().join("");
          rewrittenWords.push(sortedWord);
      } else {
          // If the word doesn't contain a vowel, keep it unchanged
          rewrittenWords.push(word);
      }
  }

  return rewrittenWords.join(" ");
}

// Example usage:
const sentence = "this is a java";
const rewrittenSentence = rewriteSentence(sentence);
console.log("Rewritten sentence:", rewrittenSentence);

}




{
  //bit2
  function containsVowel(word) {
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      for (let char of word) {
          if (vowels.includes(char.toLowerCase())) {
              return true;
          }
      }
      return false;
  }
  
  function rewriteSentence(sentence) {
      const words = sentence.split(" ");
      const rewrittenWords = [];
  
      for (let word of words) {
          if (containsVowel(word)) {
              // If the word contains a vowel, rewrite it
              const firstVowelIndex = word.toLowerCase().split("").findIndex(char => ['a', 'e', 'i', 'o', 'u'].includes(char));
              const rewrittenWord = word.substring(firstVowelIndex) + word.substring(0, firstVowelIndex);
              rewrittenWords.push(rewrittenWord);
          } else {
              // If the word doesn't contain a vowel, keep it unchanged
              rewrittenWords.push(word);
          }
      }
  
      return rewrittenWords.join(" ");
  }
  
  // Example usage:
  const sentence = "This is a java";
  const rewrittenSentence = rewriteSentence(sentence);
  console.log("Rewritten sentence:", rewrittenSentence);
  
}

{

function largestNumber(nums) {
  // Custom comparator function for sorting
  const comparator = (a, b) => {
      const order1 = parseInt(`${a}${b}`);
      const order2 = parseInt(`${b}${a}`);
      return order2 - order1; // Sort in descending order
  };

  // Sort the numbers using the custom comparator
  nums.sort(comparator);

  // If the largest number is 0, return "0" directly
  if (nums[0] === 0) return "0";

  // Concatenate the sorted numbers to form the largest number
  return nums.join("");
}

// Example usage:
const nums1 = [10, 2];
console.log("Output:", largestNumber(nums1)); // Output: "210"

const nums2 = [3, 30, 34, 5, 9];
console.log("Output:", largestNumber(nums2)); // Output: "9534330"
}



{
//bit3
function largestNumber(nums) {
  // Custom comparator function for sorting
  const comparator = (a, b) => {
      const order1 = `${a}${b}`;
      const order2 = `${b}${a}`;
      return order2.localeCompare(order1); // Compare using string comparison
  };

  // Custom Bubble Sort implementation
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length - 1 - i; j++) {
          if (comparator(nums[j], nums[j + 1]) > 0) {
              // Swap numbers if the comparator returns positive value
              [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
          }
      }
  }

  // If the largest number is 0, return "0" directly
  if (nums[0] === 0) return "0";

  // Concatenate the sorted numbers to form the largest number
  return nums.join("");
}

// Example usage:
const nums1 = [10, 2];
console.log("Output:", largestNumber(nums1)); // Output: "210"

const nums2 = [3, 30, 34, 5, 9];
console.log("Output:", largestNumber(nums2)); // Output: "9534330"
}


{
  function moveVowelToPreviousPosition(inputString) {
    // Define a function to check if a character is a vowel
    function isVowel(char) {
        return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
    }

    // Convert the string to an array of characters
    let chars = inputString.split('');

    // Iterate through the array from right to left
    for (let i = chars.length - 1; i >= 0; i--) {
        // If the current character is a vowel and it's not the first character
        if (isVowel(chars[i]) && i > 0) {
            // Swap the vowel with the previous character
            let temp = chars[i];
            chars[i] = chars[i - 1];
            chars[i - 1] = temp;
        }
    }

    // Convert the array back to a string and return it
    return chars.join('');
}

// Example Java input
let javaInputString = "example";

// Convert Java input to JavaScript output
let result = moveVowelToPreviousPosition(javaInputString);

// Output the result
console.log("The modified string is:", result);

}