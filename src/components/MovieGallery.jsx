import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const MovieGallery = ({ movies }) => {
  const location = useLocation();
  console.log('gallary', movies);
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/Movies/${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
