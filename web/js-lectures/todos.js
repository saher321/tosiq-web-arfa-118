// youtube video url: https://www.youtube.com/watch?v=kq_Cm9x6gDU
// Assignment 12 july 2026
// edit user
// show message "No data" when array is empty

const users = []

function addNewUser(){
    let name = document.getElementById('name')

    if (name.value == ""){
        alert("Enter user name!")
        return;
    }
    users.push(name.value)

    name.value = ""

    showUsers()
}

function showUsers (){
    let userTbl = document.getElementById("userData")
    userTbl.innerHTML = ""
    users.forEach((user, i) => {
        userTbl.innerHTML +=`
        <tr>
            <td>${i+1}</td>
            <td>${user}</td>
            <td>
                <button onclick="removeUser(${i})"> Remove </button> | 
                <button onclick="editUser(${i})">
                    Edit
                </button>
            </td>
        </tr>
        `
    })
}

function removeUser(index){
    users.splice(index, 1)
    showUsers()
}

function editUser(index){
    console.log(index)
}