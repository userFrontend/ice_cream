import React from 'react';
import './Card.scss';

const Card = ({ image, title, description, onClick }) => {
  return (
    <div className="icecream-card" onClick={onClick}>
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
