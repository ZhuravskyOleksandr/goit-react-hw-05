import css from './Navigation.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  function linkClasses({ isActive }) {
    return clsx(css.navLink, {
      [css.active]: isActive,
    });
  }

  return (
    <header className={css.header}>
      <NavLink to="/" className={linkClasses}>
        Home
      </NavLink>
      <NavLink to="/movies" className={linkClasses}>
        Movies
      </NavLink>
    </header>
  );
}
