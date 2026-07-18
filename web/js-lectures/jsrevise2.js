// console.log("Hello from js")
// alert("Hello from js")

let x = 2
let y = 3
let sum = 0
sum = x+y
// console.log(typeof sum)

// let a = prompt("Enter any value:"); let b = 5; let c = 6;
let a = 4; let b = 5; let c = 6;
let ev = a*a + b*b + 2*a*b
console.log(ev);

// 12 > 13 => false
// <, 
// 12 <= 13, => true
// >=, 
// user || user.length > 3,  :: e.g : user = ali => true
// user && user.length > 3,  :: e.g : user = ali => false
// !, !val => not found
// ==, 1 == "1" => true
// ===, 1 === "1" => false
// let ourage = 12
// !=, => user.age != ourage => false

function printData(){
    // let val = document.getElementById("txt").innerText
    let val = document.getElementById("input1").value

    if (!val) { // guarded clause
        console.log("Enter value first")
        return;
    }

    if (val > 0) {
        console.log("Positive values")
        if (val % 2 == 0) {
            console.log("Its also an even number")
        } else {
            console.log("Its also an odd number")
        }
        console.log(typeof parseInt(val), val)
    } else {
        console.log("Negative values")
    }
}





