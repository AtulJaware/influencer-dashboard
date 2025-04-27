import React from 'react';
import { ExternalLink, Heart, MessageCircle, Share } from 'lucide-react';
import { Collaboration } from '../types/types';

interface BrandCardProps {
  collaboration: Collaboration;
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

const BrandCard: React.FC<BrandCardProps> = ({ collaboration }) => {
  const { brandName, logo, campaign, date, engagement, link } = collaboration;
  
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={logo} 
              alt={`${brandName} logo`} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{brandName}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</p>
          </div>
        </div>
        
        <h4 className="text-base font-medium text-gray-800 dark:text-white mb-3">
          {campaign}
        </h4>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center">
            <div className="flex items-center justify-center text-red-500 mb-1">
              <Heart size={18} />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Likes</p>
            <p className="text-sm font-semibold text-gray-800 dark:text-white">
              {formatNumber(engagement.likes)}
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center">
            <div className="flex items-center justify-center text-blue-500 mb-1">
              <MessageCircle size={18} />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Comments</p>
            <p className="text-sm font-semibold text-gray-800 dark:text-white">
              {formatNumber(engagement.comments)}
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center">
            <div className="flex items-center justify-center text-green-500 mb-1">
              <Share size={18} />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Shares</p>
            <p className="text-sm font-semibold text-gray-800 dark:text-white">
              {formatNumber(engagement.shares)}
            </p>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Total impressions: {formatNumber(engagement.impressions)}
            </p>
          </div>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:text-blue-600 text-sm transition-colors"
          >
            <span className="mr-1">View</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;