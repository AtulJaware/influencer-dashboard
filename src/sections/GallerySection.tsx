import React from 'react';
import Gallery from '../components/Gallery';
import { galleryImages } from '../data/gallery';

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Content Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take a look at some of my gallery pictures.
          </p>
        </div>
        
        <Gallery images={galleryImages} />
      </div>
    </section>
  );
};

export default GallerySection;