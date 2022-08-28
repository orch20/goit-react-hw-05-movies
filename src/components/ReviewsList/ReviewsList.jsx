export const ReviewsList = ({ reviewsList }) => {
  console.log('reviewsList', reviewsList);

  const element = reviewsList?.map(({ author, content, id }) => (
    <li key={id}>
      <p>User: {author}</p>
      <p>{content}</p>
    </li>
  ));
  return <ul>{element}</ul>;
};
