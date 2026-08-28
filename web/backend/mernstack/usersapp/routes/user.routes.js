import express from 'express'
import { addUser, getUsers } from '../controllers/user.controller.js'

const userRouter = express.Router()

// http://localhost:5000/api/v1/users/add
userRouter.get('/users', getUsers)
userRouter.post('/users/add', addUser)

export default userRouter
