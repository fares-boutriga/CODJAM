
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'AI Data Hub', href: '#data-hub' },
    { name: 'Datasets', href: '#datasets' },
    { name: 'Collecte de Données', href: '/collecte-de-donnees' },
    { name: 'Annotation', href: '#annotation' },
    { name: 'Recrutement', href: '#recruitment' },
    { name: 'À propos', href: '#about' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/81fed320-7eda-419c-a39c-42c56574bd1a.png" 
              alt="CODJAM" 
              className="h-10 w-auto lg:h-12"
            />
            <span className="text-2xl font-bold text-codjam-navy-500 font-inter">CODJAM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-codjam-navy-600 hover:text-codjam-teal-500 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-codjam-teal-500 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-codjam-navy-600 hover:text-codjam-teal-500 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-codjam-teal-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
              )
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-codjam-navy-600 hover:text-codjam-teal-500">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-codjam-navy-600 hover:text-codjam-teal-500">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-codjam-teal-500 text-codjam-teal-500 hover:bg-codjam-teal-50">
              Connexion
            </Button>
            <Button className="bg-codjam-orange-500 hover:bg-codjam-orange-600 text-white">
              Commencer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-codjam-navy-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="py-4">
              {navigationItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-3 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="flex items-center space-x-3 px-4 pt-4 border-t border-gray-200 mt-4">
                <Button variant="outline" className="flex-1 border-codjam-teal-500 text-codjam-teal-500">
                  Connexion
                </Button>
                <Button className="flex-1 bg-codjam-orange-500 hover:bg-codjam-orange-600 text-white">
                  Commencer
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
