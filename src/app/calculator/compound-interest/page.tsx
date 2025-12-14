import { Metadata } from 'next';
import CompoundInterestCalculator from '@/components/calculators/CompoundInterestCalculator';
import FAQ from '@/components/common/FAQ';
import AdSenseSlot from '@/components/common/AdSenseSlot';

export const metadata: Metadata = {
  title: 'Compound Interest Calculator | Financial Calculator',
  description: 'Calculate compound interest with different compounding frequencies. See how your money grows over time.',
  keywords: ['compound interest', 'calculator', 'interest compounding', 'investment growth'],
  openGraph: {
    title: 'Compound Interest Calculator',
    description: 'Calculate compound interest with various compounding frequencies.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'What is Compound Interest?',
    answer: 'Compound interest is interest calculated on both the principal and previously earned interest. This creates an exponential growth effect over time.',
  },
  {
    question: 'How does compounding frequency affect returns?',
    answer: 'More frequent compounding (daily vs. yearly) results in higher returns because interest is calculated and added more often, allowing you to earn interest on interest.',
  },
  {
    question: 'What is the power of compound interest?',
    answer: 'Compound interest can significantly increase your wealth over long periods. Even small interest rates can result in substantial gains when compounded over many years.',
  },
  {
    question: 'Which compounding frequency is most common?',
    answer: 'Bank deposits typically use quarterly or monthly compounding, while investment accounts may use daily compounding for better returns.',
  },
];

export default function CompoundInterestPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Compound Interest Calculator</h1>
          <p className="text-lg text-gray-600">
            See how your investment grows with compound interest. Calculate with different compounding frequencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <CompoundInterestCalculator />
          </div>
          <div className="lg:col-span-1">
            <AdSenseSlot adSlot="2147483650" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding Compound Interest</h2>
          <p className="text-gray-700 mb-4">
            Compound interest is often called the "eighth wonder of the world" because of its powerful effect on wealth creation.
            When interest is compounded, each period's interest is added to the principal, and the next period's interest is calculated on this larger amount.
          </p>
          <p className="text-gray-700">
            This snowball effect can turn modest investments into substantial wealth over decades, making it crucial for long-term financial planning.
          </p>
        </div>

        <AdSenseSlot adSlot="2147483651" />

        <FAQ items={faqItems} />
      </div>
    </main>
  );
}
