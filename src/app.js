const express= require("express");
const app= express();
const path= require("path");

// server start
app.set("port", process.env.PORT || 3003)
app.listen(app.get("port"),() => console.log("Servidor corriendo puerto:"+ app.get("port")))


// public access
app.use(express.static(path.resolve(__dirname,"../public")))


//  view engine
app.set('view engine','ejs');
app.set('views', path.resolve(__dirname, './views'));

// routes
const main = require('./routes/main');
app.use(main);

const product = require('./routes/product');
app.use(product);

const user = require('./routes/user');
app.use(user);

const productCart = require('./routes/productCart');
app.use(productCart);

app.use(express.urlencoded({extended:false}));
app.use(express.json());



  
