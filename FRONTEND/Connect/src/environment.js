let IS_PROD=true;

const server=IS_PROD ?
"https://connect-video-call-website.onrender.com":"http://localhost:8000"

export default server;