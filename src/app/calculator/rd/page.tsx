import { Metadata } from 'next';
import RDCalculator from '@/components/calculators/RDCalculator';
import FAQ from '@/components/common/FAQ';
import AdSenseSlot from '@/components/common/AdSenseSlot';

export const metadata: Metadata = {
  title: 'RD Calculator | Recurring Deposit Calculator',
  description: 'Calculate your recurring deposit maturity amount. Plan your regular savings with guaranteed returns.',
  keywords: ['RD calculator', 'recurring deposit', 'savings calculator', 'monthly deposits'],
  openGraph: {
    title: 'RD Calculator',
    description: 'Calculate your recurring deposit returns and maturity amount.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'What is a Recurring Deposit (RD)?',
    answer: 'A Recurring Deposit is a savings scheme where you deposit a fixed amount every month for a specified period. It combines the discipline of saving with guaranteed returns.',
  },
  {
    question: 'What is the minimum RD amount?',
    answer: 'The minimum monthly RD amount varies by bank, typically ranging from ₹100 to ₹1,000. Check with your bank for specific details.',
  },
  {
    question: 'What is the RD tenure?',
    answer: 'RD tenure typically ranges from 6 months to 10 years. Longer tenures often come with slightly higher interest rates.',
  },
  {
    question: 'How is RD different from SIP?',
    answer: 'While both involve regular investments, RD offers fixed returns like bank deposits, while SIP involves market-linked mutual funds with variable returns.',
  },
  {
    question: 'Can I skip RD payments?',
    answer: 'Most banks charge a penalty for missed RD payments. Check your bank\'s policy on skipping payments or get clarification before opening an RD.',
  },
];

export default function RDPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Recurring Deposit Calculator</h1>
          <p className="text-lg text-gray-600">
            Calculate your recurring deposit maturity amount and returns. Plan your monthly savings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <RDCalculator />
          </div>
          <div className="lg:col-span-1">
            <AdSenseSlot adSlot="2147483670" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Benefits of Recurring Deposits</h2>
          <p className="text-gray-700 mb-4">
            Recurring deposits are perfect for salaried individuals and those with regular monthly income. They encourage savings discipline
            while guaranteeing returns that are predictable and secure.
          </p>
          <p className="text-gray-700">
            With no market risk, DICGC insurance protection, and the flexibility to choose your deposit amount and tenure,
            RDs are an excellent way to build a savings corpus for short to medium-term financial goals.
          </p>
        </div>

        <AdSenseSlot adSlot="2147483671" />

        <FAQ items={faqItems} />
      </div>
    </main>
  );
}
