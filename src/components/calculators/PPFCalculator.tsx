'use client';

import { useState } from 'react';
import { ppfMaturity } from '@/lib/calculators';
import { formatCurrency } from '@/lib/formatters';

const PPFCalculator: React.FC = () => {
  const [annual, setAnnual] = useState('50000');
  const [years, setYears] = useState('15');
  const [rate, setRate] = useState('7.1');
  const [result, setResult] = useState<{ maturityAmount: number; totalInvested: number; totalInterest: number } | null>(null);

  const handleCalculate = () => {
    if (annual && years) {
      const res = ppfMaturity(
        parseFloat(annual),
        parseInt(years),
        parseFloat(rate)
      );
      setResult(res);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Input Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">PPF Calculator</h2>
        <p className="text-sm text-gray-600 mb-4">Public Provident Fund Maturity Calculator</p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Annual Contribution (₹)
            </label>
            <input
              type="number"
              value={annual}
              onChange={(e) => setAnnual(e.target.value)}
              placeholder="e.g., 50000"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">Maximum: ₹1,50,000 per year</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Investment Period (Years)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="e.g., 15"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">Minimum: 15 years</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="e.g., 7.1"
              step="0.1"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3 rounded-lg transition-all duration-200 active:scale-95 shadow-lg"
        >
          Calculate Maturity
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Total Invested</p>
            <p className="text-2xl font-bold text-green-700">
              {formatCurrency(result.totalInvested)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border-2 border-emerald-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Interest Earned</p>
            <p className="text-2xl font-bold text-emerald-700">
              {formatCurrency(result.totalInterest)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border-2 border-teal-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Maturity Amount</p>
            <p className="text-2xl font-bold text-teal-700">
              {formatCurrency(result.maturityAmount)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PPFCalculator;
