import { Metadata } from 'next';
import Link from 'next/link';
import AdSenseSlot from '@/components/common/AdSenseSlot';

export const metadata: Metadata = {
  title: 'Financial & Mathematical Calculators | Home',
  description: 'Access a complete suite of free online calculators for finance, investments, and mathematics. All tools run in your browser.',
  openGraph: {
    title: 'Financial & Mathematical Calculators',
    description: 'Free online calculators for all your needs',
    type: 'website',
  },
};

const calculators = [
  {
    name: 'Simple Interest Calculator',
    slug: 'simple-interest',
    description: 'Calculate simple interest on savings and loans',
    icon: '📊',
  },
  {
    name: 'Compound Interest Calculator',
    slug: 'compound-interest',
    description: 'See how money grows with compound interest',
    icon: '📈',
  },
  {
    name: 'SIP Calculator',
    slug: 'sip',
    description: 'Calculate Systematic Investment Plan returns',
    icon: '💰',
  },
  {
    name: 'SIP + Lumpsum Calculator',
    slug: 'sip-lumpsum',
    description: 'Combined SIP and lumpsum investment calculator',
    icon: '🎯',
  },
  {
    name: 'EMI Calculator',
    slug: 'emi',
    description: 'Calculate monthly EMI for loans',
    icon: '🏦',
  },
  {
    name: 'Stock Returns Calculator',
    slug: 'stock-returns',
    description: 'Calculate stock investment returns',
    icon: '📉',
  },
  {
    name: 'CAGR Calculator',
    slug: 'cagr',
    description: 'Calculate Compound Annual Growth Rate',
    icon: '📊',
  },
  {
    name: 'PPF Calculator',
    slug: 'ppf',
    description: 'Public Provident Fund maturity calculator',
    icon: '🏅',
  },
  {
    name: 'Fixed Deposit Calculator',
    slug: 'fd',
    description: 'Calculate FD maturity amount',
    icon: '🔒',
  },
  {
    name: 'Recurring Deposit Calculator',
    slug: 'rd',
    description: 'Calculate RD returns and maturity',
    icon: '💎',
  },
  {
    name: 'Scientific Calculator',
    slug: 'scientific',
    description: 'Advanced mathematical calculations',
    icon: '🔬',
  },
  {
    name: 'Basic Calculator',
    slug: 'basic',
    description: 'Simple arithmetic calculator',
    icon: '🧮',
  },
  {
    name: 'Stock Average',
    slug: 'stock-average',
    description: 'Average price of stock holdings',
    icon: '🧮',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Financial & Mathematical Calculators</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Free, accurate, and easy-to-use online calculators for all your financial planning and mathematical needs.
            All calculations are done in your browser—no data is stored.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#calculators" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
              Explore Calculators
            </a>
          </div>
        </section>

        <AdSenseSlot adSlot="2147483640" />

        {/* Features Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-3">🔒 Secure</h3>
              <p className="text-gray-600">All calculations are performed in your browser. Your data stays with you.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-green-600 mb-3">⚡ Fast</h3>
              <p className="text-gray-600">Instant results with no waiting time. Get answers immediately.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-purple-600 mb-3">📊 Accurate</h3>
              <p className="text-gray-600">Precise calculations using industry-standard formulas.</p>
            </div>
          </div>
        </section>

        {/* Calculators Grid */}
        <section id="calculators" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((calc) => (
              <Link
                key={calc.slug}
                href={`/calculator/${calc.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 group"
              >
                <div className="text-4xl mb-3">{calc.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2">{calc.name}</h3>
                <p className="text-gray-600 text-sm">{calc.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <AdSenseSlot adSlot="2147483641" />

        {/* Information Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Calculators?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Comprehensive Suite</h3>
              <p className="text-gray-700 mb-4">
                We provide a complete collection of financial and mathematical calculators covering all your needs—from simple interest to complex investment scenarios.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-3">Easy to Use</h3>
              <p className="text-gray-700 mb-4">
                Our intuitive interfaces make complex calculations simple. No technical knowledge required—just input your values and get instant results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-600 mb-3">Browser-Based</h3>
              <p className="text-gray-700 mb-4">
                No installation or sign-up required. Use our calculators anytime, anywhere, on any device with a web browser.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-600 mb-3">Always Free</h3>
              <p className="text-gray-700 mb-4">
                All our calculators are completely free to use. We believe everyone should have access to accurate financial tools.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Are the calculations accurate?</h3>
              <p className="text-gray-700">
                Yes, our calculators use industry-standard financial formulas. However, results are for educational and planning purposes.
                Always consult with a financial advisor for investment decisions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Is my data saved?</h3>
              <p className="text-gray-700">
                Yes, all calculations are performed locally in your browser. We don't store or transmit your data anywhere.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I use these calculators on mobile?</h3>
              <p className="text-gray-700">
                Yes, all our calculators are responsive and work perfectly on desktop, tablet, and mobile devices.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer calculator APIs?</h3>
              <p className="text-gray-700">
                Currently, we only provide web-based calculators. For API access or integration inquiries, please contact us directly.
              </p>
            </div>
          </div>
        </section>

        <AdSenseSlot adSlot="2147483642" />
      </div>
    </main>
  );
}
