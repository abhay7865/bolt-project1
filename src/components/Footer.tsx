import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-card py-12 border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 font-centaur text-white text-glow">Abhay Mishra</h3>
            <p className="text-gray-400">Engineering a future of AI</p>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 flex items-center gap-2">
                © {currentYear} Abhay Mishra. Made with <Heart className="w-4 h-4 text-red-500" /> and <Code className="w-4 h-4 text-[#089cf1]" />
              </p>
              <div className="flex gap-6">
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</a>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">Experience</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;