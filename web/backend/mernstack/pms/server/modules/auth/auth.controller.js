import { REG_EMAIL } from "../../utils/common.js";
import Auth from "./auth.model.js"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const { fullName, email, password, role } = req.body

    if (!fullName || !email || !password || !role) {
        return res.send({
            status: false,
            message: "Fill all remaining fields"
        })
    }

    if (!REG_EMAIL.test(email)) {
        return res.send({
            status: false,
            message: "Enter valid email format"
        })
    }

    try {
        const user = await Auth.findOne({email: email})

        if (user) {
            return res.send({
                status: false,
                message: "User already exist"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const encPass = await bcrypt.hash(password, salt); // $regdg.67tyfuuiu

        const newUser = {
            fullName,
            email,
            password: encPass,
            role
        }

        const result = await Auth.create(newUser)

        if (result) {
            return res.send({
                status: true,
                message: "Account has been created"
            })
        } else {
            return res.send({
                status: false,
                message: "Failed to create an account"
            })
        }

    } catch (error) {
        throw new Error(error)
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.send({
            status: false,
            message: "Fill all remaining fields"
        })
    }

    if (!REG_EMAIL.test(email)) {
        return res.send({
            status: false,
            message: "Enter valid email format"
        })
    }

    try {
        const user = await Auth.findOne({email: email})

        if (!user) {
            return res.send({
                status: false,
                message: "User not found"
            })
        }

        const loggedInUser = { id: user.id, fullName: user.fullName, email: user.email, role: user.role }
        const isMatched = await bcrypt.compare(password, user.password);
        const token = jwt.sign(loggedInUser, process.env.JWT_SECRET, { expiresIn: '1h' });

        if (isMatched) {
            return res.send({
                status: true,
                message: "Loggedin successfully",
                loggedInUser,
                token
            })
        } else {
            return res.send({
                status: false,
                message: "Credentials didn't matched"
            })
        }

    } catch (error) {
        throw new Error(error)
    }
}

export const forgotPassword = () => {}
export const resetPassword = () => {}