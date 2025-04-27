import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types/types';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const { name, position, company, avatar, content, rating } = review;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {position} at {company}
          </p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(rating)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className="text-yellow-400 fill-current"
          />
        ))}
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 italic">
        "{content}"
      </p>
    </div>
  );
};

export default ReviewCard;