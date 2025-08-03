import React, { useState } from 'react';
import { CheckCircle, Bot, Calendar, BarChart3, Headphones, Clock, Shield, DollarSign, TrendingDown } from 'lucide-react';

const WhatsIncluded = () => {
  const [showComparison, setShowComparison] = useState(false);

  const includedFeatures = [
    {
      icon: Bot,
      title: 'AI voice agent trained for your niche',
      description: 'Customized to match your industry and typical customer conversations.'
    },
    {
      icon: Calendar,
      title: 'Built-in appointment booking',
      description: 'Smart voice agents that qualify leads and book appointments directly to your dashboard.'
    },
    {
      icon: BarChart3,
      title: 'Voicera AI dashboard access',
      description: 'Your Voicera AI dashboard shows call logs, bookings, and campaign performance — in real time.'
    },
    {
      icon: Headphones,
      title: '24/7 Support & Monitoring',
      description: 'Our team monitors performance and keeps your AI running at its best.'
    },
    {
      icon: Clock,
      title: '24-hour onboarding',
      description: 'Get your AI agent and dashboard fully set up within 24 hours.'
    },
    {
      icon: Shield,
      title: 'Call handling + objection deflection',
      description: 'Automated call summaries, tagging, and pipeline tracking — all in one place.'
    }
  ];

  const comparisonData = {
    voicera: {
      title: 'Voicera AI',
      monthlyFee: '$297',
      setupFee: '$0',
      perCallCost: '$0',
      availability: '24/7',
      consistency: '100%',
      training: '24 hours',
      scalability: 'Unlimited'
    },
    callCenter: {
      title: 'Traditional Call Center',
      monthlyFee: '$2,400+',
      setupFee: '$500+',
      perCallCost: '$3-8',
      availability: 'Business hours',
      consistency: 'Variable',
      training: '2-4 weeks',
      scalability: 'Limited'
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
            backgroundSize: '25px 25px',
            backgroundPosition: '0 0'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Everything You Need — Nothing You Don't
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-body">
            Complete AI voice solution with transparent pricing and no hidden fees
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {includedFeatures.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Icon className="w-6 h-6 text-green-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Toggle */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full border border-gray-600 hover:border-green-500 transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <span>{showComparison ? 'Hide' : 'Compare vs'} Call Center</span>
            <TrendingDown className={`w-4 h-4 transition-transform duration-300 ${showComparison ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Comparison Table */}
        {showComparison && (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-16 animate-in slide-in-from-top duration-500">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Voicera AI vs Traditional Call Centers
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
                    <th className="text-center py-4 px-4 text-green-400 font-bold">Voicera AI</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Traditional Call Center</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-4 text-white font-medium">Monthly Fee</td>
                    <td className="py-4 px-4 text-center text-green-400 font-bold">{comparisonData.voicera.monthlyFee}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{comparisonData.callCenter.monthlyFee}</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-4 text-white font-medium">Setup Fee</td>
                    <td className="py-4 px-4 text-center text-green-400 font-bold">{comparisonData.voicera.setupFee}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{comparisonData.callCenter.setupFee}</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-4 text-white font-medium">Per Call Cost</td>
                    <td className="py-4 px-4 text-center text-green-400 font-bold">{comparisonData.voicera.perCallCost}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{comparisonData.callCenter.perCallCost}</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-4 text-white font-medium">Availability</td>
                    <td className="py-4 px-4 text-center text-green-400 font-bold">{comparisonData.voicera.availability}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{comparisonData.callCenter.availability}</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-4 text-white font-medium">Consistency</td>
                    <td className="py-4 px-4 text-center text-green-400 font-bold">{comparisonData.voicera.consistency}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{comparisonData.callCenter.consistency}</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-4 text-white font-medium">Training Time</td>
                    <td className="py-4 px-4 text-center text-green-400 font-bold">{comparisonData.voicera.training}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{comparisonData.callCenter.training}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-white font-medium">Scalability</td>
                    <td className="py-4 px-4 text-center text-green-400 font-bold">{comparisonData.voicera.scalability}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{comparisonData.callCenter.scalability}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Savings Highlight */}
            <div className="mt-8 p-6 bg-green-500/10 border border-green-500/30 rounded-xl text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <DollarSign className="w-6 h-6 text-green-400" />
                <span className="text-2xl font-bold text-green-400">Save $25,000+</span>
                <span className="text-white">per year</span>
              </div>
              <p className="text-gray-300 text-sm">
                Compared to traditional call center costs with unlimited calls
              </p>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Ready to get everything included?</p>
          <a
            href="https://api.leadconnectorhq.com/widget/booking/3ZLEn4Fk2exmjVVfEw9L"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-400 text-black px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Book Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
