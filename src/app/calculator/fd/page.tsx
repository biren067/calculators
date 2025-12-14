import { Metadata } from 'next';
import FDCalculator from '@/components/calculators/FDCalculator';
import FAQ from '@/components/common/FAQ';
import AdSenseSlot from '@/components/common/AdSenseSlot';

export const metadata: Metadata = {
  title: 'FD Calculator | Fixed Deposit Calculator',
  description: 'Calculate your fixed deposit maturity amount and returns. Plan your safe investments.',
  keywords: ['FD calculator', 'fixed deposit', 'bank deposits', 'savings calculator'],
  openGraph: {
    title: 'FD Calculator',
    description: 'Calculate your fixed deposit returns and maturity amount.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'What is a Fixed Deposit (FD)?',
    answer: 'A Fixed Deposit is a financial instrument that offers a fixed rate of interest on a lump sum deposit for a specified period. It\'s one of the safest investment options.',
  },
  {
    question: 'What is the minimum FD amount?',
    answer: 'The minimum FD amount varies by bank, typically ranging from ₹1,000 to ₹10,000. Check with your bank for specific requirements.',
  },
  {
    question: 'What is the FD tenure?',
    answer: 'FD tenure can range from 7 days to 10 years or more. Longer tenures typically offer higher interest rates.',
  },
  {
    question: 'Can I withdraw from FD before maturity?',
    answer: 'Yes, you can withdraw before maturity, but you\'ll typically receive a lower interest rate (usually 0.5-1% less than the promised rate).',
  },
  {
    question: 'Is FD insured by DICGC?',
    answer: 'Yes, deposits up to ₹5,00,000 are protected by the Deposit Insurance and Credit Guarantee Corporation (DICGC) in case of bank failure.',
  },
];

export default function FDPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Fixed Deposit Calculator</h1>
          <p className="text-lg text-gray-600">
            Calculate your fixed deposit maturity amount and returns with our easy-to-use calculator.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <FDCalculator />
          </div>
          <div className="lg:col-span-1">
            <AdSenseSlot adSlot="2147483668" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Fixed Deposits?</h2>
          <p className="text-gray-700 mb-4">
            Fixed deposits are one of the safest investment vehicles, offering guaranteed returns regardless of market conditions.
            They're perfect for conservative investors looking to preserve capital while earning steady returns.
          </p>
          <p className="text-gray-700">
            With government insurance protection (DICGC) up to ₹5 lakhs and no market risk, FDs are an excellent addition to any investment portfolio,
            especially for building emergency funds or short-term financial goals.
          </p>
        </div>

        <AdSenseSlot adSlot="2147483669" />

        <FAQ items={faqItems} />
      </div>
    </main>
  );
}
