import css from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '/src/moviesAPI.js';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setLoading(true);
        setError(false);
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingMovies();
  }, [setLoading, setError]);

  return (
    <div>
      <h1>Trending today</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
