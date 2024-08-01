import OpenAI from 'openai';
import { GPT_KEY } from './url.js';

const openAI = new OpenAI({
  apiKey: GPT_KEY,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});

export default openAI;
