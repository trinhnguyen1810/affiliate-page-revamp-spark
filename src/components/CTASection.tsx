
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Quick Setup',
    description: 'Get started in under 5 minutes with our streamlined onboarding process',
    color: 'emerald'
  },
  {
    icon: TrendingUp,
    title: 'Real-time Tracking',
    description: 'Monitor your performance with comprehensive analytics dashboard',
    color: 'blue'
  },
  {
    icon: Shield,
    title: 'Reliable Payouts',
    description: 'Get paid every two weeks with multiple secure payment options',
    color: 'blue'
  }
];

const CTASection = () => {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-emerald-500 rounded-full opacity-10 blur-2xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400 rounded-full opacity-10 blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-blue-800/50 backdrop-blur-sm text-blue-200 rounded-full text-sm font-medium mb-6 border border-blue-700/30">
            Join 10,000+ Successful Affiliates
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start{' '}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Earning?
            </span>
          </h2>
          
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful affiliates who are already earning generous commissions. 
            Your journey to financial freedom starts today.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-10 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0"
          >
            Join Now - Start Earning Today
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
          
          <p className="text-blue-200 text-sm mt-4">
            Free to join • No setup fees • Start earning immediately
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
