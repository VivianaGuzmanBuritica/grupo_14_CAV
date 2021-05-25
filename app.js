const path= require('path');
const express=require('express');
const app= express();

app.listen(3001, ()=>console.log('Bien hecho'));
app.get('/', function(req, res){res.send('Hola')});