import css from './MovieCast.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '/src/moviesAPI.js';
import MovieCastItem from '../MovieCastItem/MovieCastItem';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function MovieCast({ loading, setLoading, error, setError }) {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setLoading(true);
        setError(false);
        const cast = await getMovieCast(movieId);
        setActors(cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId, setLoading, setError]);

  return (
    <>
      {actors.length > 0 && (
        <ul className={css.actorsList}>
          <li className={css.actorsListItem}>
            <MovieCastItem actors={actors} idx={0} />
          </li>
          <li className={css.actorsListItem}>
            <MovieCastItem actors={actors} idx={1} />
          </li>
          <li className={css.actorsListItem}>
            <MovieCastItem actors={actors} idx={2} />
          </li>
        </ul>
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}
