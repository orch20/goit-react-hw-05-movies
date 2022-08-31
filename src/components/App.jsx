import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('../pages/MovieCast'));
const Reviews = lazy(() => import('../pages/Reviews'));
const MoviesSearch = lazy(() => import('../pages/Movies'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <Suspense fullback={<p>...Loading</p>}>
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
    </Suspense>
  );
};
