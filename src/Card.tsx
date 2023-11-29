// Card.tsx

import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';


interface CardProps {
  key: number,
  title: string;
  author: string;
  image: string;
  rating: number;
  description: string;
}



const Card: React.FC<CardProps> = ({ key, title, author, image }) => {
    return (
        <div className="card">
          <Link to={`/book/${key}`}>
          <img src={image} alt={title} />
          <div>
            <p>{title}</p>
            <p>{author}</p>
          </div>
          </Link>
        </div>
      );
};

export default Card;
