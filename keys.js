const glass = {name:'glass',color:'golden' ,price:12, isCleaned:true} ;
const kyes = Object.keys(glass)
// console.log(keys) 
// [ 'name', 'color', 'price', 'isCleaned' ]
const value = Object.values(glass)
// console.log(value)
// [ 'glass', 'golden', 12, true ]
console.log(glass)
const pair = Object.entries(glass) ;
// console.log(pair)
// ata k onek khettre array of array bole(two dimentional array) 
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]

// object delete 
// delete glass.isCleaned
// console.log(glass) 

// destructuring kore delete kora jay 
const {isCleaned, ...shortGlass} = glass ;
// console.log(shortGlass)

// freeze(object k kono kichu poriborton korte dibo na, jmn ace tmne thakbe)
// Object.freeze(glass) ;
Object.seal(glass) ;
glass.source = 'Bangladesh' ;
glass.price = 5000  ;
delete glass.neme ;
console.log(glass)


const seal = Object.seal(glass) ;
// console.log(seal)/
// ati object return 
// { name: 'glass', color: 'golden', price: 12, isCleaned: true }