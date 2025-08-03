import React from 'react';
import { Scale, Home, Syringe, Building, Wrench, Droplets, Smile, Car } from 'lucide-react';

const SocialProof = () => {
  const industries = [
    { name: 'Law Firms', icon: Scale, description: 'Client intake & consultation booking', color: 'blue' },
    { name: 'Roofing', icon: Home, description: 'Lead qualification & inspection scheduling', color: 'orange' },
    { name: 'MedSpa', icon: Syringe, description: 'Appointment booking & treatment consultation', color: 'pink' },
    { name: 'Real Estate', icon: Building, description: 'Property inquiries & showing coordination', color: 'green' },
    { name: 'HVAC', icon: Wrench, description: 'Service calls & maintenance scheduling', color: 'purple' },
    { name: 'Plumbing', icon: Droplets, description: 'Emergency calls & repair booking', color: 'cyan' },
    { name: 'Dental', icon: Smile, description: 'Appointment scheduling & patient intake', color: 'yellow' },
    { name: 'Auto Services', icon: Car, description: 'Service booking & repair estimates', color: 'red' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Industries That Work With Voicera AI
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Agent has been trained to understand the unique needs of different local businesses.
            See how voice AI can transform lead handling in your industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className={`w-10 h-10 bg-${industry.color}-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-${industry.color}-500/30 transition-colors duration-300`}>
                  <IconComponent className={`h-5 w-5 text-${industry.color}-400`} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
            <div className="text-gray-300 text-sm">Always Available</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-green-400 mb-1">Human-like</div>
            <div className="text-gray-300 text-sm">Natural Conversations</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-green-400 mb-1">Instant</div>
            <div className="text-gray-300 text-sm">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;