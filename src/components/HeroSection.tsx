
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              📈 Join 10,000+ Successful Affiliates
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Earn up to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  50%
                </span>
                <br />
                Commission
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                from every referral
              </p>
              
              <p className="text-lg text-gray-500 max-w-lg">
                Join Affitor's affiliate program and start earning generous commissions. 
                Simple setup, real-time tracking, and bi-weekly payouts.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Start Earning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:scale-105"
              >
                View Commission Structure
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">25-50%</div>
                <div className="text-sm text-gray-500">Commission Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$50</div>
                <div className="text-sm text-gray-500">Min Payout</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">60</div>
                <div className="text-sm text-gray-500">Days Cookie</div>
              </div>
            </div>
          </div>
          
          {/* Right Dashboard Preview */}
          <div className="relative">
            <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">Commissions</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-500">Live</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-700">$691.25</div>
                    <div className="text-sm text-gray-500">Total Earned</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600">$148.50</div>
                    <div className="text-sm text-gray-500">Pending</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">$303.25</div>
                    <div className="text-sm text-gray-500">Ready to Pay</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700">Recent Commissions</h4>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-800">Premium Sale</div>
                      <div className="text-sm text-gray-500">john@company.com</div>
                    </div>
                    <div className="text-green-600 font-semibold">$49.50</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-800">Free Plan</div>
                      <div className="text-sm text-gray-500">jane@startup.com</div>
                    </div>
                    <div className="text-green-600 font-semibold">$7.25</div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 text-sm">
                  ⏰ Next payout in 3 days
                </div>
              </CardContent>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
