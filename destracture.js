// object destructuring
const actor = {
    name : "ananta" ,
    age : 40 ,
    phone:'01712415452',
    money: 1564114
}
// abar agulo k r o coto vabe lekha jay destracture kore ...if right side is an object left side  of destructuring will be object as well
// use property name as a variable that contains the proprety value
const {phone, name, age: boyos} = actor

// agulo k bar bar lekha jay..proyojon onujayi
// const phone = actor.phone ;
// const name = actor.name ;
// const age = actor.age ;
// const money = actor.money ;

console.log(name)
console.log(boyos)
// console.log(money)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)

// array destructuring 
const array = [14,48,50] ;
const [first,second] = array ;
const [x,y] = [12,66]

console.log(first)
console.log(x)

// ai function t array return kore (Advance )
function doubleThem(a,b){
    return [a*2, b*2]
}
const [des1,des2] = doubleThem(6,9)
console.log(des1,des2)
