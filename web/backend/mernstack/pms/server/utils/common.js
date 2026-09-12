import { customAlphabet } from 'nanoid'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export const REG_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const REG_PASSW = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export const generateOTP = () => {
    const nanoid = customAlphabet('1234567890ABCDEF', 8)
    const otp = nanoid()
    return otp
}

export const sendEmail = async (toEmail, subject, content) => {
    try {
        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSW,
            },
        });

        const info = await transporter.sendMail({
            from: `"PMS PORTAL" <${process.env.SMTP_EMAIL}>`, // sender address
            to: toEmail, // list of recipients
            subject: subject, // subject line
            html: content, // HTML body
        });

        console.log("Message sent: %s", info.messageId);
        // Preview URL is only available when using an Ethereal test account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
        throw new Error(error)
    }
}