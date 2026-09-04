import express from 'express'
import { register } from './auth.controller.js'

const authRouter = express.Router()

authRouter.post('/auth/register', register)

export default authRouter