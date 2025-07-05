import React from 'react';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div
      className="bg-gray-700 rounded-xl shadow-md overflow-hidden transition hover:shadow-lg cursor-pointer "
      onClick={onClick}
    >
        <div className='w-48'>
             {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-xl"
        />
      )}
        </div>
     
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        {description && <p className="text-gray-200 text-sm">{description}</p>}
      </div>
    </div>


    
  );
};

export default Card;
