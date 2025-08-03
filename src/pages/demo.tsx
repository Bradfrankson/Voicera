import React from 'react';

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
    widget.setAttribute('public-key', '127ff63b-ae53-45d6-9b0d-35f2485ce6eb');
    widget.setAttribute('assistant-id', '7dcfebd6-7d7d-4a91-9e31-aac733c04474');
    widget.setAttribute('mode', 'voice');
    widget.setAttribute('theme', 'light');
    widget.setAttribute('base-bg-color', '#ffffff');
    widget.setAttribute('accent-color', '#0B0F1A');
    widget.setAttribute('cta-button-color', '#ffffff');
    widget.setAttribute('cta-button-text-color', '#4ac0bc');
    widget.setAttribute('border-radius', 'large');
    widget.setAttribute('size', 'full');
    widget.setAttribute('position', 'bottom-right');
    widget.setAttribute('title', 'TALK WITH VOICERA AI');
    widget.setAttribute('start-button-text', 'Start');
    widget.setAttribute('end-button-text', 'End Call');
    widget.setAttribute('chat-first-message', 'Hey, How can I help you today?');
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
  const scrollToCalendar = () => {
    const calendarElement = document.getElementById('booking-calendar');
    if (calendarElement) {
      calendarElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
            <button
              onClick={scrollToCalendar}
              className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full text-sm transition-all duration-300 transform hover:scale-105 tracking-wide"
            >
              BOOK DEMO NOW
            </button>
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
            <div className="mb-16">
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
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/3ZLEn4Fk2exmjVVfEw9L" 
                  style={{ 
                    width: '100%', 
                    height: '600px', 
                    border: 'none',
                    display: 'block'
                  }} 
                  scrolling="auto" 
                  id="3ZLEn4Fk2exmjVVfEw9L_1753804734013"
                  title="Book Demo Calendar"
                  allowFullScreen
                  frameBorder="0"
                >
                </iframe>
              </div>
              <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
            </div>

            {/* Alternative Contact Form */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="text-center mb-6">
                <div className="text-gray-300 text-xl font-bold mb-2">
                  💚 Want Us to Reach You Instead? 💚
                </div>
                <div className="text-gray-400 text-sm">
                  Drop your info below and we'll contact you within 24 hours! ✨
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
                <div style={{width: '100%'}}>
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/GYxrIQCfXXPx0V0cFpwF"
                    style={{width: '100%', minHeight: '600px', height: '752px', border: 'none', borderRadius: '8px', background: 'transparent'}}
                    id="inline-GYxrIQCfXXPx0V0cFpwF"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Form 1"
                    data-height="752"
                    data-layout-iframe-id="inline-GYxrIQCfXXPx0V0cFpwF"
                    data-form-id="GYxrIQCfXXPx0V0cFpwF"
                    title="Form 1"
                    allowTransparency={true}
                  ></iframe>
                </div>
              </div>
              <script src="https://link.msgsndr.com/js/form_embed.js"></script>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Voicera AI. All rights reserved.
          </p>
        </div>
      </footer>

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