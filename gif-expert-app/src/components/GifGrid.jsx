import { useState, useEffect } from 'react';
import { GifCard } from './GifCard';
import getGifs from '../helper/getGifs';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  const image = images.map((img) => {
    return <GifCard key={img.id} title={img.title} url={img.url} />;
  });

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category.toUpperCase()}</h3>
      <div className='card-grid'>{image}</div>
    </>
  );
};

export default GifGrid;
