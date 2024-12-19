// components/ImageComponent.js
import React from 'react';
import { useSelector } from 'react-redux';

const ImageComponent = () => {
  const image = useSelector((state) => state.image.imagePath);

  return <img src={image} alt="Imported" style={{ maxWidth: '100%' }} />;
};

export default ImageComponent;
