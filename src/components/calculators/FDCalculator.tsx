'use client';

import { useState } from 'react';
import { fdMaturity } from '@/lib/calculators';
import { formatCurrency } from '@/lib/formatters';

const FDCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState('100000');
  const [rate, setRate] = useState('6.5');
  const [years, setYears] = useState('5');
  const [frequency, setFrequency] = useState('4');
  const [result, setResult] = useState<{ maturityAmount: number; totalInterest: number } | null>(null);

  const handleCalculate = () => {
    if (principal && rate && years) {
      const res = fdMaturity(
        parseFloat(principal),
        parseFloat(rate),
        parseFloat(years),
        parseInt(frequency)
      );
      setResult(res);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Input Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Fixed Deposit Calculator</h2>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Principal Amount (₹)
            </label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="e.g., 100000"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="e.g., 6.5"
              step="0.01"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Period (Years)
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                placeholder="e.g., 5"
                step="0.5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Compounding
              </label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none bg-white"
              >
                <option value="1">Annually</option>
                <option value="2">Semi-Annually</option>
                <option value="4">Quarterly</option>
                <option value="12">Monthly</option>
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-gradient-to-br from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white font-bold py-3 rounded-lg transition-all duration-200 active:scale-95 shadow-lg"
        >
          Calculate Maturity
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-violet-50 to-violet-100 p-6 rounded-xl border-2 border-violet-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Principal</p>
            <p className="text-2xl font-bold text-violet-700">
              {formatCurrency(parseFloat(principal))}
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Interest Earned</p>
            <p className="text-2xl font-bold text-purple-700">
              {formatCurrency(result.totalInterest)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border-2 border-pink-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Maturity Amount</p>
            <p className="text-2xl font-bold text-pink-700">
              {formatCurrency(result.maturityAmount)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FDCalculator;
