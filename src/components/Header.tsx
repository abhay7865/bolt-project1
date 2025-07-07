import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white transition-colors duration-300 font-centaur text-glow">
              Abhay Mishra
            </h1>
            <p className="text-sm text-gray-300 transition-colors duration-300">
              Gen AI+Ops Engineer
            </p>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-[#089cf1] transition-colors duration-300 hover:text-glow">
              About
            </a>
            <a href="#skills" className="text-gray-300 hover:text-[#089cf1] transition-colors duration-300 hover:text-glow">
              Skills
            </a>
            <a href="#experience" className="text-gray-300 hover:text-[#089cf1] transition-colors duration-300 hover:text-glow">
              Experience
            </a>
            <a href="#contact" className="text-gray-300 hover:text-[#089cf1] transition-colors duration-300 hover:text-glow">
              Contact
            </a>
          </nav>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full glass-card hover:glass-card-hover transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-300" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;