'use client';

import { useState } from 'react';
import { simpleInterest } from '@/lib/calculators';
import { formatCurrency } from '@/lib/formatters';

const SimpleInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState('100000');
  const [rate, setRate] = useState('5');
  const [time, setTime] = useState('3');
  const [interest, setInterest] = useState<number | null>(null);

  const handleCalculate = () => {
    if (principal && rate && time) {
      const result = simpleInterest(
        parseFloat(principal),
        parseFloat(rate),
        parseFloat(time)
      );
      setInterest(result);
    }
  };

  const amount = interest !== null ? parseFloat(principal) + interest : null;

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Input Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Calculate Simple Interest</h2>

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
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">Formula: SI = (P × R × T) / 100</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Rate of Interest (% per annum)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="e.g., 5"
              step="0.1"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Time Period (Years)
            </label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="e.g., 3"
              step="0.5"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-200 active:scale-95 shadow-lg"
        >
          Calculate Interest
        </button>
      </div>

      {/* Results */}
      {interest !== null && amount && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Simple Interest</p>
            <p className="text-2xl font-bold text-blue-700">
              {formatCurrency(interest)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Total Amount (P + SI)</p>
            <p className="text-2xl font-bold text-green-700">
              {formatCurrency(amount)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleInterestCalculator;
