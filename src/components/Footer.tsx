import React from 'react';
import { Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Pratik Jaware Patil</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Lifestyle content creator and digital influencer specializing in travel, tech reviews, and daily vlogs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/pratik.jaware.patil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={42} />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCfxMmGt0QZbJYCwrdUANdYA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={42} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#stats" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  My Stats
                </a>
              </li>
              <li>
                <a 
                  href="#collaborations" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Past Collaborations
                </a>
              </li>
              <li>
                <a 
                  href="#reviews" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Client Reviews
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Contact for Collaborations
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Contact</h3>
            <ul className="space-y-2">
            <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
  <Mail size={18} />
  <a 
    href="mailto:pratikjawareofficial@gmail.com" 
    className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
  >
    pratikjawareofficial@gmail.com
  </a>
</li>

              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Phone size={18} />
                <span>+91 **********</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {currentYear} Pratik Jaware Patil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;