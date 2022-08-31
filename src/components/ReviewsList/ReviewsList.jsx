import css from './ReviewsList.module.scss';
export const ReviewsList = ({ reviewsList }) => {
  const element = reviewsList?.map(({ author, content, id }) => (
    <li className={css.reviewsItem} key={id}>
      <p className={css.title}>User: {author}</p>
      <p>{content}</p>
    </li>
  ));
  return <ul>{element}</ul>;
};
