// ****** Loop ******

// 1) variable initialization
// 2) condition 
// 3) incr/decr

for (let i=1; i<=10; i++) {
    console.log("Iteration number is: ", i)
}


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


