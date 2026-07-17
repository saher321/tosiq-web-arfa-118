// const numbers = [1,2,3,4,5]

// const updatedNumbers = numbers.map((nbr) => nbr * 2 )
// console.log(updatedNumbers)

const emps = [
    { id: 101, name: "John Abraham", designation: "HR" },
    { id: 102, name: "Carla", designation: "TL" },
    { id: 103, name: "Stephen", designation: "MD" },
    { id: 104, name: "Alice", designation: "CEO" },
]

showAllEmps(emps)

function showAllEmps (emp_list) {
    let emp_tbody = document.getElementById("emp_tbl")

    emp_list.map((emp) => {
        emp_tbody.innerHTML +=`
        <tr>
            <td> ${emp.id} </td>
            <td> ${emp.name} </td>
            <td> ${emp.designation} </td>
        </tr>
        `
    })

}