import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, X, Heart, Home, Users, Calendar, MapPin, DollarSign, Info } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/ministries', label: 'Ministries', icon: Users },
    { path: '/events', label: 'Events & Sermons', icon: Calendar },
    { path: '/connect', label: 'Connect & Grow', icon: Heart },
    { path: '/visit', label: 'Visit Us', icon: MapPin },
    { path: '/give', label: 'Give', icon: DollarSign }
  ];

  const NavLink = ({ item, mobile = false }) => {
    const Icon = item.icon;
    const isActive = location.pathname === item.path;
    
    return (
      <Link
        to={item.path}
        onClick={() => mobile && setIsOpen(false)}
        className={`
          group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
          ${isActive 
            ? 'bg-blue-100 text-blue-700 shadow-md' 
            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
          }
          ${mobile ? 'w-full text-left' : ''}
        `}
      >
        <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110`} />
        <span className="font-medium">{item.label}</span>
      </Link>
    );
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100' 
        : 'bg-white/90 backdrop-blur-sm'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Believers Church
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Two Rivers</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="lg:hidden p-2 hover:bg-blue-50"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900">Believers Church</h2>
                    <p className="text-xs text-gray-500">Two Rivers</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                {navItems.map((item) => (
                  <NavLink key={item.path} item={item} mobile />
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  Come as you are, leave transformed
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;