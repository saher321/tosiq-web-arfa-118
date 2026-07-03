applyTheme()
function changeBG(color) {
    document.body.style.backgroundColor = color

    // localStorage.setItem     => store value
    // localStorage.getItem     => read value
    // localStorage.removeItem  => remove current val
    // localStorage.clear       => remove all val

    localStorage.setItem("bgColor", color)
}

function applyTheme() {
    let name = "Windows 11"
    console.log(name.length)
    const clr = localStorage.getItem("bgColor")
    if (clr.length > 0) {
        document.body.style.backgroundColor = clr
        return;
    }
    alert("No color is selected")
}