import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { Home } from '../Pages/Home';
import { MovieDetails } from './MovieDetails';
import { MovieCast } from '../Pages/MovieCast';
import { Reviews } from '../Pages/Reviews';
import { MoviesSearch } from '../Pages/Movies';
import { NotFound } from '../Pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Movies/:movieId" element={<MovieDetails />}>
          <Route path="/Movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/Movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="/Movies" element={<MoviesSearch />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
