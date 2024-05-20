// Find the sum of following multi dimentional array elements.
 //[4,6,[6,7,[8,9]],true,"15",{name:"hello"}]

 console.log('\n1. Find the sum of following multi dimentional array elements. [4,6,[6,7,[8,9]],true,"15",{name:"hello"}]')

let arr = [4,6,[6,7,[8,9]],true,"15",{name:"hello"}];
let sum = 0; 

//flatenning array of infinity argument
flattenedArray = arr.flat(Infinity) 
//checking whether the array gets flattened
console.log(flattenedArray) 

//iterating through each element in array
for (let i = 0; i < flattenedArray.length; i++)
{
  //if array contains boolean value
    if(flattenedArray[i] === true) {
        sum += 1; //adding 1 for boolean value
    } 

//   //else if statement checks if the current element is a number by using the isNaN() function (which returns true if the argument is not a number). If it's a number, it parses the element to an integer using parseInt() and adds it to the sum.  

//     else if(!isNaN(flattenedArray[i])){
//         sum += parseInt(flattenedArray[i]);
//     } 

    else if (!isNaN(flattenedArray[i]) && typeof flattenedArray[i] !== 'object')
     {
        // Check if the element is a number and not an object
        sum += parseInt(flattenedArray[i])
     }
    
     console.log("Sum of multidimensional array is",sum)
}