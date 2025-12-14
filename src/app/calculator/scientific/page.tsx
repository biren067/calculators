import { Metadata } from 'next';
import ScientificCalculator from '@/components/calculators/ScientificCalculator';
import FAQ from '@/components/common/FAQ';
import AdSenseSlot from '@/components/common/AdSenseSlot';

export const metadata: Metadata = {
  title: 'Scientific Calculator | Advanced Math Calculator',
  description: 'Free online scientific calculator for complex mathematical calculations, trigonometry, logarithms, and more.',
  keywords: ['scientific calculator', 'math calculator', 'trigonometry', 'advanced math'],
  openGraph: {
    title: 'Scientific Calculator',
    description: 'Perform advanced mathematical calculations with our scientific calculator.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'What functions does this scientific calculator have?',
    answer: 'Our calculator includes basic operations, square root, squares, factorials, logarithms, trigonometric functions (sin, cos, tan), and power operations.',
  },
  {
    question: 'How do I use trigonometric functions?',
    answer: 'Enter an angle in degrees, then click the sin, cos, or tan button. The calculator will compute the trigonometric ratio.',
  },
  {
    question: 'What is a factorial?',
    answer: 'Factorial (n!) is the product of all positive integers up to n. For example, 5! = 5 × 4 × 3 × 2 × 1 = 120.',
  },
  {
    question: 'How do I calculate logarithms?',
    answer: 'Enter your number and click the log button to calculate the base-10 logarithm. You can also use the scientific calculator for natural logarithms.',
  },
];

export default function ScientificPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Scientific Calculator</h1>
          <p className="text-lg text-gray-600">
            Perform advanced mathematical calculations including trigonometry, logarithms, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <ScientificCalculator />
          </div>
          <div className="lg:col-span-1">
            <AdSenseSlot adSlot="2147483658" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Advanced Mathematical Computations</h2>
          <p className="text-gray-700 mb-4">
            Our scientific calculator is designed for students, engineers, and professionals who need to perform complex mathematical calculations.
            It supports a wide range of mathematical functions commonly used in science and engineering.
          </p>
          <p className="text-gray-700">
            Whether you're working on statistics, physics, engineering problems, or any advanced math, this calculator provides accurate results
            for your complex calculations.
          </p>
        </div>

        <AdSenseSlot adSlot="2147483659" />

        <FAQ items={faqItems} />
      </div>
    </main>
  );
}
