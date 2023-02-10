const GifCard = ({ category }) => {
  return (
    <>
      <h3>{category.toUpperCase()}</h3>
      <p>Description</p>
    </>
  );
};

export default GifCard;
