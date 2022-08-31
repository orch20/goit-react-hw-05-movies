import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../services/movieApi';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  console.log('movieReviews', movieReviews);
  useEffect(() => {
    const reviewsFetch = async () => {
      try {
        const data = await getReviews(movieId);
        setMovieReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    reviewsFetch();
  }, [movieId]);

  return movieReviews.length === 0 ? (
    <p>There're no comments</p>
  ) : (
    <ReviewsList reviewsList={movieReviews.results} />
  );
};

export default Reviews;
