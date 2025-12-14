import { Metadata } from 'next';
import SIPCalculator from '@/components/calculators/SIPCalculator';
import FAQ from '@/components/common/FAQ';
import AdSenseSlot from '@/components/common/AdSenseSlot';

export const metadata: Metadata = {
  title: 'SIP Calculator | Systematic Investment Plan Calculator',
  description: 'Calculate your SIP returns and investment growth. Plan your future investments with our free SIP calculator.',
  keywords: ['SIP calculator', 'mutual fund', 'investment plan', 'systematic investment'],
  openGraph: {
    title: 'SIP Calculator',
    description: 'Calculate returns from your Systematic Investment Plan.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'What is SIP (Systematic Investment Plan)?',
    answer: 'SIP is a method of investing a fixed amount regularly (usually monthly) into mutual funds. It helps in building wealth gradually and reduces the impact of market volatility.',
  },
  {
    question: 'What are the benefits of SIP?',
    answer: 'SIP benefits include rupee cost averaging, disciplined investing, flexibility in amount, no lump sum requirement, and the power of compounding over time.',
  },
  {
    question: 'What is a good expected annual return for SIP?',
    answer: 'Expected returns vary by fund type. Equity funds historically return 12-15%, debt funds 6-8%, and balanced funds 8-10%. Past performance is not a guarantee of future results.',
  },
  {
    question: 'Can I increase my SIP amount over time?',
    answer: 'Yes, most SIP plans allow you to increase your monthly investment amount periodically, which can boost your wealth accumulation further.',
  },
];

export default function SIPPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">SIP Calculator</h1>
          <p className="text-lg text-gray-600">
            Plan your Systematic Investment Plan and calculate potential returns over time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <SIPCalculator />
          </div>
          <div className="lg:col-span-1">
            <AdSenseSlot adSlot="2147483652" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Invest Through SIP?</h2>
          <p className="text-gray-700 mb-4">
            SIP is one of the most effective ways to build long-term wealth. By investing a fixed amount regularly, 
            you benefit from rupee cost averaging, which means you buy more units when prices are low and fewer when prices are high.
          </p>
          <p className="text-gray-700">
            This strategy reduces the impact of market volatility and helps in building a disciplined investment habit.
            Over 15-20 years, even modest SIP amounts can grow to significant corpus thanks to the power of compounding.
          </p>
        </div>

        <AdSenseSlot adSlot="2147483653" />

        <FAQ items={faqItems} />
      </div>
    </main>
  );
}
