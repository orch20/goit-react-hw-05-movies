import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('../Pages/Home'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const MovieCast = lazy(() => import('../Pages/MovieCast'));
const Reviews = lazy(() => import('../Pages/Reviews'));
const MoviesSearch = lazy(() => import('../Pages/Movies'));
const NotFound = lazy(() => import('../Pages/NotFound'));

export const App = () => {
  return (
    <Suspense>
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
