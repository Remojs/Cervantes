import { useState } from 'react';
import logo from '../assets/icon.png';

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50 h-16"> {/* Altura fija de 64px */}
      <nav className="container mx-auto px-6 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            alt="Logo Cervantes" 
            className="h-16 w-16 cursor-pointer" 
            src={logo} 
            onClick={() => scrollToSection('hero')} 
          />
        </div>

        {/* Navigation Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            className="text-gray-600 hover:text-blue-800 transition-colors font-medium"
            onClick={() => scrollToSection('servicios')}
          >
            Servicios
          </button>
          <button 
            className="text-gray-600 hover:text-blue-800 transition-colors font-medium"
            onClick={() => scrollToSection('alianzas')}
          >
            Alianzas
          </button>
          <button 
            className="text-gray-600 hover:text-blue-800 transition-colors font-medium"
            onClick={() => scrollToSection('nosotros')}
          >
            Nosotros
          </button>
          <button 
            className="text-gray-600 hover:text-blue-800 transition-colors font-medium"
            onClick={() => scrollToSection('contacto')}
          >
            Contacto
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="text-gray-600 focus:outline-none hover:text-blue-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <button 
              className="block w-full text-left text-gray-600 hover:text-blue-800 transition-colors font-medium"
              onClick={() => {
                scrollToSection('servicios');
                setIsMenuOpen(false);
              }}
            >
              Servicios
            </button>
            <button 
              className="block w-full text-left text-gray-600 hover:text-blue-800 transition-colors font-medium"
              onClick={() => {
                scrollToSection('alianzas');
                setIsMenuOpen(false);
              }}
            >
              Alianzas
            </button>
            <button 
              className="block w-full text-left text-gray-600 hover:text-blue-800 transition-colors font-medium"
              onClick={() => {
                scrollToSection('nosotros');
                setIsMenuOpen(false);
              }}
            >
              Nosotros
            </button>
            <button 
              className="block w-full text-left text-gray-600 hover:text-blue-800 transition-colors font-medium"
              onClick={() => {
                scrollToSection('contacto');
                setIsMenuOpen(false);
              }}
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
