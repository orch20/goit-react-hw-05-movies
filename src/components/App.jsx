import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { Home } from '../Pages/Home';
import { MovieDetails } from './MovieDetails';
import { Movies } from '../Pages/Movies';
import { NotFound } from '../Pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Movies/:movieId" element={<MovieDetails />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
