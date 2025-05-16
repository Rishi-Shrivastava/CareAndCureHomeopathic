import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 bg-primary-500 rounded-md flex items-center justify-center mr-2">
              <span className="text-white font-bold">C&C</span>
            </div>
            <span className="text-xl font-semibold text-primary-600">CareAndCure</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/' 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/about' 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              About
            </Link>
            {!isAuthenticated ? (
              <>
                <Link 
                  to="/login" 
                  className="btn btn-outline"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="btn btn-primary"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 text-sm font-medium text-neutral-700 hover:text-primary-600 focus:outline-none"
                  onClick={toggleProfileMenu}
                >
                  {user?.profileImage ? (
                    <img src={user.profileImage} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <User size={16} className="text-primary-600" />
                    </div>
                  )}
                  <span>{user?.name}</span>
                  <ChevronDown size={16} />
                </button>
                
                {isProfileMenuOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-fadeIn"
                    onBlur={() => setIsProfileMenuOpen(false)}
                  >
                    <Link 
                      to="/doctor-profile" 
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      Your Profile
                    </Link>
                    <Link 
                      to="/dashboard" 
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      Dashboard
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 flex items-center"
                    >
                      <LogOut size={16} className="mr-2" /> 
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-neutral-500 hover:text-primary-600 hover:bg-primary-50 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 animate-slideUp">
          <nav className="flex flex-col space-y-2">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/' 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/about' 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            {isAuthenticated && (
              <>
                <Link 
                  to="/dashboard" 
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === '/dashboard' 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/doctor-profile" 
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === '/doctor-profile' 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Your Profile
                </Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 text-left"
                >
                  Logout
                </button>
              </>
            )}
            {!isAuthenticated && (
              <div className="flex flex-col space-y-2 pt-2">
                <Link 
                  to="/login" 
                  className="btn btn-outline w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;