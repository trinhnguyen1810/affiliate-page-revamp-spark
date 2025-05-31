
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleUser, ArrowRight, HandCoins } from 'lucide-react';

const examples = [
  {
    level: 'Beginner',
    icon: CircleUser,
    color: 'green',
    bgColor: 'bg-green-500',
    lightBg: 'bg-green-50',
    monthlyReferrals: 10,
    conversions: 2,
    avgSaleValue: '$99',
    commissionRate: '25%',
    monthlyEarning: '$49.50'
  },
  {
    level: 'Intermediate',
    icon: ArrowRight,
    color: 'blue',
    bgColor: 'bg-blue-500',
    lightBg: 'bg-blue-50',
    monthlyReferrals: 50,
    conversions: 12,
    avgSaleValue: '$199',
    commissionRate: '50%',
    monthlyEarning: '$1,194'
  },
  {
    level: 'Expert',
    icon: HandCoins,
    color: 'purple',
    bgColor: 'bg-purple-500',
    lightBg: 'bg-purple-50',
    monthlyReferrals: 100,
    conversions: 30,
    avgSaleValue: '$299',
    commissionRate: '50%',
    monthlyEarning: '$4,485'
  }
];

const EarningExamples = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            Earning Potential
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Earning Examples
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much you could earn based on different activity levels. These examples are 
            based on real affiliate performance data.
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((example) => {
            const Icon = example.icon;
            
            return (
              <Card 
                key={example.level}
                className="border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden"
              >
                <CardHeader className={`text-center pb-4 ${example.lightBg}`}>
                  <div className={`w-16 h-16 rounded-2xl ${example.bgColor} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{example.level}</CardTitle>
                </CardHeader>
                
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monthly Referrals</span>
                      <span className="font-semibold text-gray-900">{example.monthlyReferrals}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Conversions</span>
                      <span className="font-semibold text-gray-900">{example.conversions}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Avg Sale Value</span>
                      <span className="font-semibold text-gray-900">{example.avgSaleValue}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Commission Rate</span>
                      <span className={`font-semibold text-${example.color}-600`}>{example.commissionRate}</span>
                    </div>
                    
                    <div className="border-t pt-3 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-gray-900">Monthly Earning</span>
                        <span className={`text-2xl font-bold text-${example.color}-600`}>{example.monthlyEarning}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 max-w-2xl mx-auto">
            * Earnings are estimates based on historical data and may vary. Your actual earnings 
            will depend on your promotional efforts and conversion rates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarningExamples;
