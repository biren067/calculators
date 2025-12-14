'use client';

import { useState } from 'react';
import { stockReturns } from '@/lib/calculators';
import { formatCurrency, formatPercentage } from '@/lib/formatters';

const StockReturnsCalculator: React.FC = () => {
  const [buyPrice, setBuyPrice] = useState('500');
  const [sellPrice, setSellPrice] = useState('750');
  const [quantity, setQuantity] = useState('10');
  const [result, setResult] = useState<{ profit: number; profitPercentage: number } | null>(null);

  const handleCalculate = () => {
    if (buyPrice && sellPrice && quantity) {
      const res = stockReturns(
        parseFloat(buyPrice),
        parseFloat(sellPrice),
        parseInt(quantity)
      );
      setResult(res);
    }
  };

  const buyTotal = buyPrice && quantity ? parseFloat(buyPrice) * parseInt(quantity) : 0;
  const sellTotal = sellPrice && quantity ? parseFloat(sellPrice) * parseInt(quantity) : 0;

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Input Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Calculate Stock Returns</h2>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Buy Price per Share (₹)
            </label>
            <input
              type="number"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value)}
              placeholder="e.g., 500"
              step="0.01"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Sell Price per Share (₹)
            </label>
            <input
              type="number"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
              placeholder="e.g., 750"
              step="0.01"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Number of Shares
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="e.g., 10"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-gradient-to-br from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-3 rounded-lg transition-all duration-200 active:scale-95 shadow-lg"
        >
          Calculate Returns
        </button>
      </div>

      {/* Results */}
      {result && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300">
              <p className="text-sm text-gray-600 font-semibold mb-2">Total Investment</p>
              <p className="text-2xl font-bold text-blue-700">
                {formatCurrency(buyTotal)}
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl border-2 border-cyan-300">
              <p className="text-sm text-gray-600 font-semibold mb-2">Total Returns</p>
              <p className="text-2xl font-bold text-cyan-700">
                {formatCurrency(sellTotal)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`bg-gradient-to-br p-6 rounded-xl border-2 ${
              result.profit >= 0
                ? 'from-green-50 to-green-100 border-green-300'
                : 'from-red-50 to-red-100 border-red-300'
            }`}>
              <p className="text-sm text-gray-600 font-semibold mb-2">Profit / Loss</p>
              <p className={`text-2xl font-bold ${result.profit >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                {result.profit >= 0 ? '+' : ''}{formatCurrency(result.profit)}
              </p>
            </div>
            <div className={`bg-gradient-to-br p-6 rounded-xl border-2 ${
              result.profitPercentage >= 0
                ? 'from-green-50 to-green-100 border-green-300'
                : 'from-red-50 to-red-100 border-red-300'
            }`}>
              <p className="text-sm text-gray-600 font-semibold mb-2">Return Percentage</p>
              <p className={`text-2xl font-bold ${result.profitPercentage >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                {result.profitPercentage >= 0 ? '+' : ''}{formatPercentage(result.profitPercentage, 2)}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StockReturnsCalculator;
