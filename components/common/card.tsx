// components/common/Card.tsx

import React from 'react';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div
      className="bg-gray-700 rounded-lg shadow hover:shadow-md transition cursor-pointer"
      onClick={onClick}
    >
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        {description && <p className="text-gray-600 text-sm mt-1">{description}</p>}
      </div>
    </div>
  );
};

export default Card;
