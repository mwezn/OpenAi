
require('dotenv').config();
const express=require('express');
const app=express();
const {genImg}=require('./openaiconfig')




const PORT=process.env.port||8080
console.log(genImg(),PORT)

app.post('/genAiImage', async (req,res)=>{
    console.log(req.body.query)

})

app.listen(PORT,()=>{
    console.log(`server listening on port: ${PORT}`)
})





