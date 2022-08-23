// import { useFetchPopularMovies } from 'Hooks/useFetchMovies';
import { useParams } from 'react-router-dom';

import { getMovieById } from '../services/movieApi';
import { useState, useEffect } from 'react';
const useFetchMovieById = id => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovie();
  }, []);
  console.log('movie', movie);
  const getMovie = async () => {
    try {
      console.log('asd', id);
      const data = await getMovieById(id);
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };
  return movie;
};

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const movie = useFetchMovieById(movieId);
  return <div>{movie.title}</div>;
  // const movies = useFetchPopularMovies();
  // const res = movies.find(movie => movie.id === id);
};
