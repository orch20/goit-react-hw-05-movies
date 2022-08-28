import { MovieSearchForm } from 'Components/MovieSearchForm';
import { useState, useEffect } from 'react';
import { getMovieByQuery } from '../services/movieApi.js';
import { MovieGallery } from '../Components/MovieGallery';
import { useSearchParams } from 'react-router-dom';
export const MoviesSearch = () => {
  // const [userQuery, setUserQuery] = useState();

  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('query');
  console.log('searchParams', search);

  useEffect(() => {
    getMovie();
  }, [search]);

  const getMovie = async () => {
    try {
      const data = await getMovieByQuery(search);
      console.log('fetch movie', movies);
      if (search) {
        setMovies(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelSubmit = ({ search }) => {
    setSearchParams({ query: search });
    // setUserQuery(search);
    // console.log('query', userQuery);
  };
  // const movie = useFetchMovieByQuery(userQuery);
  console.log('movies', movies);

  return (
    <>
      <h2>Search Movies</h2>
      <MovieSearchForm onSubmit={handelSubmit} />
      {movies.length !== 0 ? (
        <MovieGallery movies={movies} />
      ) : (
        <p>Your search list is currently empty.</p>
      )}
    </>
  );
};
