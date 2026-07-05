// console.log(name)
var name = "Ali"
var name = "New name"
// var can be redeclare and re-initialize

// console.log(age) // Hoeisted
let age = 32
age = 34
// console.log(age)
// let can not be redeclare but re-initialize

const status = "online"
// console.log(status)
// status = "offline"
// const can not be redeclare or re-initialize

// let y = 44
if (true){
    var x = 10
    let y = 20
    const z = 30
}
console.log(x) // global scope
console.log(y) // block scope
console.log(z) // block scrope