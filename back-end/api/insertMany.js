import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

/*
Remover o id de cada objeto do array de músicas
 e criar um novo array com esses objetos
 */
const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;

  return newSongObj;
});

// Inserir os dados no banco de dados
const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtistis = await db
  .collection("artists")
  .insertMany(newArtistArray);
