import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import SocialProof from './components/SocialProof';
import HowItWorksFlow from './components/HowItWorksFlow';
import DashboardPreview from './components/DashboardPreview';
import IndustriesServed from './components/IndustriesServed';
import WhatsIncluded from './components/WhatsIncluded';
import Features from './components/Features';
import Footer from './components/Footer';
import SupportChatWidget from './components/SupportChatWidget';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import DemoPage from './pages/demo';
import ThankYouPage from './pages/thank-you';

// Main landing page component
const LandingPage = () => {
  React.useEffect(() => {
    // Add Vapi widget script only on main page
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

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <StatsSection />
      <SocialProof />
      <HowItWorksFlow />
      <DashboardPreview />
      <IndustriesServed />
      <WhatsIncluded />
      <Features />
      <Footer />
      <SupportChatWidget />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </Router>
  );
}

export default App;