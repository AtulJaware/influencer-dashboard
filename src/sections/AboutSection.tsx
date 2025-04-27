import React from 'react';
import { Camera, VideoIcon, Award, Globe } from 'lucide-react';
import studioImage from '../images/studio.webp'; 

const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Content Created', value: '500+', icon: <Camera size={24} /> },
    { label: 'Countries Visited', value: '15+', icon: <Globe size={24} /> },
    { label: 'Brand Collaborations', value: '80+', icon: <Award size={24} /> },
    { label: 'Videos Produced', value: '320+', icon: <VideoIcon size={24} /> },
  ];
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I create authentic content that resonates with my audience and drives real engagement for the brands I work with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={studioImage}
                alt="Pratik Jaware" 
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transform rotate-6"></div>
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Hi, I'm Pratik Jaware Patil
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a lifestyle content creator with a focus on travel, tech reviews, and daily vlogs. 
              With a combined following of over 375,000 across my platforms, I've built a community that 
              trusts my recommendations and engages with the content I create.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              My audience is primarily 15-45 years old, tech-savvy, and interested in travel, 
              technology, lifestyle products, and authentic experiences. When I partner with brands, 
              I focus on creating content that naturally integrates your message while maintaining the 
              authenticity my audience expects.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex items-center"
                >
                  <div className="mr-4 text-blue-500 dark:text-blue-400">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-800 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;