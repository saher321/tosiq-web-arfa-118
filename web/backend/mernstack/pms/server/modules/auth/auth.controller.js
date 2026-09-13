import { generateOTP, REG_EMAIL, sendEmail } from "../../utils/common.js";
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

export const forgotPassword = async (req, res) => {
    const { email } = req.body
    console.log(email)
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

        let otp = generateOTP()
        let subject = "PMS Reset passwor OTP[authentication_process]"
        let content = `
        Hello ${user.fullName}, <br>
        Here is your requested OTP: <h3>${otp}</h3>
        <em>Note: Do not share this otp to anyone</em>
        `
        
        user.otp = otp
        user.isOtpVerified = false
        user.save()
        
        sendEmail(user.email, subject, content)
        
        return res.send({
            status: true,
            message: "OTP has been sent to your email"
        })

    } catch (error) {
        throw new Error(error)
    }


}
export const resetPassword = async (req, res) => {
    const { userEmail, otp, newPassword } = req.body
    if (!otp || !newPassword) {
        return res.send({
            status: false,
            message: "Fill all remaining fields"
        })
    }

    try {

        const user = await Auth.findOne({email: userEmail})
        console.log(user)
        if (!user) {
            return res.send({
                status: false,
                message: "User not found"
            })
        }

        if (otp != user.otp) {
            return res.send({
                status: false,
                message: "Provided otp is incorrect"
            })
        }

        
        const salt = await bcrypt.genSalt(10);
        const encPass = await bcrypt.hash(newPassword, salt); // $regdg.67tyfuuiu
        user.password = encPass
        user.otp = null
        user.isOtpVerified = true
        user.save()
        return res.send({
            status: true,
            message: "Password has been reset"
        })

    } catch (error) {
        throw new Error(error)
    }
}