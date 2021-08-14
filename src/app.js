const express= require("express");
const app= express();
const path= require("path");
const method = require('method-override');
const session = require("express-session");
const cookieParser = require('cookie-parser');
const db = require("./database/models/index")

// base de datos
db.sequelize.sync().then(()=> {
    console.log("modelos sincronizados")
})

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


//terminar express session
app.use(session({resave: true, saveUninitialized: true, secret: "CAV"}));

//cookies
app.use(cookieParser());

// routes
const main = require('./routes/main');
app.use(main);

const product = require('./routes/product');
app.use(product);

const user =require('./routes/user');
app.use('/usuario', user);

const productCart = require('./routes/productCart');
app.use(productCart);





