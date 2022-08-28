export const CastList = ({ movieCast }) => {
  const { cast } = movieCast;
  console.log('movieCast', cast);
  const element = cast?.map(({ cast_id, name, character, profile_path }) => (
    <li key={cast_id}>
      {profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w185${profile_path}`}
          alt={name}
        />
      ) : (
        <img
          src={
            'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
          }
          alt={name}
          width={185}
        />
      )}
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  ));
  return <ul>{element}</ul>;
};
