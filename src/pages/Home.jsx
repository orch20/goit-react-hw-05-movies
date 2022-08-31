import { MovieGallery } from '../components/MovieGallery/MovieGallery';
import { useFetchPopularMovies } from '../hooks/useFetchMovies';
import css from './Home.module.scss';
const Home = () => {
  const movies = useFetchPopularMovies();
  return (
    <main>
      <div className={css.wraper}>
        <h2>Popular Movies</h2>
        <MovieGallery movies={movies} />
      </div>
    </main>
  );
};

export default Home;
