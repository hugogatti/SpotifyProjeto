//Requisão para o banco de dados Fetch ou Axios
import axios from "axios";

//URL da API
const URL = "http://localhost:3001";

//Função para pegar os artistas
const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

// Array de artistas e músicas .data para pegar os dados
export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
