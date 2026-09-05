import express from 'express'
import { register, login, forgotPassword, resetPassword  } from './auth.controller.js'

const authRouter = express.Router()

authRouter.post('/auth/register', register)
authRouter.post('/auth/login', login)
authRouter.post('/auth/forgot-password', forgotPassword)
authRouter.post('/auth/reset-password', resetPassword)

export default authRouter