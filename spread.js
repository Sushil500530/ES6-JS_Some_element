const max = Math.max(6,12,43,53,54,24,44) ;
console.log(max)
 const numbers = [3,4,5,41,12,34,23,45,65,75,75,3,21,34,25] ;
 const maxNumber = Math.max(...numbers)
//  console.log(...numbers)
 console.log(maxNumber)

//  use spread operator to copy 
const nums = [4,5,7,23,43,34,55] 
const nums2 = nums ;
nums2.push(12) ;
    // console.log(nums)
    // console.log(nums2)

// akoi value 2 ta tei pawa jay...a somossha somadhaner jonno spread operator use korte pari 
const friends = [4,5,7,23,43,34,55] 
const bondhu = friends
const dosto = [...bondhu] ; // copy
friends.push(100) ; 
console.log(dosto) 
console.log(friends) 

// advanced
const extra =[...friends, 9999] // add extra element while copy 
console.log(extra)