import express from 'express'

// commonJS
// const express = require("express")

const app = express()

// http://localhost:5000/health

app.get("/health", (req, res) => {
    return res.send({
        status: true,
        message: "OK"
    })
})

app.listen(5000, () => {
    console.log(`Server is started at http://localhost:5000`)
})