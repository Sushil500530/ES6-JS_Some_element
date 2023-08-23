const numbers = [3,5,6,8,21,53] ;
 for(const number of numbers){
    //console.log(number)
 }
 const nobab = 'siraj uddowla mr' ;
 for(const char of nobab){
    // console.log(char) 
 }
 const glass = { name: 'glass', color: 'golden', price: 12, isCleaned: true } ;
//  ata use kora jay na...tobe ghuraiya use kora jete pari
//  for(const key of glass){
//     console.log(key)
//  }
// ata object er khettre use kora hoy 
for(const key in glass){
    const value = glass[key]
    // console.log(key,value)
}
// optional 
const keys = Object.keys(glass) 
// console.log(keys)
for(const key of keys){
    const valus = glass[key]
    // console.log(key, valus)
 
}
const mobile = {
    brand: 'Samsung',
    model:'S4'
   };
delete mobile.model 
// console.log(mobile)
const obj = { foo: 1 };
obj.bar = 2;
console.log(obj)