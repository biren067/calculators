import { Metadata } from 'next';
import BasicCalculator from '@/components/calculators/BasicCalculator';
import FAQ from '@/components/common/FAQ';
import AdSenseSlot from '@/components/common/AdSenseSlot';

export const metadata: Metadata = {
  title: 'Basic Calculator | Simple Online Calculator',
  description: 'Free simple online calculator for basic arithmetic operations. Easy to use with a clean interface.',
  keywords: ['calculator', 'basic calculator', 'online calculator', 'arithmetic'],
  openGraph: {
    title: 'Basic Calculator',
    description: 'Perform basic arithmetic calculations easily.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'How do I use the basic calculator?',
    answer: 'Simply click the number buttons to enter numbers, select an operation (+, -, ×, ÷), and click equals (=) to see the result.',
  },
  {
    question: 'Can I use decimal numbers?',
    answer: 'Yes, click the decimal point (.) button to add decimals to your numbers. You can perform calculations with decimal values.',
  },
  {
    question: 'What if I make a mistake?',
    answer: 'Use the backspace button (←) to remove the last digit, or click Clear to start over completely.',
  },
  {
    question: 'Can I perform continuous calculations?',
    answer: 'Yes, after you see a result, you can immediately perform another operation with the result as the starting value.',
  },
];

export default function BasicPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Basic Calculator</h1>
          <p className="text-lg text-gray-600">
            Simple and easy-to-use online calculator for everyday arithmetic calculations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <BasicCalculator />
          </div>
          <div className="lg:col-span-1">
            <AdSenseSlot adSlot="2147483660" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Simple Arithmetic Operations</h2>
          <p className="text-gray-700 mb-4">
            Our basic calculator supports all fundamental arithmetic operations: addition, subtraction, multiplication, and division.
            It's perfect for quick calculations in your daily life, whether for shopping, cooking, or quick math checks.
          </p>
          <p className="text-gray-700">
            With its clean and intuitive interface, anyone can use this calculator without any prior experience.
          </p>
        </div>

        <AdSenseSlot adSlot="2147483661" />

        <FAQ items={faqItems} />
      </div>
    </main>
  );
}
