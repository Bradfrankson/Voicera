import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);



  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900 border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center space-x-3">
            {/* Voicera AI Logo */}
            <div className="relative">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Microphone base */}
                <rect x="35" y="70" width="30" height="8" rx="4" fill="url(#gradient)"/>
                <rect x="47" y="78" width="6" height="12" rx="3" fill="url(#gradient)"/>

                {/* Microphone body */}
                <rect x="40" y="20" width="20" height="50" rx="10" fill="url(#gradient)"/>

                {/* Sound waves */}
                <path d="M20 35 Q15 40 20 45" stroke="url(#gradient)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M80 35 Q85 40 80 45" stroke="url(#gradient)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M15 30 Q8 40 15 50" stroke="url(#gradient)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M85 30 Q92 40 85 50" stroke="url(#gradient)" strokeWidth="2" fill="none" strokeLinecap="round"/>

                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#00FF88'}}/>
                    <stop offset="100%" style={{stopColor: '#14B8A6'}}/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-xl font-heading font-bold text-white tracking-tight">VOICERA <span className="text-green-400">AI</span></span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-300 hover:text-white transition-colors font-heading font-medium tracking-tight text-sm">HOW IT WORKS</button>
            <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white transition-colors font-heading font-medium tracking-tight text-sm">FEATURES</button>
          </nav>

          {/* CTA Button - External Form Link */}
          <div className="hidden md:block">
            <a
              href="https://api.leadconnectorhq.com/widget/bookings/voicera-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full text-sm transition-all duration-300 transform hover:scale-105 tracking-wide"
            >
              GET DEMO
            </a>
          </div>



          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Clean line under header like Vapi */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-lg border-t border-gray-700">
            <nav className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-300 hover:text-green-400 text-left">How It Works</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-green-400 text-left">Features</button>

              {/* Mobile Demo Button */}
              <a
                href="https://api.leadconnectorhq.com/widget/bookings/voicera-ai"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-6 rounded-full text-sm transition-all duration-300 text-center tracking-wide"
              >
                GET DEMO
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;