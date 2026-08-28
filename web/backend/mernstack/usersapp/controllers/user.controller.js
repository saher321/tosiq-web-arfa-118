import User from "../models/user.model.js"

export const getUsers = async (req, res) => {
    const users = await User.find({})
    return res.send({
        status: true,
        users
    })
}

export const addUser = async (req, res) => {
    const { name, email, status } = req.body
    if (!name || !email || !status) {
        return res.send({
            status: false,
            message: "Fill all remaining fields"
        })
    }
    try {
        const checkUser = await User.findOne({ email: email }) 
        if (checkUser) {
            return res.send({
                status: false,
                message: "Email already exist, try new one"
            })
        }

        const newUser = await User.create({ 
            name, 
            email, 
            status 
        })

        if (newUser) {
            return res.send({
                status: true,
                message: "User has been added"
            })
        } else {
            return res.send({
                status: false,
                message: "Failed to add user"
            })
        }

    } catch (error) {
        throw new Error(error)
    }
}