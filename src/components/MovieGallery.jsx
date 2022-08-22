import styled from 'styled-components';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const MovieGallery = ({ movies }) => {
  console.log('mov', movies);

  return (
    <List>
      {movies.map(({ id, title, name }) => (
        <li key={id}>{title || name}</li>
      ))}
    </List>
  );
};

const List = styled.ul`
  /* display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto; */
`;
