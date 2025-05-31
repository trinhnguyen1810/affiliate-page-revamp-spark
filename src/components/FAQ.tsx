
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How much can I earn as an affiliate?',
    answer: 'You can earn between 25% and 50% commission on every sale, depending on your plan. With our Premium Plan, you earn 50% commission on all referrals. There\'s no limit to how much you can earn.'
  },
  {
    question: 'When and how do I get paid?',
    answer: 'We pay affiliates bi-weekly via PayPal or bank transfer. The minimum payout threshold is $50. You can track your earnings in real-time through our affiliate dashboard.'
  },
  {
    question: 'How long do cookies last?',
    answer: 'Our cookies last for 60 days, which means you\'ll earn commission on any sale made by a customer you referred within 60 days of their first click on your affiliate link.'
  },
  {
    question: 'What promotional materials do you provide?',
    answer: 'We provide banners, email templates, social media graphics, and product descriptions. Premium affiliates get access to custom promotional materials and a dedicated account manager.'
  },
  {
    question: 'Is there an approval process?',
    answer: 'Yes, we review all affiliate applications to ensure quality partnerships. The approval process typically takes 24-48 hours. We look for affiliates who align with our brand values.'
  },
  {
    question: 'Are there any restrictions on promotion methods?',
    answer: 'We prohibit spam, paid search on branded terms, and misleading advertising. You can promote through social media, content marketing, email marketing, and other ethical methods outlined in our terms.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
      {/* Background elements */}
      <div className="absolute top-16 right-16 w-20 h-20 bg-blue-200/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-emerald-200/20 rounded-full animate-bounce"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-blue-700 rounded-full text-sm font-medium mb-8 shadow-sm border border-blue-200">
            Got Questions?
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything you need to know about our affiliate program
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden rounded-xl hover:shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <button
                className="w-full text-left p-6 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-6">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? 'bg-blue-500 rotate-180' : 'hover:bg-blue-200'
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <CardContent className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">Still have questions?</p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
          >
            Contact our affiliate support team
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
