import { Metadata } from 'next';
import SimpleInterestCalculator from '@/components/calculators/SimpleInterestCalculator';
import FAQ from '@/components/common/FAQ';
import AdSenseSlot from '@/components/common/AdSenseSlot';

export const metadata: Metadata = {
  title: 'Simple Interest Calculator | Financial Calculator',
  description: 'Calculate simple interest on your savings, loans, or investments. Easy-to-use online calculator with instant results.',
  keywords: ['simple interest', 'calculator', 'interest calculation', 'savings'],
  openGraph: {
    title: 'Simple Interest Calculator',
    description: 'Calculate simple interest with our free online calculator.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'What is Simple Interest?',
    answer: 'Simple interest is interest calculated only on the principal amount. It is not compounded, meaning interest is not earned on previously earned interest.',
  },
  {
    question: 'What is the formula for Simple Interest?',
    answer: 'Simple Interest = (P × R × T) / 100, where P is Principal, R is Rate per annum, and T is Time in years.',
  },
  {
    question: 'How often is simple interest calculated?',
    answer: 'Simple interest is typically calculated for the entire duration of the loan or investment at the agreed-upon rate.',
  },
  {
    question: 'Can I use this calculator for loans?',
    answer: 'Yes, you can use this calculator to determine simple interest on both savings and loans.',
  },
];

export default function SimpleInterestPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Simple Interest Calculator</h1>
          <p className="text-lg text-gray-600">
            Calculate simple interest on savings, loans, or investments using our free online calculator.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <SimpleInterestCalculator />
          </div>
          <div className="lg:col-span-1">
            <AdSenseSlot adSlot="2147483648" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">About Simple Interest</h2>
          <p className="text-gray-700 mb-4">
            Simple interest is one of the most straightforward ways to calculate interest on a loan or investment. 
            Unlike compound interest, simple interest is calculated only on the principal amount, not on accumulated interest.
          </p>
          <p className="text-gray-700">
            This makes it easier to predict and calculate, making it a popular choice for short-term loans and investments.
          </p>
        </div>

        <AdSenseSlot adSlot="2147483649" />

        <FAQ items={faqItems} />
      </div>
    </main>
  );
}
