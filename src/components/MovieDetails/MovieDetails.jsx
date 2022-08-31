// import { useFetchPopularMovies } from 'Hooks/useFetchMovies';
import { useState, useEffect } from 'react';
import {
  useParams,
  Outlet,
  Link,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getMovieById } from '../../services/movieApi';
// import { useFetchMovieById } from 'Hooks/useFetchMovies';
import css from './MovieDetails.module.scss';
const POSTERWIDTH = 300;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  // const movie = useFetchMovieById(movieId);
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location?.state || '/';
  const goBack = () => navigate(from);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await getMovieById(movieId);

        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [movieId]);
  console.log('movie deded', movie);
  return (
    <div className={css.wraper}>
      <button className={css.button} onClick={goBack}>
        Go back
      </button>
      <div>
        {movie.poster_path ? (
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={POSTERWIDTH}
          />
        ) : (
          <img
            className={css.img}
            src={
              'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
            }
            alt={movie.title}
            width={POSTERWIDTH}
            height={450}
          />
        )}

        <h2 className={css.movieTitle}>
          {movie.title} ({movie.release_date?.slice(0, 4)})
        </h2>
        <p className={css.rating}>Rating: {movie.vote_average?.toFixed(1)}</p>
        <p className={css.overview}>overview: {movie.overview}</p>
      </div>
      <div>
        <h3 className={css.titleAditional}>Aditional information</h3>
        <Link state={{ from }} to={`/Movies/${movie.id}/cast`}>
          Cast
        </Link>
        <Link state={{ from }} to={`/Movies/${movie.id}/reviews`}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
  // const movies = useFetchPopularMovies();
  // const res = movies.find(movie => movie.id === id);
};

export default MovieDetails;
