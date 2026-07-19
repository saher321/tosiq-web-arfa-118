// ******* SWITCH *********
// function getDayByNo(){
//     let no = parseInt(document.getElementById("day_no").value)

//     if (!no) {
//         alert("Please enter day no.")
//         return;
//     }

//     switch(no){
//         case 1:
//             console.log("Monday")
//             break
//         case 2:
//             console.log("Tuesday")
//             break
//         case 3:
//             console.log("Wednesday")
//             break
//         case 4:
//             console.log("Thursday")
//             break
//         default:
//             console.log("Invalid entry")
//     }
// }

// *********** LOOPS *************


// loop()
// function loop(){
//     for (let i=1; i <= 10; i++) {
//         console.log(i)
//     }

//     const mylist = ["Orange", "Apple", "Blueberry"] 
//     console.log(mylist[1])

//     let fruits = document.getElementById("list")

//     for (let i=0; i < mylist.length; i++){
//         // console.log(mylist[i])
//         if (i <= 0) {
//             fruits.innerHTML += `
//             <option>${mylist[i]}</option>
//             `
//         }
//     }

//     let z = 0
//     while (z < mylist.length) {
//         console.log("While loop:", mylist[z])
//         z++
//     }

//     let password = ""
//     while (true) {
//         password = prompt("Enter password")
//         if (password == "password123"){
//             break
//         }
//     }
//     console.log("Access granted: ", password)
// }

// arrayMethods()
function arrayMethods(){
    const arr1 = [ "Pink", "Blue", "White", "Red" ]
    // console.log(arr1)
    console.log("Length of arr1: ", arr1.length)

    arr1.push("Black")
    arr1.pop()

    arr1.unshift("Pakistan")
    arr1.shift()

    const arr2 = ["Clothing", "Kids wearing", "Shoes"]
    
    const newArr = [ ...arr1, ...arr2, "myArray" ]
    // console.log(arr1.concat("arr2"))
    console.log(newArr)

    newArr.splice(1, 1, "Karachi")

    console.log(newArr)

    // let obj = {id: 1, name: "April"}
    // console.log(
    //     "Check is array or not: ", 
    //     Array.isArray(obj)
    // )
}

stringMethods()
function stringMethods(){
    let data = "the Quick brown fox jumps over the lazy dog"
    console.log(data.length)

    console.log("indexof: ", data.indexOf("Q"))

    let email = "my-email@gmail.com"
    if (email.indexOf("@") < 0) {
        console.log("Email is invalid")
    } else {
        console.log("indexof: ", email.indexOf("@"))
    }

    // character at
    console.log(email.charAt(8))
    
    // split
    const newData = data.split(" ")

    console.log(newData)
}
