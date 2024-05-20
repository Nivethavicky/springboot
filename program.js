
//program 2
 console.log("program 2")
{
    console.log("program to find uppercase letter in each word")

    let sentence = "This Is a sEnteNce"
    let upperCaseLetter = findUpperCaseLetter(sentence)
    console.log("UPPERCASE LETTERS IN EACH WORD:",upperCaseLetter)

    function findUpperCaseLetter(sentence){
        let splitWords = sentence.split(" ")
        //checking words are stored in array
        console.log(splitWords) 
        let upperCaseLetters = " "

        //iterate through each word
        for(let word of splitWords){
            //itertae through each character in word
            for(let char of word){
                //if char is uppercase
                if(char.toUpperCase() === char){
                    upperCaseLetters += char
                }
            }
        }
        return upperCaseLetters;
    }
}


//program 2

console.log("same program...showing result in array")
{

    console.log("program to find uppercase letter in each word")

    let sentence = "This Is a sEnteNce"
    let upperCaseLetter = findUpperCaseLetter(sentence)
    console.log("UPPERCASE LETTERS IN EACH WORD:",upperCaseLetter)

    function findUpperCaseLetter(sentence){
        let splitWords = sentence.split(" ")
        //checking words are stored in array
        console.log(splitWords) 
       // let upperCaseLetters = " "

        //empty array to store the result
        const upperCaseLettersInWords = [];


        //iterate through each word
        for(let word of splitWords){
            let upperCaseLetters = " "
            //itertae through each character in word
            for(let char of word){
                //if char is uppercase
                if(char.toUpperCase() === char){
                    upperCaseLetters += char
                }
            }
            upperCaseLettersInWords.push(upperCaseLetters); // Push uppercase letters of the word to the result array
    }
    
        return upperCaseLettersInWords;
    }
}


console.log("PROGRAM 4")
{
console.log(" program to rewrite the words such that the number comes first,symbol next and alphabet")
//input:hello1@
//output:1@hello

const word = "hello1@"
const charInOrder = findCharInOrder(word)
console.log("character in order:",charInOrder)

function findCharInOrder(word)
{
    const splitWords = word.split("") //split it into single character
    //checking whether the character is within array
    console.log(splitWords)

    //declaring empty array for number,symbol and alphabet
    const numbers = []
    const symbols = []
    const alphabets = []

    //separate character into number symbol and alphabet

    //loop to iterate through the splitted char

    for(let char of splitWords)
    {
        if(!isNaN(parseInt(char)))
        {
            numbers.push(char)
        }
        //regular expression to match non-alphanumeric(symbols) 
        // w- alphanumeric, ^ not matches inside sqaure bracket
        
        else if(char.match(/[^\w]/))
        {
        symbols.push(char)
        }  
        else 
        {
            alphabets.push(char)
        }  
    } 
 return numbers.concat(symbols,alphabets).join("")
 }
 }

 

 