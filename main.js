import express from 'express'
const app = express()
import sendEmail from './ses.js'
const port = 3000;

app.get("/", (req,res) => {
  sendEmail()
  res.send("welcome")
})

app.listen(port, () =>{
  console.log(`server is running on port ${port}`)
  
})