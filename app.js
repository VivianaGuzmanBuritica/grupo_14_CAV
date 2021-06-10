const express= require("express");
const app= express();

const path= require("path");

app.listen(3003, () => console.log("Servidor corriendo puerto 3003"))

app.use(express.static(path.resolve(__dirname,"./public")))

app.get("/", (req,res) => res.sendFile(path.join(__dirname,"./views/index.html")))
app.get("/login.html", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/login.html")))
app.get("/register", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/register.html")))
app.get("/productCart.html", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/productCart.html")))
app.get("/productDetail.html", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/productDetail.html")))

app.set("view engine","ejs");


  
