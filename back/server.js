const express = require("express");
const app = express();
const path = require("path");
const discos = require("./discos.json")
const public = path.join(__dirname, "../public", "index.html");

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(public);
});

app.get("/discos", (req, res) => {
  const artista = req.query.artista;
  const titulos = req.query.titulos;
  const lanzamiento = parseInt(req.query.lanzamiento);
  let listaDiscos = discos.discos;
    
if (artista) {
  listaDiscos = listaDiscos.filter(elemento => elemento.artista.toLowerCase().includes(artista));  
  }
if (titulos) {
  listaDiscos = listaDiscos.filter(elemento => elemento.titulo.toLowerCase().includes(titulos));  
  
  }
if (lanzamiento) {
  listaDiscos = listaDiscos.filter(elemento => elemento.lanzamiento.includes(lanzamiento));
  }
  res.json(listaDiscos);
});


app.listen(3000, () => {
    console.log("Server running, PORT: 3000");
});