function findLeapYear() {
    var year = document.getElementById("year").value

    if (year % 4 == 0) {
        console.log("Its leap year")
    } else {
        console.log("Its not leap year")
    }
}