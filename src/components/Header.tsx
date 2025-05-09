import React from 'react';
import { Instagram, Youtube, Menu, X, Moon, Sun } from 'lucide-react';
import { Theme } from '../types/types';

interface HeaderProps {
  theme: Theme;
}

const Header: React.FC<HeaderProps> = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Pratik Jaware Patil
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#stats" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Stats
          </a>
          <a href="#collaborations" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Collaborations
          </a>
          <a href="#reviews" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Reviews
          </a>
          <a href="#gallery" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Gallery
          </a>
          <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Contact
          </a>
          <button 
            onClick={theme.toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme.isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://instagram.com/pratik.jaware.patil" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://www.youtube.com/channel/UCfxMmGt0QZbJYCwrdUANdYA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#stats" 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Stats
            </a>
            <a 
              href="#collaborations" 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Collaborations
            </a>
            <a 
              href="#reviews" 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </a>
            <a 
              href="#gallery" 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="flex items-center space-x-4">
                <a 
                  href="https://instagram.com/pratik.jaware.patil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCfxMmGt0QZbJYCwrdUANdYA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={28} />
                </a>
              </div>
              <button 
                onClick={theme.toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme.isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;