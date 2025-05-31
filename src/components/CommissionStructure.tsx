
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
    bgGradient: 'from-blue-50 to-white',
    borderColor: 'border-blue-200'
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
    gradient: 'from-emerald-500 to-teal-600',
    bgGradient: 'from-emerald-50 to-white',
    borderColor: 'border-emerald-300'
  }
];

const CommissionStructure = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium mb-8 shadow-sm">
            Competitive Rates
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Commission Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Earn competitive commissions with our transparent pricing structure. No hidden fees, 
            no complex tiers – just straightforward earnings.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl ${
                plan.popular 
                  ? `${plan.borderColor} border-2 shadow-xl bg-gradient-to-br ${plan.bgGradient}` 
                  : `${plan.borderColor} border-2 hover:border-blue-300 bg-gradient-to-br ${plan.bgGradient}`
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-center py-3 text-sm font-semibold flex items-center justify-center gap-2 rounded-t-3xl">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-16' : 'pt-12'} pb-8`}>
                <CardTitle className="text-2xl text-gray-900 mb-4">{plan.name}</CardTitle>
                <div className="space-y-3">
                  <div className={`text-7xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.commission}
                  </div>
                  <div className="text-gray-600 text-lg">commission</div>
                </div>
              </CardHeader>
              
              <CardContent className="px-8 pb-10">
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm`}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r ${plan.gradient} text-white border-0 hover:shadow-2xl`}
                >
                  {plan.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto mt-20 text-center">
          <div className="space-y-3">
            <div className="text-4xl font-bold text-emerald-600">$50</div>
            <div className="text-gray-600 text-lg">Minimum Payout</div>
          </div>
          <div className="space-y-3">
            <div className="text-4xl font-bold text-blue-600">Bi-weekly</div>
            <div className="text-gray-600 text-lg">Payment Schedule</div>
          </div>
          <div className="space-y-3">
            <div className="text-4xl font-bold text-teal-600">60 days</div>
            <div className="text-gray-600 text-lg">Cookie Duration</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommissionStructure;
