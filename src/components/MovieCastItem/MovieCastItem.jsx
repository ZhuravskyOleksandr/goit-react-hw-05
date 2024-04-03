import css from './MovieCastItem.module.css';

export default function MovieCastItem({ actors, idx }) {
  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${actors[idx].profile_path}`}
          alt={actors[idx].name}
        />
      </div>
      <div>
        <p>{actors[idx].name}</p>
        <p>
          <b>Character: </b>
          {actors[idx].character}
        </p>
      </div>
    </>
  );
}
