function printGrade() {
    var marks = document.getElementById('grade').value

    if (marks < 50){
        console.log("Fail")
        return;
    } else if (marks >= 50 && marks <= 60) {
        console.log("You Got E grade")
        return;
    } else if (marks >= 61 && marks <= 70) {
        console.log("You Got D grade")
        return;
    } else if (marks >= 71 && marks <= 80) {
        console.log("You Got C grade")
        return;
    } else if (marks >= 81 && marks <= 90) {
        console.log("You Got B grade")
        return;
    } else if (marks >= 91 && marks <= 95) {
        console.log("You Got A grade")
        return;
    } else if (marks >= 96 && marks <= 100) {
        console.log("You Got A+ grade")
        return;
    } else {
        console.log("Invalid value entered")
        return;
    }
}