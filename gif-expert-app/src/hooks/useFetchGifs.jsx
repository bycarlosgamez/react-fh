import { useState, useEffect } from 'react';
import { GifCard } from '../src/components/GifCard';
import getGifs from '../src/helper/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  const image = images.map((img) => {
    return <GifCard key={img.id} title={img.title} url={img.url} />;
  });

  useEffect(() => {
    getImages();
  }, []);

  return {
    images: [...image],
    isLoading,
  };
};
