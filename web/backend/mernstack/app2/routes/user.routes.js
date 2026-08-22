import express from 'express'
import { getUsers } from '../controllers/user.controller.js'

const userRouter = express.Router()

// end-point: http://localhost:5000/api/v1/users
userRouter.get('/users', getUsers)

export default userRouter