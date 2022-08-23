import { MovieGallery } from '../Components/MovieGallery';
import { useFetchPopularMovies } from '../Hooks/useFetchMovies';

export const Home = () => {
  const movies = useFetchPopularMovies();
  return (
    <main>
      <h2>Popular Movies</h2>
      <MovieGallery movies={movies} />
    </main>
  );
};
