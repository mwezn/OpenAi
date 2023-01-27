
require('dotenv').config();
const express=require('express');
const app=express();
const {genImg, txt2Cmd}=require('./openaiconfig')
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.use(express.static(__dirname))
const PORT=process.env.port||8080



app.get('/', async (req, res)=>{
    let resp=await txt2Cmd();
    console.log(resp)
    res.sendFile(__dirname+'/index.html')
})

app.post('/genAiImage', async (req,res)=>{
    
    try {
     let img=await genImg(req.body.query)
     res.send({src:`${img}`})
    }
    catch(err){
        res.json(err)
    }
})

app.listen(PORT,()=>{
    console.log(`server listening on port: ${PORT}`)
})





