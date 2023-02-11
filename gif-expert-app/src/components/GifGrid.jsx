import { useFetchGifs } from '../../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category.toUpperCase()}</h3>
      {isLoading && <h2>Loading...</h2>}
      <div className='card-grid'>{images}</div>
    </>
  );
};

export default GifGrid;
