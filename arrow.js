const different = (x,y)=>x - y
const multiply = (first,second,third) =>first * second * third ;
// single or one parameter
const getAge = (person) => person.age ;
const student = {name: "sushil", age: 20} 
const age = getAge(student)
console.log(age)

const getThird = numbers => numbers[2] ;
const third =getThird([5,7,9,34,12,45]);
console.log(third)

const doublet = num => num * 2 ;
const int = 34 ; 
console.log(doublet(int))
//  no parameter 
const getPI = () => Math.PI ;
console.log(getPI())

// large arrow function  . if you anything return this function 
const doMath = (x,y,z)=>{
    const sum = x + y + z ;
    const mult = x * y * z ;
    const result = sum + mult ;
    return result
}
const numbers = doMath(2,3,4) ;
console.log(numbers)
 

// defference betweend arrow function and regular function --search chatGpt(WH)