import css from './MovieCast.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '/src/moviesAPI.js';
import MovieCastItem from '../MovieCastItem/MovieCastItem';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function MovieCast() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setLoading(true);
        setError(false);
        const cast = await getMovieCast(movieId);
        setActors(cast.slice(0, 3));
        console.log(cast);
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
          {actors.map(actor => (
            <li key={actor.id} className={css.actorsListItem}>
              <MovieCastItem actor={actor} />
            </li>
          ))}
        </ul>
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}
