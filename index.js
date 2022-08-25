const express = require("express");
const app = express();
const { router, productos } = require("./router/routes");

const { engine } = require("express-handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


//Descomentar lineas segun que plantilla se quiera usar

//HANDLEBARS
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./Handlebars/views");


//PUG
/* app.set("views", "./Pug");
app.set("view engine", "pug"); */


//EJS
/* app.set("views", "./Ejs/views")
app.set('view engine', '.ejs') */


app.get("/", (req, res) => {
  res.render("datos");
}); 

app.get("/productos", (req, res) => {
  res.render("productos", { productos: productos });
});

app.use("/", router)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
