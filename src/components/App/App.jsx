import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Navigation from '../Navigation/Navigation';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const MovieCast = lazy(() => import('../../components/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('../../components/MovieReviews/MovieReviews')
);

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={css.container}>
      <Navigation />

      <Suspense fallback={<b>Loading...</b>}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                loading={loading}
                setLoading={setLoading}
                error={error}
                setError={setError}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <MoviesPage
                loading={loading}
                setLoading={setLoading}
                error={error}
                setError={setError}
              />
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <MovieDetailsPage
                loading={loading}
                setLoading={setLoading}
                error={error}
                setError={setError}
              />
            }
          >
            <Route
              path="cast"
              element={
                <MovieCast
                  loading={loading}
                  setLoading={setLoading}
                  error={error}
                  setError={setError}
                />
              }
            />
            <Route
              path="reviews"
              element={
                <MovieReviews
                  loading={loading}
                  setLoading={setLoading}
                  error={error}
                  setError={setError}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
