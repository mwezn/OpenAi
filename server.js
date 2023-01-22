
require('dotenv').config();
const express=require('express');
const app=express();
const {genImg}=require('./openaiconfig')
const cors = require('cors');
app.use(cors());
app.use(express.json())




const PORT=process.env.port||8080
//console.log(genImg('future technology'),PORT)


app.get('/', async (req, res)=>{
    res.json("YOOOOOOOOOOOOOOOOOOOO:!")
})
app.post('/genAiImage', async (req,res)=>{
    
     console.log(req.body.query)
     
    try {
     let img=await genImg(req.body.query)
     console.log("THE iMAGE is:" + img)
     res.send({src:`${img}`})
    }
    catch(err){
        res.json(err)
    }

})

app.listen(PORT,()=>{
    console.log(`server listening on port: ${PORT}`)
})





