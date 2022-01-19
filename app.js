const express  = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('requete recue');
    next();
});

app.use((req,res,next)=>{
    res.status(201);
    next();
});

app.use((req,res,next)=>{
    res.json({message: "votre requete a bien été recue"});
    next();
});

app.use((req,res)=>{
    console.log('reponse envoyée avec succes');
});

module.exports = app;