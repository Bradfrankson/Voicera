import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, Calendar, BarChart3, ArrowRight } from 'lucide-react';

const HowItWorksFlow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Phone,
      title: "Incoming Call",
      description: "Customer calls your business",
      detail: "Your Voicera AI Assistant answers instantly, 24/7"
    },
    {
      icon: MessageSquare,
      title: "AI Agent Conversation",
      description: "Natural conversation & qualification",
      detail: "Handles objections, qualifies leads, and gathers info naturally"
    },
    {
      icon: Calendar,
      title: "Booking Sent to CRM",
      description: "Appointment scheduled automatically",
      detail: "Appointments are synced to the client's calendar and CRM in real time"
    },
    {
      icon: BarChart3,
      title: "Voicera AI Dashboard",
      description: "Track performance & optimize",
      detail: "Clients view scheduled appointments, transcripts, and lead data directly from their branded Voicera AI dashboard."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-body">
            From first call to booked appointments — in under 24 hours.
          </p>
        </div>

        {/* Flow Visualization */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-between mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              
              return (
                <React.Fragment key={index}>
                  {/* Step */}
                  <div className="flex flex-col items-center text-center max-w-xs">
                    <div 
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
                        isActive 
                          ? 'bg-green-500 shadow-lg shadow-green-500/25 scale-110' 
                          : 'bg-gray-800 border border-gray-700'
                      }`}
                    >
                      <Icon className={`w-8 h-8 ${isActive ? 'text-black' : 'text-gray-400'}`} />
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                      isActive ? 'text-green-400' : 'text-white'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{step.description}</p>
                    <p className={`text-xs transition-opacity duration-300 ${
                      isActive ? 'text-green-300 opacity-100' : 'text-gray-500 opacity-70'
                    }`}>
                      {step.detail}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="flex-1 flex items-center justify-center mx-8">
                      <div className={`h-0.5 flex-1 transition-colors duration-500 ${
                        index < activeStep ? 'bg-green-500' : 'bg-gray-700'
                      }`} />
                      <ArrowRight className={`w-6 h-6 mx-2 transition-colors duration-500 ${
                        index < activeStep ? 'text-green-500' : 'text-gray-600'
                      }`} />
                      <div className={`h-0.5 flex-1 transition-colors duration-500 ${
                        index < activeStep ? 'bg-green-500' : 'bg-gray-700'
                      }`} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div 
                    className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      isActive 
                        ? 'bg-green-500 shadow-lg shadow-green-500/25' 
                        : 'bg-gray-800 border border-gray-700'
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${isActive ? 'text-black' : 'text-gray-400'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                      isActive ? 'text-green-400' : 'text-white'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">{step.description}</p>
                    <p className={`text-xs transition-opacity duration-300 ${
                      isActive ? 'text-green-300 opacity-100' : 'text-gray-500 opacity-70'
                    }`}>
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-12">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeStep 
                    ? 'bg-green-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to see it in action?</p>
          <a
            href="https://api.leadconnectorhq.com/widget/bookings/voicera-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-400 text-black px-8 py-3 rounded-full font-bold font-bold transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Book Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksFlow;
