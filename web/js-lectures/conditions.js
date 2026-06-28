// var age = 18 
// var user;
// if (!user) {
//     console.log("user not found")
// }

function checkValue() {
    var text = document.getElementById("val").value

    if (!text) {
        console.error("Please provide input")
        return;
    }

    console.log("You have entered this text: ", text)
}