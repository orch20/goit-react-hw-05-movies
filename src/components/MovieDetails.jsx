// import { useFetchPopularMovies } from 'Hooks/useFetchMovies';
import { useParams, Outlet } from 'react-router-dom';
import { useFetchMovieById, useMovieImage } from 'Hooks/useFetchMovies';

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const movie = useFetchMovieById(movieId);

  // /////////////////////////
  // const image = useMovieImage(movie.poster_path);
  // console.log(movie.poster_path);

  // ////////////////////////

  return (
    <>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <img
          src={
            'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
          }
          alt={movie.title}
        />
      )}
      <div>{movie.title}</div>
      <Outlet />
    </>
  );
  // const movies = useFetchPopularMovies();
  // const res = movies.find(movie => movie.id === id);
};
