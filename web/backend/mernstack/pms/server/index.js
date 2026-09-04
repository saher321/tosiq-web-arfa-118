import express from 'express'
import { DBConnection } from './config/db.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app   = express()
const PORT  = process.env.PORT || 5000
const PREFIX= '/api/v1'

// middlewares
app.use(express.json())
app.use(cors())

// routes

app.get(PREFIX + '/check', (req, res) => {
    return res.send({
        status: true,
        message: "OK"
    })
})

DBConnection().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`)
    })
})