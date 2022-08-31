import css from './Cast.List.scss';
export const CastList = ({ movieCast }) => {
  const { cast } = movieCast;

  const element = cast?.map(({ cast_id, name, character, profile_path }) => (
    <li className={'castItem'} key={cast_id}>
      {profile_path ? (
        <img
          className={css.img}
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
      <div className={'castBottomThumb'}>
        <p className={'title'}>{name}</p>
        <p className={'title'}>
          <span className={'titleText'}>as</span> {character}
        </p>
      </div>
    </li>
  ));
  return <ul className={'castList'}>{element}</ul>;
};
