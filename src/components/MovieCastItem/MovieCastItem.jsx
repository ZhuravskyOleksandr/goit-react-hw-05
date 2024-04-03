import css from './MovieCastItem.module.css';

export default function MovieCastItem({ actor }) {
  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
          alt={actor.name}
        />
      </div>
      <div>
        <p>{actor.name}</p>
        <p>
          <b>Character: </b>
          {actor.character}
        </p>
      </div>
    </>
  );
}
