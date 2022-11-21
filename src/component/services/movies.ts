import axios from "axios";
import movieModel from "../model/movieModel";

const baseUrl = process.env.REACT_APP_BASE_URL;

const getTheaterMovies = async () => {
  const response = await axios.get('http://localhost:3004/movies-in-theaters');
  return response.data as movieModel[];
};

const getComingSoon = async () => {
  const response = await axios.get('http://localhost:3004/movies-coming');
  return response.data as movieModel[];
};

const getTopRatedIndia = async () => {
  const response = await axios.get('http://localhost:3004/top-rated-india');
  return response.data as movieModel[];
};

const getTopRatedMovies = async () => {
  const response = await axios.get('http://localhost:3004/top-rated-movies');
  return response.data as movieModel[];
};

const getFavourit = async () => {
  const response = await axios.get('http://localhost:3004/favourit');
  return response.data as movieModel[];
};

const getMovieData = async ( category : string, title : string ) => {
    const response = await axios.get(`http://localhost:3004/${category}?title=${title}` );
    return response.data as movieModel[];
};

export {
  getTheaterMovies,
  getComingSoon,
  getTopRatedIndia,
  getTopRatedMovies,
  getFavourit,
  getMovieData
};
