import axios from "axios";
import { API_KEY } from "../api";

export const movieService = {
  getMovieList,
  getMovieByName,
  getMovieByNamePageNum
};

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=";

function getMovieList() {
  return axios
    .get(API_URL + API_KEY)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
}

async function getMovieByName(URL) {
  return await axios.get(API_URL + API_KEY + "&s=" + URL);
}

async function getMovieByNamePageNum(URL) {
  return await axios.get(API_URL + API_KEY + "&s=" + URL);
}
