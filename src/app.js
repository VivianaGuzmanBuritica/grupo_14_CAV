const express= require("express");
const app= express();
const path= require("path");
const method = require('method-override');

// server start
app.set("port", process.env.PORT || 3003)
app.listen(app.get("port"),() => console.log("Servidor corriendo puerto:"+ app.get("port")))


// public access
app.use(express.static(path.resolve(__dirname,"../public")))


//  view engine
app.set('view engine','ejs');
app.set('views', path.resolve(__dirname, './views'));

// Data Configuration 
app.use(express.urlencoded({extended:false}));
app.use(method("_method")) // ?_method=PUT
app.use(express.json());

// routes
const main = require('./routes/main');
app.use(main);

const product = require('./routes/product');
app.use(product);

const user =require('./routes/user');
app.use('/usuario', user);

const productCart = require('./routes/productCart');
app.use(productCart);



