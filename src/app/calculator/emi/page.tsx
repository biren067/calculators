import { Metadata } from 'next';
import EMICalculator from '@/components/calculators/EMICalculator';
import FAQ from '@/components/common/FAQ';
import AdSenseSlot from '@/components/common/AdSenseSlot';

export const metadata: Metadata = {
  title: 'EMI Calculator | Loan Payment Calculator',
  description: 'Calculate your monthly EMI (Equated Monthly Installment) for loans, mortgages, and auto loans. Free online calculator.',
  keywords: ['EMI calculator', 'loan calculator', 'monthly payment', 'mortgage calculator'],
  openGraph: {
    title: 'EMI Calculator',
    description: 'Calculate your monthly loan payment easily.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'What is EMI?',
    answer: 'EMI (Equated Monthly Installment) is a fixed payment amount that borrowers must pay monthly to repay a loan. It includes both principal and interest.',
  },
  {
    question: 'How is EMI calculated?',
    answer: 'EMI is calculated using the formula: EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1], where P is loan amount, r is monthly rate, and n is number of months.',
  },
  {
    question: 'Can EMI be reduced?',
    answer: 'Yes, EMI can be reduced by paying more principal upfront, increasing your down payment, or choosing a longer loan tenure (though this increases total interest).',
  },
  {
    question: 'What is the difference between home loan and auto loan EMI?',
    answer: 'Home loan EMI is typically for longer periods (15-30 years) with lower interest rates, while auto loan EMI is for shorter periods (3-5 years) with higher rates.',
  },
];

export default function EMIPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">EMI Calculator</h1>
          <p className="text-lg text-gray-600">
            Calculate your monthly EMI for any loan. Understand your payment schedule and total interest cost.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <EMICalculator />
          </div>
          <div className="lg:col-span-1">
            <AdSenseSlot adSlot="2147483656" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding EMI</h2>
          <p className="text-gray-700 mb-4">
            EMI is a crucial concept in borrowing. It helps you understand your monthly financial commitment and plan your budget accordingly.
            Each EMI payment includes a portion for the principal and a portion for interest.
          </p>
          <p className="text-gray-700">
            In the early months, a larger portion goes toward interest, while later payments increasingly go toward principal repayment.
            This is why understanding your EMI helps in making better borrowing decisions.
          </p>
        </div>

        <AdSenseSlot adSlot="2147483657" />

        <FAQ items={faqItems} />
      </div>
    </main>
  );
}
