import { Metadata } from 'next';
import CAGRCalculator from '@/components/calculators/CAGRCalculator';
import FAQ from '@/components/common/FAQ';
import AdSenseSlot from '@/components/common/AdSenseSlot';

export const metadata: Metadata = {
  title: 'CAGR Calculator | Compound Annual Growth Rate Calculator',
  description: 'Calculate CAGR (Compound Annual Growth Rate) to measure your investment returns over multiple years.',
  keywords: ['CAGR calculator', 'compound annual growth rate', 'investment growth', 'annual return'],
  openGraph: {
    title: 'CAGR Calculator',
    description: 'Calculate your investment CAGR and measure growth over time.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'What is CAGR?',
    answer: 'CAGR (Compound Annual Growth Rate) is the average annual rate at which an investment grows over a specific period, accounting for compounding effects.',
  },
  {
    question: 'Why is CAGR important?',
    answer: 'CAGR helps investors understand the real annual return on investment, smoothing out volatility. It\'s useful for comparing different investments.',
  },
  {
    question: 'What is a good CAGR?',
    answer: 'A CAGR of 12-15% is considered good for equities, 6-8% for bonds, and 8-10% for balanced portfolios. However, this varies by market conditions.',
  },
  {
    question: 'How is CAGR different from average annual return?',
    answer: 'CAGR accounts for compounding, while average annual return is a simple average. CAGR provides a more accurate picture of investment performance.',
  },
];

export default function CAGRPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">CAGR Calculator</h1>
          <p className="text-lg text-gray-600">
            Calculate the Compound Annual Growth Rate (CAGR) to measure your investment returns accurately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <CAGRCalculator />
          </div>
          <div className="lg:col-span-1">
            <AdSenseSlot adSlot="2147483664" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">CAGR Explained</h2>
          <p className="text-gray-700 mb-4">
            CAGR is the smoothed annual rate of return that accounts for the compounding effect of your investment.
            It's particularly useful for evaluating long-term investments where year-to-year returns vary significantly.
          </p>
          <p className="text-gray-700">
            By using CAGR, you can fairly compare different investments regardless of their individual year-to-year performance variations,
            making it an essential metric for serious investors.
          </p>
        </div>

        <AdSenseSlot adSlot="2147483665" />

        <FAQ items={faqItems} />
      </div>
    </main>
  );
}
