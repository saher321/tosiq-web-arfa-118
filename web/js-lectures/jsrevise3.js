// ******* SWITCH *********
function getDayByNo(){
    let no = parseInt(document.getElementById("day_no").value)

    if (!no) {
        alert("Please enter day no.")
        return;
    }

    switch(no){
        case 1:
            console.log("Monday")
            break
        case 2:
            console.log("Tuesday")
            break
        case 3:
            console.log("Wednesday")
            break
        case 4:
            console.log("Thursday")
            break
        default:
            console.log("Invalid entry")
    }
}

// *********** LOOPS *************

loop()
function loop(){
    for (let i=1; i <= 10; i++) {
        console.log(i)
    }

    const mylist = ["Orange", "Apple", "Blueberry"] 
    console.log(mylist[1])

    let fruits = document.getElementById("list")

    for (let i=0; i < mylist.length; i++){
        // console.log(mylist[i])
        if (i <= 0) {
            fruits.innerHTML += `
            <option>${mylist[i]}</option>
            `
        }
    }

    let z = 0
    while (z < mylist.length) {
        console.log("While loop:", mylist[z])
        z++
    }

    let password = ""
    while (true) {
        password = prompt("Enter password")
        if (password == "password123"){
            break
        }
    }
    console.log("Access granted: ", password)
}