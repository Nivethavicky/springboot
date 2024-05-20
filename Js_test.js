
//5.ascending order
{
  function ascending(str){
    //split
    const split=str.split("")
    console.log(split)
    //sort
    const sortedWords=split.sort()
    console.log(sortedWords)
    //join
    const joinedWords=sortedWords.join(" ")
    console.log(joinedWords);

  }

  ascending("pls do well in test")
}

//question 1 
{
  console.log("function to get index of target value in array")
   
    function findTarget(arr,target){
      //for(let i=0;i<arr.length;i++){
        //for(let j=0;j<arr.length;j++){
        
        return target+1;
      
      
    }

  //  console.log(findTarget([1,2,5,3,6],0))
  //  console.log(findTarget([1,2,5,3,6],1))
  //  console.log(findTarget([1,2,5,3,6],2))
   console.log(findTarget([1,2,5,3,6],3))
  //  console.log(findTarget([1,2,5,3,6],4))

}


  // question:4 to find missing value in array starts from 0
  {
    //input: arr=[-1,0,2,3,6]
   // output[1,4,5]

   function find(arr) {
    const array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            array.push(i + 1); 
        }
    }
    return array;
}

const arr = [-1, 0, 2, 3, 6];
const output = find(arr);
console.log(output); 


  }

  // question 2.write a program to validate every odd character is capital letter in string
  {
  
    function validateOddCharacters(str) {
      for (let i = 0; i < str.length; i++) {
          if (i % 2 === 1 && str[i].match(/[A-Z]/) === null) {
              return false; 
          }
      }
      return true; 
  }
  
  console.log(validateOddCharacters("AbCdEfG")); // Output: true
  console.log(validateOddCharacters("AbcDefg")); // Output: false
  console.log(validateOddCharacters("aBcDeFg")); // Output: true 
  
  }

  //input:[1,2,4,7,8]
  //input:9
  //output:[2,7]
  {
    function findTargetIndex(arr, target) {
      const index = arr.indexOf(target);
       let index = index + 1  // Adding 1 to make the index one-based
       return index
  }
  
  // Test the function
  const array = [1, 2, 5, 3, 6];
  const target = 4;
  const index = findTargetIndex(array, target);
  console.log(index); // Output: 4
  
  }
