import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../services/movieApi';
import { CastList } from 'Components/CastList/CastList';
// import { useSearchParams } from 'react-router-dom';

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieCastFetch();
  }, [setMovieCast]);

  const movieCastFetch = async () => {
    try {
      const data = await getMovieCast(movieId);
      setMovieCast(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <CastList movieCast={movieCast} />;
};

export default MovieCast;
