import { Metadata } from 'next';
import SIPLumpsumCalculator from '@/components/calculators/SIPLumpsumCalculator';
import FAQ from '@/components/common/FAQ';
import AdSenseSlot from '@/components/common/AdSenseSlot';

export const metadata: Metadata = {
  title: 'SIP + Lumpsum Calculator | Combined Investment Calculator',
  description: 'Calculate combined returns from SIP and lumpsum investments. Plan your mixed investment strategy.',
  keywords: ['SIP lumpsum calculator', 'combined investment', 'mutual fund calculator'],
  openGraph: {
    title: 'SIP + Lumpsum Calculator',
    description: 'Calculate returns from combined SIP and lumpsum investments.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'What is better: SIP or Lumpsum?',
    answer: 'Both have their benefits. SIP is ideal for regular investors with limited capital, while lumpsum is better for those with available funds. Combining both maximizes returns.',
  },
  {
    question: 'Can I do both SIP and Lumpsum together?',
    answer: 'Yes, many investors combine both strategies. They invest a lumpsum initially and then contribute regularly through SIP to maximize wealth accumulation.',
  },
  {
    question: 'How do I decide the allocation between SIP and Lumpsum?',
    answer: 'It depends on your financial situation, risk appetite, and investment goals. You can allocate based on your available capital and regular income.',
  },
  {
    question: 'What happens if I invest a lumpsum and then regular SIP?',
    answer: 'Your lumpsum will grow based on the entire investment period, while SIP contributions will be invested progressively. Both benefit from market returns.',
  },
];

export default function SIPLumpsumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">SIP + Lumpsum Calculator</h1>
          <p className="text-lg text-gray-600">
            Calculate combined returns from both regular SIP investments and one-time lumpsum amounts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <SIPLumpsumCalculator />
          </div>
          <div className="lg:col-span-1">
            <AdSenseSlot adSlot="2147483654" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Combined Investment Strategy</h2>
          <p className="text-gray-700 mb-4">
            A combined SIP and lumpsum strategy gives you the best of both worlds. The lumpsum provides immediate capital deployment 
            while SIP ensures consistent market participation and average cost benefits.
          </p>
          <p className="text-gray-700">
            This approach is particularly effective for investors who receive occasional bonuses, tax refunds, or inheritances 
            while also maintaining a regular investment discipline.
          </p>
        </div>

        <AdSenseSlot adSlot="2147483655" />

        <FAQ items={faqItems} />
      </div>
    </main>
  );
}
