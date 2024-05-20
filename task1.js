{
  //filtering using inbuilt methods

  console.log(' Filter the names who scored  >=50 in all tests and atleast 50 in one test. Array obj:[{ name: "sheela", test1: 50, test2: 60, test3:40 }, { name: "metlin", test1: 50, test2: 60, test3:80 }] ')

let obj1 = [{
  name: "sheela",
  test1: 50,
  test2: 60,
  test3: 40
}, {
  name: "metlin",
  test1: 50,
  test2: 60,
  test3: 80
}];

// filter() method to iterate through each object in the array and filter the names based on the conditions

// Inside the filter function, we use every() to check if every test score (test1, test2, test3) is greater than or equal to 50 for the current person.


  // Check if the person scored >= 50 in all tests 
  //slice(1) is used exclude first value (name in object)which is not needed for the comparision

  //slice index is 1 ,because of shallow copy(index starts from 1)

  //every() is used to check all values greater or equal to 50,(returns only boolean value)

  // If all test scores meet the condition, we keep the person in the filtered array.
  
  let filteredNames = obj1.filter(person => {
    return Object.values(person).slice(1).every(score => score >= 50)
  });
  
  let filteredNames1 = obj1.filter(person => {
    // Check if the person scored at least 50 in at least one test
    return Object.values(person).slice(1).some(score => score >= 50);
  });
  
  // Extract the names from the filtered results
  let names = filteredNames.map(person => person.name);
  let names1 = filteredNames1.map(person => person.name);
  console.log(names); // Op: ["metlin"]
  console.log(names1); //op:['sheela','metlin']
  }
  
{
// Filter the names who scored  >=50 in all tests and 50 atleast in one test

let obj1 = [{
    name: "sheela",
    test1: 50,
    test2: 60,
    test3:40
}, {

    name: "metlin",
    test1: 50,
    test2: 60,
    test3:80
}]

let markFilter = obj1.filter ((a) => {
        return a.test1 >=50 && a.test2 >=50 && a.test3 >=50
})
console.log("\nPersons who scored >=50 in all tests:", markFilter)

markFilter = obj1.filter ((a) => {
    return a.test1 >=50 || a.test2 >=50 || a.test3 >=50
})
console.log("\nPersons who scored 50 atleast in one test:", markFilter)

}



