//API
import express from "express";
import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";

const app = express();
const PORT = 3001;

//req = requisição (pedido) do cliente
//res = resposta do servidor para o cliente
app.get("/", (req, res) => {
  res.send("Endpoint '/artists' e 'songs' disponíveis");
});

//Quando acessar a rota /artists, o servidor vai responder com o array de artistas
app.get("/artists", (req, res) => {
  res.send(artistArray);
});

//Quando acessar a rota /songs, o servidor vai responder com o array de músicas
app.get("/songs", (req, res) => {
  res.send(songsArray);
});

app.listen(3001, () => {
  console.log(`Server esta escutando na porta ${PORT}`);
});
