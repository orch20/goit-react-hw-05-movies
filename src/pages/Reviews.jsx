import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../services/movieApi';
import { ReviewsList } from 'Components/ReviewsList/ReviewsList';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    reviewsFetch();
  }, [setMovieReviews]);

  const reviewsFetch = async () => {
    try {
      const data = await getReviews(movieId);
      setMovieReviews(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log('movieReviews.length', movieReviews.length === 0);
  return movieReviews.length === 0 ? (
    <p>There're no comments</p>
  ) : (
    <ReviewsList reviewsList={movieReviews.results} />
  );
};
