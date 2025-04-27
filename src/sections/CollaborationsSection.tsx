import React from 'react';
import BrandCard from '../components/BrandCard';
import { collaborations } from '../data/collaborations';

const CollaborationsSection: React.FC = () => {
  return (
    <section id="collaborations" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Past Brand Collaborations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take a look at some of my successful brand partnerships and their performance metrics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {collaborations.map(collab => (
            <BrandCard key={collab.id} collaboration={collab} />
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 text-center border border-blue-100 dark:border-blue-800 transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Ready to be my next successful collaboration?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I've helped brands achieve up to 3x their average engagement rates through authentic, creative content.
            Let's create something amazing together.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity"
          >
            Start a Collaboration
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;