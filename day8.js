let date=new Date();
console.log(date.getDate())  //RETURNS DATE 

console.log(date.getMonth()) //prints month (index starts from 0)


date.setDate(9) //update date
console.log(date.getDate()) //print date


date.setMonth(5) //update date
console.log(date.getMonth()) //print month

//formatted date
let formatted_date = (date.getDate()+"/"+ date.getMonth()+"/"+date.getFullYear())
console.log(formatted_date)

