import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://ziplinemybrand.com/wp-content/uploads/2025/01/January_Zipline-Blog-Post-Image.jpg')", 
          backgroundPosition: "50% 30%",
        }}
      >
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 transition-colors duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Brand Collaborations
            </span>{" "}
            with Pratik Jaware Patil
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Hi, I'm Pratik Jaware Patil. A Passionate content creator with engaged followers across Instagram and YouTube. Let's create authentic connections for your brand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#stats" 
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity text-center"
            >
              View My Stats
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors text-center"
            >
              Work With Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default HeroSection;