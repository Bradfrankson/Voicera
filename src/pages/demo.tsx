import React from 'react';
import Footer from '../components/Footer';

const DemoPage = () => {
  React.useEffect(() => {
    // Add Vapi widget script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Add Vapi widget element
    const widget = document.createElement('vapi-widget');
    widget.setAttribute('assistant-id', 'df3a5a66-8e43-45c7-b97d-028b6b43c5cc');
    widget.setAttribute('public-key', 'ecd55d27-28b4-4fa8-a9ce-4fbc7d742f59');
    widget.setAttribute('mode', 'voice');
    widget.setAttribute('theme', 'dark');
    widget.setAttribute('base-bg-color', '#111827');
    widget.setAttribute('accent-color', '#10B981');
    widget.setAttribute('cta-button-color', '#10B981');
    widget.setAttribute('cta-button-text-color', '#000000');
    widget.setAttribute('border-radius', 'large');
    widget.setAttribute('size', 'full');
    widget.setAttribute('position', 'bottom-right');
    widget.setAttribute('title', 'TALK WITH VOICERA AI');
    widget.setAttribute('start-button-text', 'Start');
    widget.setAttribute('end-button-text', 'End Call');
    widget.setAttribute('chat-first-message', 'Hey, I can help qualify leads and book appointments 24/7. How can I assist you today?');
    widget.setAttribute('chat-placeholder', 'Type your message...');
    widget.setAttribute('voice-show-transcript', 'true');
    widget.setAttribute('consent-required', 'true');
    widget.setAttribute('consent-title', 'Terms and conditions');
    widget.setAttribute('consent-content', 'By clicking \'Agree,\' and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.');
    widget.setAttribute('consent-storage-key', 'vapi_widget_consent');
    document.body.appendChild(widget);

    return () => {
      // Cleanup: remove widget when component unmounts
      const existingWidget = document.querySelector('vapi-widget');
      const existingScript = document.querySelector('script[src*="vapi-ai"]');
      if (existingWidget) existingWidget.remove();
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-900 border-b border-gray-800">
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
              <span className="text-xl font-bold text-white tracking-tight">VOICERA <span className="text-green-400">AI</span></span>
            </div>

            {/* Sticky CTA Button */}
            <a
              href="https://api.leadconnectorhq.com/widget/bookings/voicera-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full text-sm transition-all duration-300 transform hover:scale-105 tracking-wide"
            >
              BOOK DEMO NOW
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-14 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">AI-Powered Lead Qualification</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              <span className="text-gray-300 text-2xl md:text-3xl font-medium">(Business Owners)...</span>
              <br />
              <span className="text-white">Transform Your Business</span>
              <br />
              <span className="text-green-400">With an AI Receptionist That Never Sleeps ⚡</span>
              <br />
              <span className="text-green-400 text-2xl md:text-3xl">24/7 Lead Qualification & Customer Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto">
              Voicera AI answers calls, qualifies leads, books appointments, and handles customer service 24/7 — all while sounding completely human. Your business never sleeps.
            </p>
            
            {/* Video Section */}
            <div className="mb-8">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700" style={{ maxWidth: '400px', margin: '0 auto' }}>
                <div style={{ position: 'relative', paddingBottom: '177.78%', height: 0, overflow: 'hidden' }}>
                  <video
                    controls
                    preload="metadata"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    title="Voicera AI Demo Video"
                    onError={(e) => console.error('Video error:', e)}
                  >
                    <source src="/videos/Ladind Demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* CTA Button directly under video */}
            <div className="text-center mb-16">
              <a
                href="https://api.leadconnectorhq.com/widget/bookings/voicera-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 inline-flex items-center space-x-3"
              >
                <span>🚀 BOOK YOUR DEMO NOW</span>
              </a>
              <p className="text-gray-400 mt-3 text-sm">
                See how Voicera AI can transform your business in just 15 minutes
              </p>
            </div>

            {/* Marketing Message Section */}
            <div className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-gray-700/50" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div className="text-center">
                {/* Main Headline */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Implement AI Into Your Business To Scale to "10x" within "30" Days! 🤯
                </h2>
                
                {/* Call to Action */}
                <div className="text-green-400 font-semibold text-base animate-pulse">
                  ⚡ Schedule A Call With Us To Learn How We Do It ⚡
                </div>
              </div>
            </div>

            {/* Booking Calendar Section */}
            <div id="booking-calendar" className="mt-16">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/bookings/voicera-ai"
                  style={{
                    width: '100%',
                    height: '750px',
                    border: 'none',
                    display: 'block'
                  }}
                  id="voicera-ai-booking"
                  title="Book Demo Calendar"
                  allowFullScreen
                >
                </iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Legal Links */}
      <Footer />

      {/* Meta Pixel Tracking Comment */}
      {/* 
        TODO: Add Meta Pixel tracking code here
        <script>
          fbq('track', 'Lead');
        </script>
      */}
      
      {/* Meta Pixel Code */}
      <script dangerouslySetInnerHTML={{__html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1082535100636679');
        fbq('track', 'PageView');
      `}} />
      <noscript>
        <img height="1" width="1" style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=1082535100636679&ev=PageView&noscript=1"
        />
      </noscript>
      {/* End Meta Pixel Code */}
    </div>
  );
};

export default DemoPage; 