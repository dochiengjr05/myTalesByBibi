import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Users, Info, ShoppingCart, Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home', icon: BookOpen },
  { to: '/about', label: 'About', icon: Info },
  { to: '/authors', label: 'Authors', icon: Users },
  { to: '/order', label: 'Order Now', icon: ShoppingCart, cta: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <nav className="bg-sky shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3" onClick={() => setMobileOpen(false)}>
            <img src="/images/logo.png" alt="Tales by Bibi" className="h-14 sm:h-16 w-auto" />
            <div>
              <h1 className="text-xl sm:text-2xl font-display font-bold text-white">
                Tales by Bibi
              </h1>
              <p className="text-xs text-white/80 italic hidden xs:block sm:block">
                Stories from the Heart of Africa
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ to, label, icon: Icon, cta }) => (
              <Link
                key={to}
                to={to}
                className={
                  cta
                    ? 'flex items-center space-x-2 bg-sunset hover:bg-sunset-dark text-white px-4 py-2 rounded-full transition-colors duration-200'
                    : 'flex items-center space-x-2 text-white hover:text-sunset transition-colors duration-200'
                }
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-sky-dark border-t border-white/20 px-4 pb-4 pt-2 shadow-inner">
          <div className="flex flex-col space-y-1">
            {navLinks.map(({ to, label, icon: Icon, cta }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={
                    cta
                      ? 'flex items-center justify-center space-x-2 bg-sunset hover:bg-sunset-dark text-white px-4 py-3 rounded-full transition-colors duration-200 mt-2 font-semibold'
                      : `flex items-center space-x-3 text-white px-4 py-3 rounded-lg transition-colors duration-200 ${
                          isActive ? 'bg-white/20' : 'hover:bg-white/10'
                        }`
                  }
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span className="font-medium text-lg">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tap-outside overlay (below nav, above page content) */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="md:hidden fixed inset-0 top-20 bg-black/30 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
}
