import express from 'express'
import { DBConnection } from './config/db.js'
import userRouter from './routes/user.routes.js'
import cors from 'cors'

const app = express()
const PORT = 5000
const PREFIX = '/api/v1'

// middlewares
app.use(express.json())
app.use(cors())

app.use(PREFIX, userRouter)

app.get('/health', (req, res) => {
    return res.send({
        status: true,
        message: "OK"
    })
})


DBConnection().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running at http://localhost:" + PORT)
    })
})