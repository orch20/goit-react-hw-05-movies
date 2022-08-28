// import { useFetchPopularMovies } from 'Hooks/useFetchMovies';
import { useParams, Outlet, Link, useNavigate } from 'react-router-dom';
import { useFetchMovieById } from 'Hooks/useFetchMovies';
const POSTERWIDTH = 300;

export const MovieDetails = () => {
  const { movieId } = useParams();

  const movie = useFetchMovieById(movieId);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  // /////////////////////////
  // const image = useMovieImage(movie.poster_path);
  // console.log(movie.poster_path);

  // ////////////////////////

  return (
    <>
      <button onClick={goBack}>Go back</button>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={POSTERWIDTH}
        />
      ) : (
        <img
          src={
            'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
          }
          alt={movie.title}
          width={POSTERWIDTH}
          height={450}
        />
      )}
      <div>{movie.title}</div>
      <div>
        <h3>Aditional information</h3>
        <Link to={`/Movies/${movie.id}/cast`}>Cast</Link>
        <Link to={`/Movies/${movie.id}/cast`}>Reviews</Link>
      </div>
      <Outlet />
    </>
  );
  // const movies = useFetchPopularMovies();
  // const res = movies.find(movie => movie.id === id);
};
