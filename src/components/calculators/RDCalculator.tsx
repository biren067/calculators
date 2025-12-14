'use client';

import { useState } from 'react';
import { rdMaturity } from '@/lib/calculators';
import { formatCurrency } from '@/lib/formatters';

const RDCalculator: React.FC = () => {
  const [monthly, setMonthly] = useState('5000');
  const [rate, setRate] = useState('6');
  const [months, setMonths] = useState('60');
  const [frequency, setFrequency] = useState('4');
  const [result, setResult] = useState<{ maturityAmount: number; totalInterest: number } | null>(null);

  const handleCalculate = () => {
    if (monthly && rate && months) {
      const res = rdMaturity(
        parseFloat(monthly),
        parseFloat(rate),
        parseInt(months),
        parseInt(frequency)
      );
      setResult(res);
    }
  };

  const totalInvested = parseFloat(monthly) * parseInt(months);

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Input Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recurring Deposit Calculator</h2>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Monthly Deposit (₹)
            </label>
            <input
              type="number"
              value={monthly}
              onChange={(e) => setMonthly(e.target.value)}
              placeholder="e.g., 5000"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
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
              placeholder="e.g., 6"
              step="0.01"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Period (Months)
              </label>
              <input
                type="number"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                placeholder="e.g., 60"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Compounding
              </label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none bg-white"
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
          className="w-full bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 rounded-lg transition-all duration-200 active:scale-95 shadow-lg"
        >
          Calculate Maturity
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border-2 border-pink-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Total Invested</p>
            <p className="text-2xl font-bold text-pink-700">
              {formatCurrency(totalInvested)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-xl border-2 border-rose-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Interest Earned</p>
            <p className="text-2xl font-bold text-rose-700">
              {formatCurrency(result.totalInterest)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Maturity Amount</p>
            <p className="text-2xl font-bold text-red-700">
              {formatCurrency(result.maturityAmount)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RDCalculator;
