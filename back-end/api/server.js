//API
import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3001;

//Middleware para permitir que o servidor aceite requisições de qualquer origem
app.use(cors());

//req = requisição (pedido) do cliente
//res = resposta do servidor para o cliente
app.get("/", (req, res) => {
  res.send("Endpoint '/artists' e 'songs' disponíveis");
});

/*
Acessar a coleção de músicas e artistas
Assincrono - await espera a resposta do servidor e async para continuar
Quando acessar a rota /artists, o servidor vai responder com o array de artistas 
*/
app.get("/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});

//Quando acessar a rota /songs, o servidor vai responder com o array de músicas
app.get("/songs", async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

app.listen(3001, () => {
  console.log(`Server esta escutando na porta ${PORT}`);
});
