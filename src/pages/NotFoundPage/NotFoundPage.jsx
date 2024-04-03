import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <p>
      Page not found.{' '}
      <Link className={css.notFoundLink} to="/">
        Back to Home
      </Link>
    </p>
  );
}
