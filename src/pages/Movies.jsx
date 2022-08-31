import { MovieSearchForm } from 'components/MovieSearchForm';
import { useState, useEffect } from 'react';
import { getMovieByQuery } from '../services/movieApi.js';
import { MovieGallery } from '../components/MovieGallery/MovieGallery';
import { useSearchParams } from 'react-router-dom';
import css from './Movies.module.scss';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('query');

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await getMovieByQuery(search);

        if (search) {
          setMovies(data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [search]);

  const handelSubmit = ({ search }) => {
    setSearchParams({ query: search });
  };

  return (
    <div className={css.wraper}>
      <h2>Search Movies</h2>
      <div className={css.form}>
        <MovieSearchForm onSubmit={handelSubmit} />
      </div>
      {movies.length !== 0 ? (
        <MovieGallery movies={movies} />
      ) : (
        <p>Your search list is currently empty.</p>
      )}
    </div>
  );
};

export default MoviesSearch;
