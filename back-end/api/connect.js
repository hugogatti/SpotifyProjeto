//Conexão com o banco de dados
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://<NomeUsuario>:<Senha>@cluster0.0sita.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//usar o new por ser uma classe
const client = new MongoClient(URI);

export const db = client.db("NomeDaSuaDB");
