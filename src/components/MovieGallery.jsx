import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const MovieGallery = ({ movies }) => {
  console.log('gallary', movies);
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/Movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
