import { Metadata } from 'next';
import StockReturnsCalculator from '@/components/calculators/StockReturnsCalculator';
import FAQ from '@/components/common/FAQ';
import AdSenseSlot from '@/components/common/AdSenseSlot';

export const metadata: Metadata = {
  title: 'Stock Returns Calculator | Investment Calculator',
  description: 'Calculate your stock investment returns and profit percentage. Track your investment performance.',
  keywords: ['stock calculator', 'investment returns', 'profit calculator', 'stock profit'],
  openGraph: {
    title: 'Stock Returns Calculator',
    description: 'Calculate your stock investment returns and gains.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'How do I calculate stock returns?',
    answer: 'Stock returns = (Sell Price - Buy Price) × Number of Shares. The percentage return = ((Sell Price - Buy Price) / Buy Price) × 100.',
  },
  {
    question: 'What is a good return on investment?',
    answer: 'A return of 8-12% annually is considered good for stocks. However, this varies based on market conditions, investment period, and individual goals.',
  },
  {
    question: 'Should I reinvest my stock returns?',
    answer: 'Reinvesting returns can help you benefit from compounding. However, consider your financial goals, tax implications, and risk tolerance before deciding.',
  },
  {
    question: 'How do I account for dividends in stock returns?',
    answer: 'Total return includes both capital appreciation and dividends. Add the total dividends received to your capital gains for total return calculation.',
  },
];

export default function StockReturnsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Stock Returns Calculator</h1>
          <p className="text-lg text-gray-600">
            Calculate your stock investment returns, profit, and percentage gains easily.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <StockReturnsCalculator />
          </div>
          <div className="lg:col-span-1">
            <AdSenseSlot adSlot="2147483662" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding Stock Returns</h2>
          <p className="text-gray-700 mb-4">
            Stock returns represent the profit or loss you make from buying and selling stocks. Calculating returns helps you assess your investment performance
            and make informed decisions about future investments.
          </p>
          <p className="text-gray-700">
            Remember that past performance does not guarantee future results. Always invest based on your risk tolerance and investment goals,
            and consider consulting a financial advisor for personalized advice.
          </p>
        </div>

        <AdSenseSlot adSlot="2147483663" />

        <FAQ items={faqItems} />
      </div>
    </main>
  );
}
