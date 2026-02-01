import { Link } from 'react-router-dom';
import { BookOpen, Users, Info, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-sky shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="Tales by Bibi" className="h-16 w-auto" />
            <div>
              <h1 className="text-2xl font-display font-bold text-white">
                Tales by Bibi
              </h1>
              <p className="text-xs text-white/80 italic">Stories from the Heart of Africa</p>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white hover:text-sunset transition-colors duration-200"
            >
              <BookOpen className="h-5 w-5" />
              <span className="font-medium">Home</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 text-white hover:text-sunset transition-colors duration-200"
            >
              <Info className="h-5 w-5" />
              <span className="font-medium">About</span>
            </Link>
            <Link
              to="/authors"
              className="flex items-center space-x-2 text-white hover:text-sunset transition-colors duration-200"
            >
              <Users className="h-5 w-5" />
              <span className="font-medium">Authors</span>
            </Link>
            <Link
              to="/order"
              className="flex items-center space-x-2 bg-sunset hover:bg-sunset-dark text-white px-4 py-2 rounded-full transition-colors duration-200"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="font-medium">Order Now</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
