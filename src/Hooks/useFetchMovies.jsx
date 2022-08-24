import { useState, useEffect } from 'react';
import {
  getPopularMovies,
  getMovieById,
  getMovieImage,
} from '../services/movieApi';

export const useFetchPopularMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getPopularMovie();
  }, []);

  const getPopularMovie = async () => {
    try {
      const data = await getPopularMovies();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return movies;
};

export const useFetchMovieById = id => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovie(movie);
  }, []);
  console.log('movie', movie);
  const getMovie = async () => {
    try {
      const data = await getMovieById(id);
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };
  return movie;
};

// export const useMovieImage = img => {
//   const [image, setImage] = useState({});

//   useEffect(() => {
//     getImage();
//   }, [image]);
//   console.log('movie', image);
//   const getImage = async () => {
//     try {
//       console.log('asd', img);
//       const data = await getMovieImage(img);
//       console.log(data);
//       setImage(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return image;
// };
