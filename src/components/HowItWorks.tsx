
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CircleUser, HandCoins, Share, CircleDollarSign, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Sign Up',
    description: 'Create your affiliate account in minutes with simple verification.',
    icon: CircleUser,
    color: 'blue',
    bgColor: 'bg-blue-500',
    lightBg: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    id: 2,
    title: 'Configure Payment',
    description: 'Set up PayPal or bank transfer with secure encrypted details.',
    icon: HandCoins,
    color: 'green',
    bgColor: 'bg-green-500',
    lightBg: 'bg-green-50',
    textColor: 'text-green-600'
  },
  {
    id: 3,
    title: 'Share & Promote',
    description: 'Get unique referral links and start sharing across your channels.',
    icon: Share,
    color: 'purple',
    bgColor: 'bg-purple-500',
    lightBg: 'bg-purple-50',
    textColor: 'text-purple-600'
  },
  {
    id: 4,
    title: 'Receive Payment',
    description: 'Get paid bi-weekly with real-time tracking and analytics.',
    icon: CircleDollarSign,
    color: 'orange',
    bgColor: 'bg-orange-500',
    lightBg: 'bg-orange-50',
    textColor: 'text-orange-600'
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            Simple Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start earning in 4 simple steps. No technical knowledge required.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="relative mb-12">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center relative">
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep >= step.id 
                      ? `${step.bgColor} text-white shadow-lg scale-110` 
                      : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                  }`}
                >
                  <step.icon className="w-8 h-8" />
                </button>
                
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-8 w-full h-0.5 bg-gray-200">
                    <div 
                      className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ${
                        activeStep > step.id ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                )}
                
                <div className="text-center mt-4">
                  <div className={`text-sm font-medium ${activeStep >= step.id ? step.textColor : 'text-gray-400'}`}>
                    Step {step.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            
            return (
              <Card 
                key={step.id}
                className={`cursor-pointer transition-all duration-300 border-2 hover:shadow-xl hover:scale-105 ${
                  isActive 
                    ? `border-${step.color}-300 shadow-lg ${step.lightBg}` 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                    isActive ? 'scale-110' : ''
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Ready to get started? Join now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
