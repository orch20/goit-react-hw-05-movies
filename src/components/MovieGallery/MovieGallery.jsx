import { Link, useLocation } from 'react-router-dom';
import css from './MovieGallary.module.scss';

export const MovieGallery = ({ movies }) => {
  const location = useLocation();
  console.log('gallary', movies);
  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link
            className={css.link}
            state={{ from: location }}
            to={`/Movies/${id}`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
