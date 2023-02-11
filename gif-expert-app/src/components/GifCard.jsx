import getGifs from '../helper/getGifs';

const GifCard = ({ category }) => {
  getGifs(category);

  return (
    <>
      <h3>{category.toUpperCase()}</h3>
      <p>Description</p>
    </>
  );
};

export default GifCard;
