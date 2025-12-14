'use client';

import { useState } from 'react';
import { cagr } from '@/lib/calculators';
import { formatCurrency, formatPercentage } from '@/lib/formatters';

const CAGRCalculator: React.FC = () => {
  const [beginValue, setBeginValue] = useState('100000');
  const [endValue, setEndValue] = useState('250000');
  const [years, setYears] = useState('5');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    if (beginValue && endValue && years) {
      const res = cagr(
        parseFloat(beginValue),
        parseFloat(endValue),
        parseFloat(years)
      );
      setResult(res);
    }
  };

  const gains = result !== null ? parseFloat(endValue) - parseFloat(beginValue) : null;

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Input Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Calculate CAGR</h2>
        <p className="text-sm text-gray-600 mb-4">Compound Annual Growth Rate</p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Beginning Value (₹)
            </label>
            <input
              type="number"
              value={beginValue}
              onChange={(e) => setBeginValue(e.target.value)}
              placeholder="e.g., 100000"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ending Value (₹)
            </label>
            <input
              type="number"
              value={endValue}
              onChange={(e) => setEndValue(e.target.value)}
              placeholder="e.g., 250000"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Number of Years
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="e.g., 5"
              step="0.5"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold py-3 rounded-lg transition-all duration-200 active:scale-95 shadow-lg"
        >
          Calculate CAGR
        </button>
      </div>

      {/* Results */}
      {result !== null && gains !== null && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border-2 border-teal-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">CAGR</p>
            <p className="text-3xl font-bold text-teal-700">
              {formatPercentage(result, 2)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl border-2 border-cyan-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Total Gain</p>
            <p className="text-2xl font-bold text-cyan-700">
              {formatCurrency(gains)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Time Period</p>
            <p className="text-2xl font-bold text-blue-700">
              {years} years
            </p>
          </div>
        </div>
      )}

      {/* Formula Info */}
      {result !== null && (
        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-300">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Formula:</span> CAGR = (Ending Value / Beginning Value)^(1/Years) - 1
          </p>
        </div>
      )}
    </div>
  );
};

export default CAGRCalculator;
