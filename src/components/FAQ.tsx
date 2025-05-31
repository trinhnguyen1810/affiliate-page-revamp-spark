
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            Got Questions?
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our affiliate program
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 overflow-hidden"
            >
              <button
                className="w-full text-left p-6 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-200 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}>
                    <div className="w-3 h-3">
                      <div className="w-full h-0.5 bg-blue-600 absolute"></div>
                      <div className="h-full w-0.5 bg-blue-600 absolute left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <CardContent className="px-6 pb-6 pt-0 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Contact our affiliate support team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
