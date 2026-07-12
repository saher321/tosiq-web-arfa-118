// ****** Loop ******

// 1) variable initialization
// 2) condition 
// 3) incr/decr

let sum = 0
for (let i=1; i<=10; i++) {
    // if (i%2 == 0) {
    //     console.log("Iteration number is: ", i)
    // }
    sum = sum + i

}
console.log("Sum of all values is: ", sum)


// i = 1, i <= 10 true ===> sum = 0 + 1 => sum = 1 , i++
// i = 2, i <= 10 true ===> sum = 1 + 2 => sum = 3 , i++
// i = 3, i <= 10 true ===> sum = 3 + 3 => sum = 6 , i++


// nestedIfElse();
function nestedIfElse (){
    let email = "myemail@gmail.com"
    let passw = "emailme123"
    let useremail = prompt("Enter email: ")
    
    if (useremail == email) {
        let userpassw = prompt("Enter password: ")
        if (passw == userpassw) {
            console.log("Login successfull")
            return;
        } else {
            console.log("Password is incorrect")
            return;
        }
    } else {
        console.log("Email is incorrect")
        return;
    }

}


// let i = 1
// while (i<=10) {
//     console.log(i)
//     i++
// }

function addItem() {
    console.log("object")
    const users = []
    let n = document.getElementById("name").value

    while (true) {
        users.push(n)
        let option = prompt("Do you want an other transaction (y/n)? ")

        if (option == "n")
            break;
        n = document.getElementById("name").value
    }
    console.log(users)
}

// each()
function each() {
    // INDEXES         0         1        2
    const colors = ["Yellow", "Black", "Brown"]
    colors.forEach((clr, i) => {
        console.log(i, clr)
    })
}

// forIn()
function forIn() {
    // INDEXES         0         1        2
    const colors = ["Yellow", "Black", "Brown"]

    for (let clr in colors){
        console.log(colors[clr])
    }
}

forOF()
function forOF() {
    // INDEXES         0         1        2
    const colors = ["Yellow", "Black", "Brown"]

    for (let clr of colors){
        console.log(clr)
    }
}