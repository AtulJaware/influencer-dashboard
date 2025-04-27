import React from 'react';
import { Check } from 'lucide-react';
import { Plan } from '../types/types';

interface PlanCardProps {
  plan: Plan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  const { name, price, description, features, popular } = plan;
  
  return (
    <div className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl ${
      popular ? 'border-2 border-blue-500 dark:border-blue-400' : ''
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex items-baseline justify-center">
          {price > 0 ? (
            <>
              <span className="text-3xl font-bold text-gray-800 dark:text-white">₹{price.toLocaleString()}</span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">/package</span>
            </>
          ) : (
            <span className="text-2xl font-bold text-gray-800 dark:text-white">Contact for Quote</span>
          )}
        </div>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <a
        href="#contact"
        className={`block w-full text-center py-2 px-4 rounded-lg transition-colors ${
          popular
            ? 'bg-blue-500 hover:bg-blue-600 text-white'
            : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
};

export default PlanCard;