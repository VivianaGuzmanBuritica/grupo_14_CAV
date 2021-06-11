const express= require("express");
const app= express();
const path= require("path");

app.set("port", process.env.PORT || 3003)

app.listen(app.get("port"),() => console.log("Servidor corriendo puerto:"+ app.get("port")))

app.use(express.static(path.resolve(__dirname,"./public")))

app.get("/", (req,res) => res.sendFile(path.join(__dirname,"./views/index.ejs")))
app.get("/login", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/login.ejs")))
app.get("/register", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/register.ejs")))
app.get("/productCart", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/productCart.ejs")))
app.get("/productDetail", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/productDetail.ejs")))

app.set("view engine","ejs");


  
