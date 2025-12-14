'use client';

import { useState } from 'react';
import { calculateEMI } from '@/lib/calculators';
import { formatCurrency, formatNumber } from '@/lib/formatters';

const EMICalculator: React.FC = () => {
  const [principal, setPrincipal] = useState('500000');
  const [rate, setRate] = useState('8.5');
  const [months, setMonths] = useState('60');
  const [result, setResult] = useState<{ emi: number; totalAmount: number; totalInterest: number } | null>(null);

  const handleCalculate = () => {
    if (principal && rate && months) {
      const res = calculateEMI(
        parseFloat(principal),
        parseFloat(rate),
        parseInt(months)
      );
      setResult(res);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Input Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Loan Details</h2>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Loan Amount (₹)
            </label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="e.g., 500000"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
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
              placeholder="e.g., 8.5"
              step="0.01"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Loan Period (Months)
            </label>
            <input
              type="number"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              placeholder="e.g., 60"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-lg transition-all duration-200 active:scale-95 shadow-lg"
        >
          Calculate EMI
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Monthly EMI</p>
            <p className="text-2xl font-bold text-orange-700">
              {formatCurrency(result.emi)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Total Interest</p>
            <p className="text-2xl font-bold text-red-700">
              {formatCurrency(result.totalInterest)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Total Amount</p>
            <p className="text-2xl font-bold text-purple-700">
              {formatCurrency(result.totalAmount)}
            </p>
          </div>
        </div>
      )}

      {/* Summary Table */}
      {result && (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">EMI Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-semibold">Loan Amount</span>
              <span className="text-gray-800 font-bold">{formatCurrency(parseFloat(principal))}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-semibold">Interest Rate</span>
              <span className="text-gray-800 font-bold">{rate}% per annum</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-semibold">Tenure</span>
              <span className="text-gray-800 font-bold">{months} months ({Math.round(parseInt(months) / 12)} years)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border-2 border-orange-200">
              <span className="text-gray-700 font-semibold">Monthly EMI</span>
              <span className="text-orange-700 font-bold text-lg">{formatCurrency(result.emi)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EMICalculator;
