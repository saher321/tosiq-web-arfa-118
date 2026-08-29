import express from 'express'
import { addUser, getUsers, deleteUser } from '../controllers/user.controller.js'

const userRouter = express.Router()

// http://localhost:5000/api/v1/users/add
userRouter.get('/users', getUsers)
userRouter.post('/users/add', addUser)
userRouter.delete('/users/delete/:id', deleteUser)

export default userRouter
