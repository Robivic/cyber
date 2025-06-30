import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { churchInfo } from '../data/mockData';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1920&h=1080&fit=crop"
          alt="Church Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-green-800/60"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-white/90 text-sm font-medium">Welcome to our church family</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
              <span className="block transform transition-transform duration-700 hover:scale-105">
                {churchInfo.name}
              </span>
            </h1>
            <div className="flex items-center justify-center space-x-2 text-xl text-blue-200">
              <MapPin className="w-5 h-5" />
              <span>{churchInfo.location}</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light max-w-4xl mx-auto leading-relaxed">
            {churchInfo.tagline}
          </p>

          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            {churchInfo.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link to="/visit">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 group"
              >
                Plan Your Visit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg font-semibold rounded-full group"
              onClick={() => {
                const element = document.getElementById('latest-sermon');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Latest Sermon
            </Button>
          </div>

          {/* Service Times Quick Info */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {churchInfo.servicesTimes.slice(0, 2).map((service, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-blue-200 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-white font-semibold text-sm">{service.day}</h3>
                <p className="text-blue-200 text-xs">{service.time}</p>
                <p className="text-white/70 text-xs mt-1">{service.type}</p>
              </div>
            ))}
            
            <div className="sm:col-span-2 lg:col-span-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <h3 className="text-white font-semibold text-center mb-2">All Are Welcome!</h3>
              <p className="text-white/80 text-sm text-center">
                Join us for worship, fellowship, and spiritual growth in a loving community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;