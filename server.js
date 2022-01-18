const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Voila la réponse du server 1 !! ');
});
server.listen(process.env.PORT || 3000);
