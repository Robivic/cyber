import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter, Send, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { churchInfo, mockStorage } from '../data/mockData';
import { useToast } from '../hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSignup = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      mockStorage.addNewsletterSignup(email);
      toast({
        title: "Newsletter Subscription Successful!",
        description: "Thank you for subscribing to our newsletter. You'll receive updates about our services and events.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    { icon: Facebook, url: churchInfo.socialMedia.facebook, color: 'hover:text-blue-600' },
    { icon: Instagram, url: churchInfo.socialMedia.instagram, color: 'hover:text-pink-600' },
    { icon: Youtube, url: churchInfo.socialMedia.youtube, color: 'hover:text-red-600' },
    { icon: Twitter, url: churchInfo.socialMedia.twitter, color: 'hover:text-blue-400' }
  ];

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Ministries', path: '/ministries' },
    { label: 'Events', path: '/events' },
    { label: 'Connect', path: '/connect' },
    { label: 'Visit Us', path: '/visit' },
    { label: 'Give', path: '/give' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Church Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{churchInfo.name}</h3>
                <p className="text-blue-200 text-sm">{churchInfo.location}</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              {churchInfo.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{churchInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-sm">{churchInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{churchInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-200">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-200">Service Times</h4>
            <div className="space-y-4">
              {churchInfo.servicesTimes.map((service, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="font-medium text-sm">{service.day}</span>
                  </div>
                  <p className="text-gray-300 text-xs ml-6">{service.time}</p>
                  <p className="text-blue-200 text-xs ml-6">{service.type}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-200">Stay Connected</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for updates on events, sermons, and church news.
            </p>
            
            <form onSubmit={handleNewsletterSignup} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium py-2 rounded-lg transition-all duration-300 group"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Subscribing...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Subscribe
                  </div>
                )}
              </Button>
            </form>

            {/* Social Media Links */}
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-3 text-gray-300">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 {churchInfo.name}. All rights reserved. Built with ❤️ for our church family.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;