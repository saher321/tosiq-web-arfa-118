import express from 'express'
import userRouter from './routes/user.routes.js'
import { DBConnection } from './config/db.js'

// commonJS
// const express = require("express")

const app = express()
const PREFIX = '/api/v1'


app.use(PREFIX, userRouter)


// http://localhost:5000/health

app.get("/health", (req, res) => {
    return res.send({
        status: true,
        message: "OK"
    })
})

DBConnection().then(() => {
    app.listen(5000, () => {
        console.log(`Server is started at http://localhost:5000`)
    })
})


// assignment
// create notes api
    // - id
    // - title
    // - description
    // - status (active, pending, processing, completed)