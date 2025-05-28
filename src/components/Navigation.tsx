
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className={`text-xl font-bold font-display transition-colors ${
              isScrolled ? 'text-emerald-800' : 'text-white'
            }`}>
              TravelHive
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors hover:text-emerald-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className={`transition-colors hover:text-emerald-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('tours')}
              className={`transition-colors hover:text-emerald-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Tours
            </button>
            <button 
              onClick={() => scrollToSection('stories')}
              className={`transition-colors hover:text-emerald-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Stories
            </button>
            <Button 
              onClick={() => scrollToSection('booking')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
