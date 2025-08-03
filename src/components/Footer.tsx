import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Linkedin, Twitter, Youtube, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Microphone base */}
                <rect x="35" y="70" width="30" height="8" rx="4" fill="url(#footerGradient)"/>
                <rect x="47" y="78" width="6" height="12" rx="3" fill="url(#footerGradient)"/>

                {/* Microphone body */}
                <rect x="40" y="20" width="20" height="50" rx="10" fill="url(#footerGradient)"/>

                {/* Sound waves */}
                <path d="M20 35 Q15 40 20 45" stroke="url(#footerGradient)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M80 35 Q85 40 80 45" stroke="url(#footerGradient)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M15 30 Q8 40 15 50" stroke="url(#footerGradient)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M85 30 Q92 40 85 50" stroke="url(#footerGradient)" strokeWidth="2" fill="none" strokeLinecap="round"/>

                <defs>
                  <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#00FF88'}}/>
                    <stop offset="100%" style={{stopColor: '#14B8A6'}}/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-2xl font-heading font-bold tracking-tight">VOICERA AI</span>
            </div>
            <p className="text-gray-400 mb-6 leading-body font-body">
              The leading AI voice agent platform helping local businesses capture, qualify,
              and convert leads with human-like conversations that maximize every opportunity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 tracking-tight">Product</h3>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-300 font-body">How It Works</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Features</a></li>
              <li><a href="#demo-form" className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Book Demo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-body">API Documentation</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 tracking-tight">Industries</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Law Firms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Roofing Companies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-body">MedSpas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Real Estate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Business Coaching</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 tracking-tight">Support</h3>
            <ul className="space-y-3">
              <li><a href="/login" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Client Login</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Training Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">System Status</a></li>
            </ul>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>support@voicera.ai</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>1-800-VOICERA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-white transition-colors duration-300">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>by Voicera AI</span>
            </div>
          </div>
          
          <div className="text-center mt-6 text-sm text-gray-400">
            <p>&copy; 2024 Voicera AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;