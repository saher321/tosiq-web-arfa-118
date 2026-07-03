applyTheme()
function changeBG(color) {
    document.body.style.backgroundColor = color

    // localStorage.setItem(key, value) => store value
    // localStorage.getItem(key)        => read value
    // localStorage.removeItem(key)     => remove current val
    // localStorage.clear()             => remove all val

    // localStorage.setItem("txtColor", color)
    localStorage.setItem("bgColor", color)
}

function applyTheme() {
    const clr = localStorage.getItem("bgColor")
    
    if (!clr || clr.length <= 0) {
        alert("No color is selected")
    }
    
    document.body.style.backgroundColor = clr
}