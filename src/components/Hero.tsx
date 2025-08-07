import React, { useEffect, useState, useMemo } from 'react';
import { Mic, Calendar } from 'lucide-react';

const VoiceWaveform = () => {
  const colors = [
    '#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444',
    '#06B6D4', '#EC4899', '#84CC16', '#F97316', '#6366F1',
    '#14B8A6', '#F472B6', '#A78BFA', '#34D399', '#60A5FA'
  ];

  return (
    <div className="flex items-center justify-center space-x-1 mb-8">
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          className="rounded-full opacity-80"
          style={{
            width: '4px',
            height: `${Math.random() * 80 + 20}px`,
            backgroundColor: colors[i % colors.length],
            animation: `waveformPulse ${Math.random() * 3 + 1}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
};

const InteractiveConversation = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  const scenarios = useMemo(() => [
    {
      title: "Roofing Lead Qualification",
      messages: [
        { type: 'agent', text: "Hi! I'm Auri from RoofTech Solutions. I'd love to help you get that roof inspection scheduled. What's the best time for you this week?" },
        { type: 'customer', text: "How about Thursday afternoon?" },
        { type: 'agent', text: "Perfect! I have Thursday at 2 PM available. Can I get your address for the inspection?" },
        { type: 'customer', text: "Sure, it's 123 Oak Street" },
        { type: 'success', text: "✅ Lead qualified & appointment booked for Thursday 2pm" }
      ]
    },
    {
      title: "Real Estate Follow-up",
      messages: [
        { type: 'agent', text: "Hello! This is Auri calling about the property viewing you scheduled. Are you still interested in seeing the downtown condo?" },
        { type: 'customer', text: "Yes! When can we schedule it?" },
        { type: 'agent', text: "Great! I have availability tomorrow at 3 PM or Friday at 10 AM. Which works better?" },
        { type: 'customer', text: "Tomorrow at 3 PM sounds perfect" },
        { type: 'success', text: "✅ Property viewing confirmed for tomorrow 3pm" }
      ]
    },
    {
      title: "Medical Appointment Booking",
      messages: [
        { type: 'agent', text: "Hi, this is Auri from HealthCare Plus. I'm calling to help schedule your consultation with Dr. Smith. Do you have a preferred day?" },
        { type: 'customer', text: "I'm flexible, what do you have available?" },
        { type: 'agent', text: "I can offer you Monday at 9 AM or Wednesday at 2 PM. Both are with Dr. Smith." },
        { type: 'customer', text: "Monday at 9 AM works great" },
        { type: 'success', text: "✅ Medical consultation booked for Monday 9am" }
      ]
    }
  ], []);

  useEffect(() => {
    const typeMessage = async (text: string) => {
      setDisplayedText('');
      setIsTyping(true);

      for (let i = 0; i <= text.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 30));
        setDisplayedText(text.slice(0, i));
      }

      setIsTyping(false);
      await new Promise(resolve => setTimeout(resolve, 1500));
    };

    const runConversation = async () => {
      const scenario = scenarios[currentScenario];

      for (let i = 0; i < scenario.messages.length; i++) {
        setCurrentMessage(i);
        await typeMessage(scenario.messages[i].text);
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      await new Promise(resolve => setTimeout(resolve, 3000));
      setCurrentScenario((prev) => (prev + 1) % scenarios.length);
      setCurrentMessage(0);
    };

    runConversation();
  }, [currentScenario, scenarios]);

  const currentScenarioData = scenarios[currentScenario];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-400 font-semibold">AI Agent</span>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <div className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold">
          Live Now!
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-sm text-gray-400 mb-2">{currentScenarioData.title}</div>

        {currentScenarioData.messages.slice(0, currentMessage + 1).map((msg, index) => (
          <div key={index} className={`flex ${msg.type === 'customer' ? 'justify-end' : 'justify-start'}`}>
            {msg.type === 'success' ? (
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold w-full text-center">
                {index === currentMessage ? displayedText : msg.text}
                {index === currentMessage && isTyping && <span className="animate-pulse">|</span>}
              </div>
            ) : (
              <div className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.type === 'agent'
                  ? 'bg-gray-700 text-white'
                  : 'bg-green-600 text-white'
              }`}>
                <div className="text-xs font-semibold mb-1 opacity-75">
                  {msg.type === 'agent' ? '🤖 Agent:' : '👤 Customer:'}
                </div>
                <div className="text-sm">
                  {index === currentMessage ? displayedText : msg.text}
                  {index === currentMessage && isTyping && <span className="animate-pulse">|</span>}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTalkToVoicera = () => {
    // Use the Voicera AI widget from index.html instead of creating a new instance
    // This prevents conflicts and uses the properly configured widget
    const vapiWidget = document.querySelector('vapi-widget');
    if (vapiWidget) {
      // Trigger the widget to open/start
      const event = new CustomEvent('vapi-widget-open');
      vapiWidget.dispatchEvent(event);
    } else {
      console.warn('Voicera AI widget not found. Please ensure the widget is properly loaded.');
    }
  };

  const getButtonText = () => {
    if (isHovered) return 'GIVE IT A TRY';
    return 'TALK TO VOICERA AI';
  };

  const getButtonStyles = () => {
    if (isHovered) {
      return 'bg-white text-black border-2 border-white';
    }
    return 'bg-green-500 hover:bg-green-400 text-black border-2 border-green-500';
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden pt-32">
      {/* Dots Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-heading tracking-tight mb-6">
            Capture & Convert More
            <span className="text-green-400"> Leads</span> with an AI Voice Agent That Sounds Human
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-body font-body">
            Trained to speak your industry's language. Qualifies leads, handles objections, and books appointments — 24/7.
          </p>
        </div>

        {/* Animated Waveform */}
        <VoiceWaveform />

        {/* CTA Buttons */}
        <div className="space-y-4 mb-12">
          {/* Primary CTA */}
          <div className="flex flex-col items-center space-y-2">
            <button
              onClick={handleTalkToVoicera}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`demo-call-button group px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 flex items-center justify-center space-x-4 mx-auto ${getButtonStyles()}`}
            >
              <Mic className="h-6 w-6 group-hover:animate-pulse" />
              <span>{getButtonText()}</span>
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-black rounded-full animate-pulse"></div>
                <div className="w-1 h-6 bg-black rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                <div className="w-1 h-4 bg-black rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1 h-5 bg-black rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              </div>
            </button>
            <p className="text-sm text-gray-400 font-body">
              Experience how your AI agent will qualify leads 24/7
            </p>
          </div>

          {/* Secondary CTA */}
          <a
            href="https://api.leadconnectorhq.com/widget/bookings/voicera-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-green-500 text-green-400 px-6 py-3 rounded-full hover:bg-green-500 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-base font-semibold mx-auto"
          >
            <Calendar className="h-4 w-4" />
            <span>Book Your Strategy Call</span>
          </a>
        </div>

        {/* Interactive Conversation Demo */}
        <div className="mb-12">
          <InteractiveConversation />
        </div>

        {/* Trust Indicators */}
        <div className="text-gray-400 mb-8 font-ui text-xs tracking-ui">
          ✅ No setup fees • ✅ Easy integration • ✅ 24/7 support
        </div>
      </div>



      <style jsx>{`
        @keyframes waveformPulse {
          0% { transform: scaleY(1); opacity: 0.8; }
          100% { transform: scaleY(0.3); opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};

export default Hero;