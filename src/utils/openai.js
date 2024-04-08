import OpenAI from 'openai';
import {OPENAI_API_KEY} from "./constants";

console.log(process.env.REACT_APP_KEY);

const openai = new OpenAI({
  apiKey:OPENAI_API_KEY,
  dangerouslyAllowBrowser: true 
});


export default openai;

// by default openai doest let u make call from the browser , we do not do it from our client side, we create a node backend and do it but to allow ot from the browser we set dangerouslyAllowBrowser: true 