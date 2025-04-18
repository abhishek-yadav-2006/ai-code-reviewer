let IS_PROD = true;

const server = IS_PROD ? 
  "https://ai-code-reviewer-1-cafi.onrender.com"  :
   "http://localhost:3000"
   


export default server;