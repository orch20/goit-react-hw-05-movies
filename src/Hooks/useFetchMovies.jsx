import { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/movieApi';

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
