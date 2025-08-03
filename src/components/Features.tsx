import React from 'react';
import { Clock, DollarSign, Database, MessageSquare, Zap, RefreshCw } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: 'Always-On Lead Conversion',
      description: 'Your AI voice agent answers every call, day or night — capturing leads 24/7, even on weekends and holidays.',
      color: 'blue'
    },
    {
      icon: DollarSign,
      title: '10x Cost Efficiency',
      description: 'Replace expensive sales reps with AI that delivers consistent, high-converting conversations for 90% less.',
      color: 'green'
    },
    {
      icon: Database,
      title: 'All-in-One CRM System',
      description: 'All-in-one AI calling + CRM automation inside Voicera AI, powered by GoHighLevel. No integrations required.',
      color: 'purple'
    },
    {
      icon: MessageSquare,
      title: 'Sounds Completely Human',
      description: 'Voicera AI Assistant handles objections, qualifies leads, and speaks so naturally, callers never know it\'s AI.',
      color: 'orange'
    },
    {
      icon: Zap,
      title: 'Instant Lead Response',
      description: 'Respond to every inquiry within seconds — before your competitors even see the lead.',
      color: 'yellow'
    },
    {
      icon: RefreshCw,
      title: 'Smart Lead Nurturing',
      description: 'Voicera AI runs follow-up sequences automatically to convert more qualified leads into paying customers.',
      color: 'indigo'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Handles Leads Like Your Best Team Member. Available 24/7.
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Why local businesses are using AI voice agents to maximize lead conversion
            with human-like conversations that qualify prospects and book appointments 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-green-500/50"
            >
              <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-green-500/20">
          <h3 className="text-xl font-bold mb-3 text-white">Ready to Transform Your Lead Handling?</h3>
          <p className="text-gray-300 text-base mb-4 max-w-2xl mx-auto">
            While your competitors lose leads to voicemail and slow response times,
            your AI voice agent is handling prospects professionally 24/7.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/booking/3ZLEn4Fk2exmjVVfEw9L"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-black px-6 py-2 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 font-semibold inline-block"
          >
            Book Your Strategy Call
          </a>
          </div>
      </div>
    </section>
  );
};

export default Features;