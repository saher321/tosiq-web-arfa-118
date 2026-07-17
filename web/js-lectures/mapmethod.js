// map() => gives new array
// filter() => return an array on certain condition
// find() => returns an object from array
// reduce() => takes array returns single value
// some() => 

// let january = { saleBy: "some user name", profit: 100000}

// const numbers = [1,2,3,4,5]

// const updatedNumbers = numbers.map((nbr) => nbr * 2 )
// console.log(updatedNumbers)



const emps = [
    { id: 101, name: "John Abraham", designation: "HR" },
    { id: 102, name: "Carla", designation: "Manager" },
    { id: 103, name: "Stephen", designation: "Employee" },
    { id: 104, name: "Alice", designation: "Employee" },
]

showAllEmps(emps)

function showAllEmps (emp_list) {
    let tbody = document.getElementById("empData")
    tbody.innerHTML = ""
    emp_list.map((emp) => {
        tbody.innerHTML +=`
        <tr>
            <td> ${emp.id} </td>
            <td> ${emp.name} </td>
            <td> ${emp.designation} </td>
        </tr>
        `
    })
}

function selectDesignation () {
    let desig = document.getElementById("designation").value
    if (desig == "all"){
        showAllEmps(emps)
    } else {
        const filteredData = emps.filter((emp) => {
            return emp.designation == desig
        })
        showAllEmps(filteredData)
    }
}

findByDesignation()
function findByDesignation() {
    let des = "HR"

    let emp = emps.find((emp) => {
        return emp.designation == des
    })
    console.log(emp)
}

sumByReduce()
function sumByReduce(){
    const sales = [
        {month: "January", profit: 3000},
        {month: "March", profit: 1000},
        {month: "April", profit: 1000},
    ]
    let val = sales.reduce((total, sale) => total + sale.profit, 0);

    console.log(val)
}