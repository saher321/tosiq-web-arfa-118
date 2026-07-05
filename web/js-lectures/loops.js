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
