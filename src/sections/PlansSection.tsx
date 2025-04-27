import React from 'react';
import PlanCard from '../components/PlanCard';
import { plans } from '../data/plans';

const PlansSection: React.FC = () => {
  return (
    <section id="plans" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Collaboration Packages
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect package for your brand's needs or contact me for a custom solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map(plan => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            All packages can be customized to meet your specific requirements.
            <br />
            Need a unique solution? Let's discuss your goals.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity"
          >
            Contact for Custom Package
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;