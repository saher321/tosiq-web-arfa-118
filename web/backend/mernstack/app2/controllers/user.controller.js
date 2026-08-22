export const getUsers = (req, res) => {

    const users = [
        {id: 101, name: "Kloe", email:"kloe@email.com"},
        {id: 102, name: "July", email:"july@email.com"},
        {id: 103, name: "Alice", email:"alx@email.com"}
    ]

    return res.send({
        status: true,
        users
    })
}