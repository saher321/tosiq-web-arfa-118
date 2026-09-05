import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['pm', 'emp'],
        default: 'emp'
    },
    otp: {
        type: String,
        default: null
    },
    isOtpVerified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })


const Auth = mongoose.model("User", authSchema)

export default Auth