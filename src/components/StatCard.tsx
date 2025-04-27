import React, { useState, useEffect } from 'react';

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  description?: string;
  suffix?: string;
  color: string;
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

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  description, 
  suffix = '', 
  color 
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  // Animate counter effect
  useEffect(() => {
    const duration = 2000; // animation duration in ms
    const frameDuration = 1000 / 60; // 60 fps
    const totalFrames = Math.round(duration / frameDuration);
    const increment = value / totalFrames;
    
    let currentFrame = 0;
    const counter = setInterval(() => {
      currentFrame++;
      const progress = Math.min(currentFrame / totalFrames, 1);
      // Use easeOutQuad for smoother animation
      const easeProgress = progress * (2 - progress);
      setDisplayValue(Math.floor(value * easeProgress));
      
      if (progress === 1) {
        clearInterval(counter);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [value]);
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
      <div className={`p-4 ${color} text-white flex justify-between items-center`}>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-white">{icon}</div>
      </div>
      <div className="p-6">
        <div className="flex items-end space-x-1 mb-2">
          <span className="text-3xl font-bold text-gray-800 dark:text-white">
            {formatNumber(displayValue)}
          </span>
          {suffix && (
            <span className="text-lg text-gray-500 dark:text-gray-300 mb-1">{suffix}</span>
          )}
        </div>
        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        )}
      </div>
    </div>
  );
};

export default StatCard;