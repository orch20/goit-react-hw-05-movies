import React, { useState, useEffect } from 'react';
import { movieService } from '../services/movieApi';
import { MovieGallery } from '../components/MovieGallery';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    try {
      const data = await movieService();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>Popular Movies</h2>
      <MovieGallery movies={movies} />
    </>
  );
};
