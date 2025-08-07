import React, { useState } from 'react';
import { Phone, Calendar, TrendingUp, Eye, Clock, CheckCircle } from 'lucide-react';

const DashboardPreview = () => {
  const [activeCard, setActiveCard] = useState(0);

  const dashboardCards = [
    {
      id: 'calls',
      title: 'Recent Calls',
      icon: Phone,
      description: 'Monitor real-time conversations and results from inbound/outbound calls.',
      content: (
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <p className="text-white text-sm font-medium">John Smith</p>
                <p className="text-gray-400 text-xs">Roofing inquiry • 2:34</p>
              </div>
            </div>
            <CheckCircle className="w-4 h-4 text-green-400" />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <div>
                <p className="text-white text-sm font-medium">Sarah Johnson</p>
                <p className="text-gray-400 text-xs">Appointment booked • 4:12</p>
              </div>
            </div>
            <Eye className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-yellow-500" />
              <div>
                <p className="text-white text-sm font-medium">Mike Davis</p>
                <p className="text-gray-400 text-xs">Follow-up needed • 1:45</p>
              </div>
            </div>
            <Eye className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      )
    },
    {
      id: 'bookings',
      title: 'Booking Log',
      icon: Calendar,
      description: 'Track appointments booked through the Voicera AI Assistant — synced with your calendar.',
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-green-900/30 border border-green-500/30 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <p className="text-green-400 text-sm font-medium">Today - 3 Bookings</p>
              <span className="text-green-400 text-xs">+2 from yesterday</span>
            </div>
            <div className="space-y-1 text-xs text-gray-300">
              <p>• 9:00 AM - Roof Inspection (John S.)</p>
              <p>• 2:30 PM - Consultation (Sarah J.)</p>
              <p>• 4:00 PM - Estimate (Mike D.)</p>
            </div>
          </div>
          <div className="p-3 bg-gray-800 rounded-lg">
            <p className="text-white text-sm font-medium mb-2">This Week</p>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Total Bookings</span>
              <span className="text-green-400 font-medium">18</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Conversion Rate</span>
              <span className="text-green-400 font-medium">72%</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'metrics',
      title: 'Performance Metrics',
      icon: TrendingUp,
      description: 'See conversion rates, average call time, and AI performance at a glance.',
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-gray-800 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-400">94%</p>
              <p className="text-xs text-gray-400">Answer Rate</p>
            </div>
            <div className="p-3 bg-gray-800 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-400">3.2m</p>
              <p className="text-xs text-gray-400">Avg Call Time</p>
            </div>
          </div>
          <div className="p-3 bg-gray-800 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white text-sm">Lead Quality Score</span>
              <span className="text-green-400 text-sm font-medium">8.7/10</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }}></div>
            </div>
          </div>
          <div className="p-3 bg-gray-800 rounded-lg">
            <p className="text-white text-sm mb-1">Top Objections Handled</p>
            <div className="space-y-1 text-xs text-gray-400">
              <p>• "Too expensive" - 89% resolved</p>
              <p>• "Need to think about it" - 76% resolved</p>
            </div>
          </div>
        </div>
      )
    },

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
            Your Branded 24/7 Voicera AI Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-body">
            All-in-one AI calling + CRM automation inside Voicera AI, powered by GoHighLevel. Track calls, bookings, and performance metrics.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card Navigation */}
          <div className="space-y-4">
            {dashboardCards.map((card, index) => {
              const Icon = card.icon;
              const isActive = index === activeCard;
              
              return (
                <button
                  key={card.id}
                  onClick={() => setActiveCard(index)}
                  className={`w-full p-6 rounded-2xl border transition-all duration-300 text-left ${
                    isActive 
                      ? 'bg-green-500/10 border-green-500/30 shadow-lg shadow-green-500/10' 
                      : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-green-500' : 'bg-gray-700'
                    }`}>
                      <Icon className={`w-6 h-6 ${isActive ? 'text-black' : 'text-gray-300'}`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${
                        isActive ? 'text-green-400' : 'text-white'
                      }`}>
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{card.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Card Content */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              {React.createElement(dashboardCards[activeCard].icon, {
                className: "w-6 h-6 text-green-400"
              })}
              <h3 className="text-xl font-semibold text-white">
                {dashboardCards[activeCard].title}
              </h3>
            </div>
            
            <div className="min-h-[300px]">
              {dashboardCards[activeCard].content}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">See your dashboard in action</p>
          <a
            href="https://api.leadconnectorhq.com/widget/bookings/voicera-ai"
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

export default DashboardPreview;
