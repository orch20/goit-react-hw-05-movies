// import { useFetchPopularMovies } from 'Hooks/useFetchMovies';
import { useState, useEffect } from 'react';
import {
  useParams,
  Outlet,
  NavLink,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getMovieById } from '../../services/movieApi';
import css from './MovieDetails.module.scss';
const POSTERWIDTH = 300;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
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

  const genres = movie.genres?.map(genre => genre.name).join(', ');
  console.log('movie deded', genres);
  return (
    <div className={css.wraper}>
      <button className={css.button} onClick={goBack}>
        Go back
      </button>
      <div className={css.infoThumb}>
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
        <div className={css.infoThumbText}>
          <h2 className={css.movieTitle}>
            {movie.title} ({movie.release_date?.slice(0, 4)})
          </h2>
          <ul>
            <span className={css.infoTitle}>Genres:</span>{' '}
            {genres || 'no information'}
          </ul>
          <p className={css.rating}>
            <span className={css.infoTitle}>Rating:</span>{' '}
            {movie.vote_average?.toFixed(1)}
          </p>
          <p className={css.overview}>
            <span className={css.infoTitle}>Overview:</span> {movie.overview}
          </p>
        </div>
      </div>
      <div className={css.aditionalInfoWraper}>
        <h3 className={css.titleAditional}>
          Aditional information:{' '}
          <div className={css.linkWraper}>
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              state={{ from }}
              to={`/Movies/${movie.id}/cast`}
            >
              Cast
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              state={{ from }}
              to={`/Movies/${movie.id}/reviews`}
            >
              Reviews
            </NavLink>
          </div>
        </h3>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
