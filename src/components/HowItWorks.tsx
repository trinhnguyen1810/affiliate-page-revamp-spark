
import React, { useState } from 'react';
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
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
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

        {/* Modern Flow Design */}
        <div className="relative mb-16">
          {/* Progress Line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gray-200 rounded-full hidden lg:block">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${((activeStep - 1) / 3) * 100}%` }}
            ></div>
          </div>

          {/* Steps */}
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              const isCompleted = activeStep > step.id;
              
              return (
                <div key={step.id} className="relative">
                  {/* Step Button */}
                  <button
                    onClick={() => setActiveStep(step.id)}
                    className={`relative z-10 w-32 h-32 mx-auto rounded-3xl flex items-center justify-center transition-all duration-500 shadow-lg hover:shadow-xl ${
                      isActive || isCompleted
                        ? `bg-gradient-to-br ${step.bgGradient} text-white scale-110 shadow-2xl` 
                        : 'bg-white text-gray-400 hover:bg-gray-50 border-2 border-gray-200'
                    }`}
                  >
                    <Icon className="w-12 h-12" />
                    
                    {/* Active pulse effect */}
                    {isActive && (
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.bgGradient} opacity-30 animate-pulse`}></div>
                    )}
                  </button>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-16 -right-4 w-8 h-8 items-center justify-center">
                      <ChevronRight className={`w-6 h-6 transition-colors duration-300 ${
                        isCompleted ? 'text-blue-500' : 'text-gray-300'
                      }`} />
                    </div>
                  )}

                  {/* Step Content */}
                  <div className="text-center mt-8">
                    <div className={`text-sm font-semibold mb-2 transition-colors duration-300 ${
                      isActive ? `text-${step.color}-600` : 'text-gray-400'
                    }`}>
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

        {/* Interactive Details Card */}
        <div className="max-w-4xl mx-auto mb-16">
          {steps.map((step) => {
            if (activeStep !== step.id) return null;
            const Icon = step.icon;
            
            return (
              <Card 
                key={step.id}
                className={`bg-gradient-to-br ${step.lightBg} border-0 shadow-xl transition-all duration-500 transform`}
              >
                <CardContent className="p-12 text-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.bgGradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
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
