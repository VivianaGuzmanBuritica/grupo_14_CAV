const express= require("express");
const app= express();

const path= require("path");

app.listen(3003, () => console.log("Servidor corriendo"))

app.use(express.static(path.resolve(__dirname,"./public")))

app.get("/", (req,res) => res.sendFile(path.join(__dirname,"./views/index.html")))
