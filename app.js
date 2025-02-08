const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(process.env.PORT,()=>{
    console.log(`running on port ${process.env.PORT}`)
})