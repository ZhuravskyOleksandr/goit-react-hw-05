import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MoviesPage from '/src/pages/MoviesPage/MoviesPage';
import HomePage from '/src/pages/HomePage/HomePage';

export default function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>
  );
}
