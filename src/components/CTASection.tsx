
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, HandCoins, ArrowRight as TrendingUp, CircleDollarSign } from 'lucide-react';

const features = [
  {
    icon: HandCoins,
    title: 'Quick Setup',
    description: 'Get started in under 5 minutes with our streamlined onboarding process',
    color: 'green'
  },
  {
    icon: TrendingUp,
    title: 'Real-time Tracking',
    description: 'Monitor your performance with comprehensive analytics dashboard',
    color: 'blue'
  },
  {
    icon: CircleDollarSign,
    title: 'Reliable Payouts',
    description: 'Get paid every two weeks with multiple secure payment options',
    color: 'purple'
  }
];

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-400 rounded-full opacity-10 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400 rounded-full opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-800 text-blue-200 rounded-full text-sm font-medium mb-6">
            Join 10,000+ Successful Affiliates
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Start{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Earning?
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful affiliates who are already earning generous commissions. 
            Your journey to financial freedom starts today.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className={`w-16 h-16 rounded-2xl bg-${feature.color}-500 flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-blue-200 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-0"
          >
            Join Now - Start Earning Today
            <ArrowRight className="ml-3 h-6 w-6" />
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
