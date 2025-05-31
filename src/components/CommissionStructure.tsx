
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Free Plan',
    commission: '25%',
    color: 'blue',
    popular: false,
    features: [
      '25% commission on all sales',
      '60-day cookie duration',
      'Real-time tracking',
      'Basic analytics',
      'Email support'
    ],
    buttonText: 'Start Earning 25%',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Premium Plan',
    commission: '50%',
    color: 'purple',
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
    gradient: 'from-purple-500 to-purple-600'
  }
];

const CommissionStructure = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
            Competitive Rates
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Commission Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earn competitive commissions with our transparent pricing structure. No hidden fees, 
            no complex tiers – just straightforward earnings.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-300 shadow-xl' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-2 text-sm font-medium">
                  ⭐ Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'} pb-6`}>
                <CardTitle className="text-2xl text-gray-900 mb-2">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className={`text-6xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.commission}
                  </div>
                  <div className="text-gray-600">commission</div>
                </div>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r ${plan.gradient} text-white border-0`}
                >
                  {plan.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">$50</div>
            <div className="text-gray-600">Minimum Payout</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">Bi-weekly</div>
            <div className="text-gray-600">Payment Schedule</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">60 days</div>
            <div className="text-gray-600">Cookie Duration</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommissionStructure;
