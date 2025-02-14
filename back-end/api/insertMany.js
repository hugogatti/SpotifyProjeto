import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj._id;

  return newArtistObj;
});

/*
Remover o _id de cada objeto do array de músicas
 e criar um novo array com esses objetos
 */
const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj._id;

  return newSongObj;
});

// Inserir os dados no banco de dados
const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtistis = await db
  .collection("artists")
  .insertMany(newArtistArray);
