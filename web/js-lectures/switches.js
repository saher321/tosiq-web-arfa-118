function checkDay (){
    let no = document.getElementById("day_no").value
    let res= document.getElementById("result")
    
    if (no.length <= 0){
        res.innerText = "Enter any number between 1-7"
        return;
    }

    switch(no) {
        case "1":
            res.innerText = "Monday"
            break;
        case "2":
            res.innerText = "Tuesday"
            break;
        case "3":
            res.innerText = "Wednesday"
            break;
        case "4":
            res.innerText = "Thursday"
            break;
        case "5":
            res.innerText = "Friday"
            break;
        case "6":
            res.innerText = "Saturday"
            break;
        case "7":
            res.innerText = "Sunday"
            break;
        default:
            res.innerText = "invalid entery"
    }
}

// switch(value){

//     case "1":
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("January")
//         break;

//     default:
//         console.log("Invalid entery")

// }