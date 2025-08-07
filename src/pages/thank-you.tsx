import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';

const ThankYouPage = () => {

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Meta Pixel Code in Head */}
      <Helmet>
        {/* Meta Pixel Code */}
        <script>
          {`
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
fbq('track', 'Lead');
          `}
        </script>
        {/* End Meta Pixel Code */}
      </Helmet>

      {/* Noscript fallback after opening body tag */}
      <noscript>
        <img height="1" width="1" style={{display: 'none'}}
        src="https://www.facebook.com/tr?id=1082535100636679&ev=PageView&noscript=1" />
      </noscript>

      {/* Header */}
      <header className="bg-black border-b border-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {/* Voicera AI Logo */}
              <div className="relative">
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="35" y="70" width="30" height="8" rx="4" fill="url(#gradient)"/>
                  <rect x="47" y="78" width="6" height="12" rx="3" fill="url(#gradient)"/>
                  <rect x="40" y="20" width="20" height="50" rx="10" fill="url(#gradient)"/>
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Success Message */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            You're Booked! 🎉
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your call is scheduled. Follow these 3 steps to get the most out of your session.
          </p>
        </div>

        {/* Step 1: Watch This Video Before Your Call */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              <span className="sm:hidden">👇 </span>Step 1: Watch This Video Before Your Call<span className="sm:hidden"> 👇</span>
            </h2>
            <p className="text-xl text-white font-semibold">
              What we will cover in this video:
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <video 
                  controls
                  preload="metadata"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="Pre-Call Demo Video"
                  onError={(e) => console.error('Video error:', e)}
                  onLoadStart={() => console.log('Video loading started')}
                  onLoadedData={() => console.log('Video data loaded')}
                  onCanPlay={() => console.log('Video can play')}
                >
                  <source src="/videos/Thank You message.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Confirm Your Call */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Step 2: Confirm Your Call
            </h2>
            <p className="text-xl text-white font-semibold">
              You'll receive a calendar invitation email. Click <span className="text-yellow-400 font-bold">YES</span> to confirm your attendance.
            </p>
          </div>
          
          <div className="flex justify-center">
            {/* Clean Calendar Confirmation */}
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 max-w-lg w-full">
              {/* Email Header */}
              <div className="bg-gray-50 border-b border-gray-200 p-4 rounded-t-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">Calendar Invitation</div>
                    <div className="text-gray-500 text-sm">from Voicera AI Team</div>
                  </div>
                </div>
              </div>
              
              {/* Event Details */}
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  {/* Calendar Icon */}
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  {/* Event Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Voicera AI Demo Call</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        Today, 2:00 PM - 3:00 PM
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Video Call (Zoom/Teams)
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Simple Confirmation Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                    Yes
                  </button>
                  <button className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                    Maybe
                  </button>
                  <button className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                    No
                  </button>
                </div>
                
                <div className="mt-4 text-center">
                  <div className="text-blue-600 font-medium text-sm">→ Click "Yes" to confirm your call</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Watch These Videos Before Your Call */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Step 3: Watch These Videos Before Your Call
            </h2>
            <p className="text-xl text-white font-semibold">
              These videos will help you get the most out of your call and address common questions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Video 1 */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">
                How does Voicera AI actually help me get more customers?
              </h3>
              <div className="relative rounded-lg overflow-hidden shadow-lg mb-4">
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                  <video 
                    controls
                    preload="metadata"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    title="How Voicera AI Helps Get More Customers"
                    onError={(e) => console.error('Video error:', e)}
                  >
                    <source src="/videos/How does Voicera AI actually help me get more customers.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            
            {/* Video 2 */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">
                What makes this better than just hiring a virtual assistant or call service?
              </h3>
              <div className="relative rounded-lg overflow-hidden shadow-lg mb-4">
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                  <video 
                    controls
                    preload="metadata"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    title="Voicera AI vs Virtual Assistant"
                    onError={(e) => console.error('Video error:', e)}
                  >
                    <source src="/videos/What makes this better than just hiring a virtual assistant or call service (1).mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            
            {/* Video 3 */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">
                How does the AI know what to say or how to help?
              </h3>
              <div className="relative rounded-lg overflow-hidden shadow-lg mb-4">
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                  <video 
                    controls
                    preload="metadata"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    title="How AI Knows What to Say"
                    onError={(e) => console.error('Video error:', e)}
                  >
                    <source src="/videos/How does the AI know what to say or how to help.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mb-12">
          <div className="bg-yellow-400 text-black rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-6">
              Your call is just around the corner. Make sure you've completed all 3 steps above to get maximum value.
            </p>
            <Link
              to="/"
              className="inline-block bg-black text-yellow-400 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 tracking-wide"
            >
              Back to Homepage
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center text-gray-400">
          <p>Questions? Contact us at <a href="mailto:support@voicera.ai" className="text-yellow-400 hover:text-yellow-300">support@voicera.ai</a></p>
        </div>
      </main>

      {/* Footer with Legal Links */}
      <Footer />
    </div>
  );
};

export default ThankYouPage; 