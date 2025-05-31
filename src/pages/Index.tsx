
import React, { useState } from 'react';
import { ArrowRight, Check, CircleDollarSign, CircleUser, Share, HandCoins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import CommissionStructure from '@/components/CommissionStructure';
import HowItWorks from '@/components/HowItWorks';
import EarningExamples from '@/components/EarningExamples';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <HeroSection />
      <HowItWorks />
      <CommissionStructure />
      <EarningExamples />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Index;
