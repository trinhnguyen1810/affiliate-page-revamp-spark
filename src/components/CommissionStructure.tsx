
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    name: 'Free Plan',
    commission: '25%',
    popular: false,
    features: [
      '25% commission on all sales',
      '60-day cookie duration',
      'Real-time tracking',
      'Basic analytics',
      'Email support'
    ],
    buttonText: 'Start Earning 25%',
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50/50 to-white',
    borderColor: 'border-blue-200'
  },
  {
    name: 'Pro Plan',
    commission: '35%',
    popular: false,
    features: [
      '35% commission on all sales',
      '60-day cookie duration',
      'Basic tracking and analysis',
      'Enhanced reporting',
      'Priority email support'
    ],
    buttonText: 'Start Earning 35%',
    gradient: 'from-indigo-500 to-indigo-600',
    bgGradient: 'from-indigo-50/50 to-white',
    borderColor: 'border-indigo-200'
  },
  {
    name: 'Premium Plan',
    commission: '50%',
    popular: true,
    features: [
      '50% commission on all sales',
      '60-day cookie duration',
      'Advanced tracking & analytics',
      'Priority support',
      'Custom promotional materials',
      'Dedicated account manager'
    ],
    buttonText: 'Start Earning 50%',
    gradient: 'from-emerald-500 to-emerald-600',
    bgGradient: 'from-emerald-50/50 to-white',
    borderColor: 'border-emerald-300'
  }
];

const CommissionStructure = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50/40 via-white to-emerald-50/30 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-200/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300/20 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-20 right-10 w-20 h-20 bg-emerald-300/15 rounded-full animate-bounce delay-700"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-emerald-700 rounded-full text-sm font-medium mb-8 shadow-sm border border-emerald-200">
            Competitive Rates
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Commission Structure
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Earn competitive commissions with our transparent pricing structure. No hidden fees, 
            no complex tiers – just straightforward earnings.
          </p>
        </div>

        {/* Compact Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 rounded-2xl group ${
                plan.popular 
                  ? `${plan.borderColor} border-2 shadow-lg bg-gradient-to-br ${plan.bgGradient} backdrop-blur-sm` 
                  : `${plan.borderColor} border-2 hover:border-blue-300 bg-gradient-to-br ${plan.bgGradient} backdrop-blur-sm hover:shadow-lg`
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-center py-2 text-sm font-semibold flex items-center justify-center gap-2 rounded-t-2xl">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'} pb-6`}>
                <CardTitle className="text-xl text-gray-900 mb-3">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.commission}
                  </div>
                  <div className="text-gray-600">commission</div>
                </div>
              </CardHeader>
              
              <CardContent className="px-6 pb-8">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg bg-gradient-to-r ${plan.gradient} text-white border-0 group-hover:shadow-xl`}
                >
                  {plan.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compact Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-emerald-600">$50</div>
            <div className="text-gray-600">Minimum Payout</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">Bi-weekly</div>
            <div className="text-gray-600">Payment Schedule</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-emerald-600">60 days</div>
            <div className="text-gray-600">Cookie Duration</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommissionStructure;
