'use client';
import React, { useState, useEffect } from 'react';

function StockAverage() {
  const [stockPrice1, setStockPrice1] = useState('');
  const [noOfStock1, setNoOfStock1] = useState('');
  const [stockPrice2, setStockPrice2] = useState('');
  const [noOfStock2, setNoOfStock2] = useState('');
  const [finalNoOfStock, setFinalNoOfStock] = useState('');
  const [totalInvestment, setTotalInvestment] = useState('');
  const [initialInvestment, setInitialInvestment] = useState('');
  const [newInvestment, setNewInvestment] = useState('');
  const [newAvg, setNewAvg] = useState('');

  useEffect(() => {
    if (stockPrice1 && noOfStock1) {
      const initial = parseFloat(stockPrice1) * parseFloat(noOfStock1);
      setInitialInvestment(initial.toFixed(2));
    } else {
      setInitialInvestment('');
    }
  }, [stockPrice1, noOfStock1]);

  useEffect(() => {
    if (stockPrice2 && noOfStock2) {
      const newInv = parseFloat(stockPrice2) * parseFloat(noOfStock2);
      setNewInvestment(newInv.toFixed(2));
    } else {
      setNewInvestment('');
    }
  }, [stockPrice2, noOfStock2]);

  const calculateInvestments = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("initialInvestment",initialInvestment);
    const totalInvestment = parseFloat(initialInvestment) + parseFloat(newInvestment);
    setTotalInvestment(totalInvestment.toFixed(2));
    const totalNoOfStocks = parseFloat(noOfStock1) + parseFloat(noOfStock2);
    const newAvg = totalInvestment / totalNoOfStocks;
    setNewAvg(newAvg.toFixed(2));
    setFinalNoOfStock(totalNoOfStocks.toFixed(2))
    console.log("TotalNoOfStrock",totalNoOfStocks);
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      

      <form onSubmit={calculateInvestments}>
        {/* Initial Investment Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Initial Investment</h2>
          <p className="text-gray-600 mb-4">Enter details for stocks you have already purchased.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Stock Price (₹)
              </label>
              <input
                type="number"
                value={stockPrice1}
                onChange={(e) => setStockPrice1(e.target.value)}
                placeholder="e.g., 100"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number of Stocks
              </label>
              <input
                type="number"
                value={noOfStock1}
                onChange={(e) => setNoOfStock1(e.target.value)}
                placeholder="e.g., 10"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              />
            </div>
          </div>

          {initialInvestment && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600 font-semibold">Initial Invested Amount</p>
              <p className="text-2xl font-bold text-green-700">₹{initialInvestment}</p>
            </div>
          )}
        </div>

        {/* New Investment Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">New Investment</h2>
          <p className="text-gray-600 mb-4">Enter details for your new stock purchase.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Stock Price (₹)
              </label>
              <input
                type="number"
                value={stockPrice2}
                onChange={(e) => setStockPrice2(e.target.value)}
                placeholder="e.g., 120"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number of Stocks
              </label>
              <input
                type="number"
                value={noOfStock2}
                onChange={(e) => setNoOfStock2(e.target.value)}
                placeholder="e.g., 5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              />
            </div>
          </div>

          {newInvestment && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-gray-600 font-semibold">New Invested Amount</p>
              <p className="text-2xl font-bold text-green-700">₹{newInvestment}</p>
            </div>
          )}
        </div>

        {/* Calculate Button */}
        <div className="text-center mb-6">
          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 rounded-lg transition-all duration-200 active:scale-95 shadow-lg"
          >
            Calculate Average Price
          </button>
        </div>

        {/* Results */}
        {(finalNoOfStock || totalInvestment || newAvg) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {finalNoOfStock && (
              <div className="bg-linear-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-300">
                <p className="text-sm text-gray-600 font-semibold mb-2">Total Stocks</p>
                <p className="text-2xl font-bold text-purple-700">{finalNoOfStock}</p>
              </div>
            )}
            {totalInvestment && (
              <div className="bg-linear-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-300">
                <p className="text-sm text-gray-600 font-semibold mb-2">Total Investment</p>
                <p className="text-2xl font-bold text-orange-700">₹{totalInvestment}</p>
              </div>
            )}
            {newAvg && (
              <div className="bg-linear-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-300">
                <p className="text-sm text-gray-600 font-semibold mb-2">Average Price</p>
                <p className="text-2xl font-bold text-red-700">₹{newAvg}</p>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default StockAverage;