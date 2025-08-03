import React, { useState } from 'react';
import { Heart, Home, Building, Scale, Sparkles, Car } from 'lucide-react';

const IndustriesServed = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const industries = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'Medical practices & clinics',
      hoverCaption: 'Book qualified patients while you\'re with other clients',
      color: 'from-red-500 to-pink-500',
      glowColor: 'shadow-red-500/25',
      stats: '94% appointment show rate'
    },
    {
      name: 'Home Services',
      icon: Home,
      description: 'Contractors & repair services',
      hoverCaption: 'Capture leads 24/7 while you\'re on job sites',
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'shadow-blue-500/25',
      stats: '3x more qualified leads'
    },
    {
      name: 'Real Estate',
      icon: Building,
      description: 'Agents & property management',
      hoverCaption: 'Never miss a buyer or seller inquiry again',
      color: 'from-green-500 to-emerald-500',
      glowColor: 'shadow-green-500/25',
      stats: '67% faster lead response'
    },
    {
      name: 'Legal',
      icon: Scale,
      description: 'Law firms & attorneys',
      hoverCaption: 'Screen potential clients professionally 24/7',
      color: 'from-purple-500 to-indigo-500',
      glowColor: 'shadow-purple-500/25',
      stats: '89% consultation booking rate'
    },
    {
      name: 'Med Spa',
      icon: Sparkles,
      description: 'Beauty & wellness services',
      hoverCaption: 'Book qualified leads while you\'re off the clock',
      color: 'from-pink-500 to-rose-500',
      glowColor: 'shadow-pink-500/25',
      stats: '2.5x revenue per lead'
    },
    {
      name: 'Automotive',
      icon: Car,
      description: 'Dealerships & auto services',
      hoverCaption: 'Qualify buyers and schedule test drives instantly',
      color: 'from-orange-500 to-yellow-500',
      glowColor: 'shadow-orange-500/25',
      stats: '78% higher conversion rate'
    }
  ];

  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Trained for Your Industry
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-body">
            Our AI agents understand your business language and customer needs
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={industry.name}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative p-8 rounded-2xl border border-gray-700 bg-gray-900/50 backdrop-blur-sm transition-all duration-500 cursor-pointer ${
                  isHovered ? `shadow-2xl ${industry.glowColor} scale-105 border-transparent` : 'hover:border-gray-600'
                }`}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center transition-all duration-300 ${
                  isHovered ? 'scale-110 rotate-3' : ''
                }`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {industry.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="inline-block bg-gray-800 px-4 py-2 rounded-full mb-4">
                    <span className="text-green-400 text-sm font-semibold">{industry.stats}</span>
                  </div>

                  {/* Hover Caption */}
                  <div className={`transition-all duration-300 ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <p className="text-green-300 text-sm font-medium italic">
                      "{industry.hoverCaption}"
                    </p>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-500/30 transition-all duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`} />

                {/* Corner Accent */}
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Industry Benefits */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why Industry-Specific Training Matters
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Speaks Your Language</h4>
              <p className="text-gray-400 text-sm">
                Uses industry terminology and understands common customer questions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Handles Objections</h4>
              <p className="text-gray-400 text-sm">
                Trained on common industry objections and how to overcome them
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Qualifies Properly</h4>
              <p className="text-gray-400 text-sm">
                Asks the right questions to identify high-quality prospects
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Don't see your industry? We can train for any business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-400 text-black px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105">
              Get Custom Training
            </button>
            <button className="border-2 border-green-500 text-green-400 px-8 py-3 rounded-full hover:bg-green-500 hover:text-black transition-all duration-300">
              See Industry Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
