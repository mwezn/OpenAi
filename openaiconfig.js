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

async function txt2Cmd(){
  await openai2.createCompletion({
    model: "text-davinci-003",
    prompt: "What goes up must",
    temperature: 0,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.2,
    presence_penalty: 0.0,
    stop: ["\n"],
  })
  .then(d=>{
    console.log(d.data);
    return d;
  })
  .catch(err=>console.log(err))

}

txt2Cmd();

module.exports= {genImg, txt2Cmd};
