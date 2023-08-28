const openai=require("openai");
require('dotenv').config();


const configuration = new openai.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai2 = new openai.OpenAIApi(configuration);
async function genImg(queryTxt){
  let image_urls;
    await openai2.createImage({
        prompt: `${queryTxt}`,
        n: 5,
        size: "512x512",
      })
      .then(d=>{
          console.log(d);
          image_urls=d.data.data;
          console.log(image_urls)
          return image_urls;
        })
      .catch(err=>console.log(err))

      return image_urls
}


module.exports= {genImg};
