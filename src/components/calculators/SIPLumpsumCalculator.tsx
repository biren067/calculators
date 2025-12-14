'use client';

import { useState } from 'react';
import { sipWithLumpsum } from '@/lib/calculators';
import { formatCurrency } from '@/lib/formatters';

const SIPLumpsumCalculator: React.FC = () => {
  const [monthly, setMonthly] = useState('10000');
  const [lumpsum, setLumpsum] = useState('100000');
  const [rate, setRate] = useState('12');
  const [years, setYears] = useState('5');
  const [result, setResult] = useState<{ sipAmount: number; lumpsumAmount: number; totalAmount: number } | null>(null);

  const handleCalculate = () => {
    if (monthly && lumpsum && rate && years) {
      const res = sipWithLumpsum(
        parseFloat(monthly),
        parseFloat(lumpsum),
        parseFloat(rate),
        parseFloat(years)
      );
      setResult(res);
    }
  };

  const totalInvested = parseFloat(lumpsum) + parseFloat(monthly) * 12 * parseInt(years);
  const totalGains = result ? result.totalAmount - totalInvested : null;

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Input Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">SIP + Lumpsum Calculator</h2>
        <p className="text-sm text-gray-600 mb-4">Combined investment strategy</p>

        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Monthly SIP (₹)
              </label>
              <input
                type="number"
                value={monthly}
                onChange={(e) => setMonthly(e.target.value)}
                placeholder="e.g., 10000"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Lumpsum (₹)
              </label>
              <input
                type="number"
                value={lumpsum}
                onChange={(e) => setLumpsum(e.target.value)}
                placeholder="e.g., 100000"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Annual Return (%)
              </label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="e.g., 12"
                step="0.1"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>
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
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-200 active:scale-95 shadow-lg"
        >
          Calculate Returns
        </button>
      </div>

      {/* Results */}
      {result && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300">
              <p className="text-sm text-gray-600 font-semibold mb-2">From SIP</p>
              <p className="text-2xl font-bold text-blue-700">
                {formatCurrency(result.sipAmount)}
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-300">
              <p className="text-sm text-gray-600 font-semibold mb-2">From Lumpsum</p>
              <p className="text-2xl font-bold text-purple-700">
                {formatCurrency(result.lumpsumAmount)}
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border-2 border-indigo-300">
              <p className="text-sm text-gray-600 font-semibold mb-2">Total Amount</p>
              <p className="text-2xl font-bold text-indigo-700">
                {formatCurrency(result.totalAmount)}
              </p>
            </div>
          </div>

          {totalGains !== null && (
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-gray-300">
                <p className="text-sm text-gray-600 font-semibold mb-2">Total Invested</p>
                <p className="text-2xl font-bold text-gray-700">
                  {formatCurrency(totalInvested)}
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300">
                <p className="text-sm text-gray-600 font-semibold mb-2">Total Gains</p>
                <p className="text-2xl font-bold text-green-700">
                  {formatCurrency(totalGains)}
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SIPLumpsumCalculator;
