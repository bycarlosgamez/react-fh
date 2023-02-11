import { useState, useEffect } from 'react';
import getGifs from '../helper/getGifs';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  const image = images.map((img) => {
    return <li key={img.id}>{img.title}</li>;
  });

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category.toUpperCase()}</h3>
      <ul>{image}</ul>
    </>
  );
};

export default GifGrid;
