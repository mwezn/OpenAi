//import { Configuration, OpenAIApi } from "openai";
const openai=require("openai");
require('dotenv').config();



const configuration = new openai.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai2 = new openai.OpenAIApi(configuration);
async function genImg(queryTxt){
  let image_url;
    await openai2.createImage({
        prompt: `${queryTxt}`,
        n: 1,
        size: "1024x1024",
      })
      .then(d=>{
          //console.log(d);
          image_url=d.data.data[0].url;
          console.log(image_url)
          return image_url;
        })
      .catch(err=>console.log(err))

      return image_url
}

module.exports= {genImg};
