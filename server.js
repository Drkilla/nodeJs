const http = require('http');
const app = require('./app');

const normalizePort = val => {
    const port = parseInt(val,10);
    if(isNaN(port)){
        return val;
    }
    if(port >= 0 )
    {
        return port;
    }

    return false;
};

const port = normalizePort(process.env.PORT || '3000'); // renvoie un port valide qu'il soit fourni sous la forme d'un numéro ou d'une chaine
app.set('port',port);

//errorHandler recherche les différentes erreurs et les gere de maniere appropirée elle est ensuite enrengistrée dans le serveur;
const errorHandler = error => {
    if(error.syscall !== 'listen'){
        throw error;
    }

    const adress = server.adress();
    const bind = typeof adress === 'string' ? 'pipe' + address : 'port' + port;
    switch(error.code){
        case 'EACESS':
            console.error(bind + 'requires elevated privileges. ');
            process.exit(1);
            break;
        case 'EADDRINUSE': 
            console.error(bind + 'Is already in use. ');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening',()=> {
    const address = server.address();
    const bind = typeof adress === 'string ' ? 'pipe' + address : 'port' + port;
    console.log('listening on ' + bind);

});

server.listen(port);

