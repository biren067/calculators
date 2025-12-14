import { Metadata } from 'next';
import PPFCalculator from '@/components/calculators/PPFCalculator';
import FAQ from '@/components/common/FAQ';
import AdSenseSlot from '@/components/common/AdSenseSlot';

export const metadata: Metadata = {
  title: 'PPF Calculator | Public Provident Fund Calculator',
  description: 'Calculate your PPF maturity amount and returns. Plan your PPF investment strategy.',
  keywords: ['PPF calculator', 'public provident fund', 'retirement planning', 'savings calculator'],
  openGraph: {
    title: 'PPF Calculator',
    description: 'Calculate your PPF returns and plan your retirement.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'What is PPF (Public Provident Fund)?',
    answer: 'PPF is a long-term, government-backed savings and investment scheme in India that offers guaranteed returns and tax benefits under Section 80C.',
  },
  {
    question: 'What is the maximum contribution to PPF?',
    answer: 'The maximum annual contribution to PPF is ₹1,50,000. You can contribute as little as ₹500 in multiples of ₹100.',
  },
  {
    question: 'What is the PPF investment period?',
    answer: 'The minimum investment period for PPF is 15 years. However, you can continue contributing beyond this period.',
  },
  {
    question: 'What is the current PPF interest rate?',
    answer: 'The current PPF interest rate is 7.1% per annum (subject to change quarterly). Check the official RBI website for updates.',
  },
  {
    question: 'Can I withdraw from PPF before maturity?',
    answer: 'Yes, partial withdrawals are allowed after 7 years. Full withdrawal is allowed after 15 years or age 60.',
  },
];

export default function PPFPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">PPF Calculator</h1>
          <p className="text-lg text-gray-600">
            Calculate your PPF maturity amount and plan your long-term retirement savings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <PPFCalculator />
          </div>
          <div className="lg:col-span-1">
            <AdSenseSlot adSlot="2147483666" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">PPF Investment Benefits</h2>
          <p className="text-gray-700 mb-4">
            The Public Provident Fund is one of India's safest investment options, backed by the government and offering guaranteed returns.
            It's an excellent choice for long-term wealth accumulation and retirement planning.
          </p>
          <p className="text-gray-700">
            With favorable tax treatment, guaranteed returns, and the power of compounding, PPF can help you build a substantial retirement corpus
            over 15-30 years.
          </p>
        </div>

        <AdSenseSlot adSlot="2147483667" />

        <FAQ items={faqItems} />
      </div>
    </main>
  );
}
