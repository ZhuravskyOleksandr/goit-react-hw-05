import css from './MovieDetailsPage.module.css';
import clsx from 'clsx';
import { useEffect, useState, Suspense } from 'react';
import {
  useParams,
  Link,
  Outlet,
  NavLink,
  useLocation,
} from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { getMovieDetails } from '/src/moviesAPI.js';

export default function MovieDetailsPage({
  loading,
  setLoading,
  error,
  setError,
}) {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);

  function linkClasses({ isActive }) {
    return clsx(css.infoLink, {
      [css.active]: isActive,
    });
  }

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setLoading(true);
        setError(false);
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [movieId, setLoading, setError]);

  return (
    <>
      <Link className={css.backLink} to={location.state?.from ?? '/'}>
        <HiArrowLeft /> Go back
      </Link>
      {movieDetails !== null && (
        <div className={css.detailsWrapper}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          </div>

          <div>
            <h1>{movieDetails.title}</h1>
            <p>Rating: {movieDetails.vote_average.toFixed(2)}/10</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>

            <div>
              <h3>Interesting information about movie</h3>
              <ul>
                <li>
                  <NavLink className={linkClasses} to="cast">
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink className={linkClasses} to="reviews">
                    Reviews
                  </NavLink>
                </li>
              </ul>

              <div>
                <Suspense fallback={<b>Loading...</b>}>
                  <Outlet />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && movieDetails === null && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}
