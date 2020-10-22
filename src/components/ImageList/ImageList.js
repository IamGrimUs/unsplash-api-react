import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import './ImageList.css';

const ImageList = ({ imageList }) => {
  const images = imageList.map(image => {
    return (
      <figure>
        <ImageCard key={image.id} image={image} />
      </figure>
    );
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
