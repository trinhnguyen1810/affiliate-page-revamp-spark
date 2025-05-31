
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-200 rounded-full opacity-25 animate-pulse delay-1000"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-10 left-1/2 w-4 h-4 bg-blue-400 rotate-45 opacity-20 animate-spin"></div>
      <div className="absolute bottom-20 right-1/4 w-6 h-6 bg-emerald-400 opacity-30 animate-bounce delay-500"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-blue-700 rounded-full text-sm font-medium shadow-lg border border-blue-200">
              📈 Join 10,000+ Successful Affiliates
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Earn up to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Earning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
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
                <div className="text-2xl font-bold text-emerald-600">$50</div>
                <div className="text-sm text-gray-500">Min Payout</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">60</div>
                <div className="text-sm text-gray-500">Days Cookie</div>
              </div>
            </div>
          </div>
          
          {/* Right Dashboard Preview */}
          <div className="relative">
            <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 rounded-3xl overflow-hidden animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">Commissions</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
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
                  <div className="text-center p-4 bg-emerald-50 rounded-xl">
                    <div className="text-2xl font-bold text-emerald-600">$303.25</div>
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
                    <div className="text-emerald-600 font-semibold">$49.50</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-800">Free Plan</div>
                      <div className="text-sm text-gray-500">jane@startup.com</div>
                    </div>
                    <div className="text-emerald-600 font-semibold">$7.25</div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 text-sm">
                  ⏰ Next payout in 3 days
                </div>
              </CardContent>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
