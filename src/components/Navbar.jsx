import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 border-b-2 border-saffron-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-display font-bold text-deep-purple">
            Vedic Gyan
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-temple-700 hover:text-holy-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-holy-red text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors border-2 border-marigold">
              Book Pandit Ji
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-white text-saffron-600 hover:text-deep-purple transition-colors p-2 rounded-lg hover:bg-saffron-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-temple-700 hover:text-holy-red transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-holy-red text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors border-2 border-marigold w-full">
                Book Pandit Ji
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar; 