// function addNewUser() {
//     let n = document.getElementById("name").value
//     let userList = document.getElementById("list")
//     // innerText
//     // innerHTML
//     userList.innerHTML += `<li> ${n} </li>`
// }

const allUsers = [
    {id: 6, name: "Asif", email: "asif@gmail.com", status: true, role: "Vendor" },
        {id: 1, name: "Ali", email: "ali@gmail.com", status: true, role: "User" },
        {id: 2, name: "Alice", email: "alice@gmail.com", status: true, role: "Admin" },
        {id: 3, name: "Clark", email: "clark@gmail.com", status: false, role: "User" },
        {id: 4, name: "John", email: "john@gmail.com", status: false, role: "Vendor" },
        {id: 5, name: "Samantha", email: "sam@gmail.com", status: true, role: "User" },
    ]

getAllUser(allUsers)
function getAllUser(list) {
    
    let userList = document.getElementById("userList")

    for(let i = 0; i <= list.length; i++) {
        // console.log(allUsers[0])
        userList.innerHTML += `
        <tr>
            <td> ${i+1} </td>
            <td> ${list[i].name} </td>
            <td> ${list[i].email} </td>
            <td> ${list[i].status ? "Active":"Inactive"} </td>
            <td> ${list[i].role} </td>
        </tr>
        `
    }
}