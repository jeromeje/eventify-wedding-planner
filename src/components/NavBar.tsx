
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-medium tracking-tight text-foreground transition-opacity duration-300 hover:opacity-80"
        >
          Eventify
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <NavLink to="/" isActive={location.pathname === '/'}>Home</NavLink>
          <NavLink to="/venues" isActive={location.pathname === '/venues'}>Venues</NavLink>
          <NavLink to="/about" isActive={location.pathname === '/about'}>About</NavLink>
          <NavLink to="/contact" isActive={location.pathname === '/contact'}>Contact</NavLink>
        </nav>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-5">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-down">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="py-2 text-foreground font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/venues" 
              className="py-2 text-foreground font-medium hover:text-primary transition-colors"
            >
              Venues
            </Link>
            <Link 
              to="/about" 
              className="py-2 text-foreground font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="py-2 text-foreground font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-3 pt-4 border-t">
              <Link
                to="/login"
                className="py-2 text-foreground font-medium hover:text-primary transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="py-2 px-4 text-center font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Helper component for navigation links
const NavLink = ({ 
  to, 
  children, 
  isActive 
}: { 
  to: string; 
  children: React.ReactNode; 
  isActive: boolean 
}) => {
  return (
    <Link
      to={to}
      className={`relative px-1 py-2 font-medium transition-colors hover:text-primary ${
        isActive ? 'text-primary' : 'text-foreground'
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform" />
      )}
    </Link>
  );
};

export default NavBar;
