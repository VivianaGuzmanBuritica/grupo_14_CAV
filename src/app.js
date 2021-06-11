const express= require("express");
const app= express();
const path= require("path");

// server start
app.set("port", process.env.PORT || 3003)
app.listen(app.get("port"),() => console.log("Servidor corriendo puerto:"+ app.get("port")))


<<<<<<< HEAD:src/app.js
// public access
app.use(express.static(path.resolve(__dirname,"../public")))


//  view engine
app.set('view engine','ejs');
app.set('views', path.resolve(__dirname, './views'));

// routes
const main = require('./routes/main');
app.use(main);

//app.get("/", (req,res) => res.sendFile(path.join(__dirname,"./views/index.html")))
app.get("/login.html", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/login.html")))
app.get("/register", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/register.html")))
app.get("/productCart.html", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/productCart.html")))
app.get("/productDetail.html", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/productDetail.html")))
=======
app.get("/", (req,res) => res.sendFile(path.join(__dirname,"./views/index.ejs")))
app.get("/login", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/login.ejs")))
app.get("/register", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/register.ejs")))
app.get("/productCart", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/productCart.ejs")))
app.get("/productDetail", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/productDetail.ejs")))
>>>>>>> 48d5e5e0cb9dc1368aef1b657ffa73adab4ba505:app.js

app.set("view engine","ejs");


  
