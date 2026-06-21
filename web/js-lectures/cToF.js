function ctofConversion(){
    var celVal = document.getElementById("cVal").value
    var fah = celVal * 9/5 + 32

    var res = document.getElementById("result")
    
    res.innerHTML = `<strong> ${fah} </strong>`

    // res.innerHTML = "<strong>" + fah + "</strong>"
}