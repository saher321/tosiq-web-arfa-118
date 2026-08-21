import express from 'express'

// commonJS
// const express = require("express")

const app = express()
const PREFIX = '/api/v1'
const users = [
    {id: 101, name: "Kloe", email:"kloe@email.com"},
    {id: 102, name: "July", email:"july@email.com"},
    {id: 103, name: "Alex", email:"alx@email.com"}
]

// end-point: http://localhost:5000/api/v1/users
app.get(`${PREFIX}/users`, (req, res) => {
    return res.send({
        status: true,
        users
    })
})

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