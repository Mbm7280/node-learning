const express = require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")
const app = express()

app.use((req,res,next) => {
    next()
})

app.get('/',(req,res) => {
    res.send("Home Page")
})

app.listen(81, () => {
    console.log('http://127.0.0.1')
})