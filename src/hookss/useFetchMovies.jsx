import { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/movieApi';
// getMovieById;
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

// export const useFetchMovieById = id => {
//   const [movie, setMovie] = useState({});

//   useEffect(() => {
//     getMovie(movie);
//   }, []);
//   const getMovie = async () => {
//     try {
//       const data = await getMovieById(id);
//       console.log(data);
//       setMovie(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return movie;
// };
