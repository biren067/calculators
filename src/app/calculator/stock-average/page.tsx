import { Metadata } from 'next';
import FAQ from '@/components/common/FAQ';
import AdSenseSlot from '@/components/common/AdSenseSlot';
import StockAverage from '@/components/calculators/StockAverage';

export const metadata: Metadata = {
  title: 'Stock Average Calculator | Calculate Average Stock Price',
  description: 'Calculate the average price of your stock holdings when buying more shares. Perfect for investors tracking their portfolio average.',
  keywords: ['stock average', 'average price calculator', 'stock investment', 'portfolio average', 'stock calculator'],
  openGraph: {
    title: 'Stock Average Calculator',
    description: 'Calculate the average price of your stock holdings when adding new purchases.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'What is stock averaging?',
    answer: 'Stock averaging is the process of calculating the average price per share of your stock holdings when you buy additional shares at different prices. It helps you understand your overall cost basis.',
  },
  {
    question: 'Why is calculating average stock price important?',
    answer: 'Knowing your average stock price helps you make informed decisions about when to sell, track your investment performance, and understand your profit/loss position.',
  },
  {
    question: 'How does the stock average calculator work?',
    answer: 'The calculator takes your initial investment (price and quantity) and new investment details, then computes the weighted average price across all your shares.',
  },
  {
    question: 'Can I use this for multiple stock purchases?',
    answer: 'This calculator handles two purchases, but for multiple purchases, you can use it iteratively - first calculate the average of your first two purchases, then use that result as your "initial" investment for the next calculation.',
  },
];

export default function StockAveragePage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Stock Average Calculator</h1>
          <p className="text-lg text-gray-600">
            Calculate the average price of your stock holdings when adding new purchases.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <StockAverage />
          </div>
          <div className="lg:col-span-1">
            <AdSenseSlot adSlot="2147483652" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Calculate Stock Average Price?</h2>
          <p className="text-gray-700 mb-4">
            Understanding your average stock price is crucial for effective portfolio management. When you buy additional shares at different prices,
            calculating the weighted average helps you determine your true cost basis and make informed investment decisions.
          </p>
          <p className="text-gray-700">
            This calculator helps you track your investment performance, assess profit/loss scenarios, and maintain better control over your stock holdings.
            Whether you're a long-term investor or active trader, knowing your average price is essential for strategic planning.
          </p>
        </div>

        <AdSenseSlot adSlot="2147483653" />

        <FAQ items={faqItems} />
      </div>
    </main>
  );
}
