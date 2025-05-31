
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CircleUser, HandCoins, Share, CircleDollarSign, ArrowRight, ChevronRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Sign Up',
    description: 'Create your affiliate account in minutes with simple verification.',
    icon: CircleUser,
    color: 'blue',
    bgGradient: 'from-blue-500 to-blue-600',
    lightBg: 'from-blue-50 to-blue-100'
  },
  {
    id: 2,
    title: 'Configure Payment',
    description: 'Set up PayPal or bank transfer with secure encrypted details.',
    icon: HandCoins,
    color: 'green',
    bgGradient: 'from-green-500 to-green-600',
    lightBg: 'from-green-50 to-green-100'
  },
  {
    id: 3,
    title: 'Share & Promote',
    description: 'Get unique referral links and start sharing across your channels.',
    icon: Share,
    color: 'indigo',
    bgGradient: 'from-indigo-500 to-indigo-600',
    lightBg: 'from-indigo-50 to-indigo-100'
  },
  {
    id: 4,
    title: 'Receive Payment',
    description: 'Get paid bi-weekly with real-time tracking and analytics.',
    icon: CircleDollarSign,
    color: 'orange',
    bgGradient: 'from-orange-500 to-orange-600',
    lightBg: 'from-orange-50 to-orange-100'
  }
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-blue-200/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-200/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-200/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-10 right-1/4 w-16 h-16 bg-orange-200/20 rounded-full animate-bounce delay-500"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium mb-8 shadow-sm">
            Simple Process
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Start earning in 4 simple steps. No technical knowledge required.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="relative mb-16">
          {/* Progress Line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gray-200 rounded-full hidden lg:block">
            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-full"></div>
          </div>

          {/* Steps */}
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={step.id} className="relative">
                  {/* Step Button */}
                  <div className={`relative z-10 w-32 h-32 mx-auto rounded-3xl flex items-center justify-center bg-gradient-to-br ${step.bgGradient} text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                    <Icon className="w-12 h-12" />
                  </div>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-16 -right-4 w-8 h-8 items-center justify-center">
                      <ChevronRight className="w-6 h-6 text-blue-500" />
                    </div>
                  )}

                  {/* Step Content */}
                  <div className="text-center mt-8">
                    <div className={`text-sm font-semibold mb-2 text-${step.color}-600`}>
                      Step {step.id}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0"
          >
            Ready to get started? Join now
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
