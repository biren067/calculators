'use client';

import { useState } from 'react';
import { compoundInterest, compoundAmount } from '@/lib/calculators';
import { formatCurrency } from '@/lib/formatters';
import Pagination from '@/components/common/Pagination';

interface YearData {
  year: number;
  principal: number;
  interest: number;
  total: number;
}

const CompoundInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState('100000');
  const [rate, setRate] = useState('8');
  const [time, setTime] = useState('5');
  const [frequency, setFrequency] = useState('1');
  const [yearData, setYearData] = useState<YearData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleCalculate = () => {
    if (principal && rate && time) {
      const p = parseFloat(principal);
      const r = parseFloat(rate);
      const t = parseInt(time);
      const f = parseInt(frequency);

      const data: YearData[] = [];

      for (let year = 1; year <= t; year++) {
        const yearAmount = compoundAmount(p, r, year, f);
        const yearInterest = yearAmount - p;

        data.push({
          year,
          principal: p,
          interest: yearInterest,
          total: yearAmount,
        });
      }

      setYearData(data);
      setCurrentPage(1);
    }
  };

  const totalPages = Math.ceil(yearData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = yearData.slice(startIndex, startIndex + itemsPerPage);
  const lastYear = yearData[yearData.length - 1];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Input Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Investment Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="e.g., 8"
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
              placeholder="e.g., 5"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Compounding Frequency
            </label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
            >
              <option value="1">Annually</option>
              <option value="2">Semi-Annually</option>
              <option value="4">Quarterly</option>
              <option value="12">Monthly</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full mt-6 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-200 active:scale-95 shadow-lg"
        >
          Calculate Growth
        </button>
      </div>

      {/* Summary Cards */}
      {lastYear && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border-2 border-indigo-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Principal</p>
            <p className="text-2xl font-bold text-indigo-700">
              {formatCurrency(lastYear.principal)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Interest Earned</p>
            <p className="text-2xl font-bold text-green-700">
              {formatCurrency(lastYear.interest)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Final Amount</p>
            <p className="text-2xl font-bold text-purple-700">
              {formatCurrency(lastYear.total)}
            </p>
          </div>
        </div>
      )}

      {/* Year-by-Year Breakdown */}
      {yearData.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Year-by-Year Growth</h3>

          {/* Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-gray-100 to-gray-200 border-b-2 border-gray-300">
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Year</th>
                  <th className="px-4 py-3 text-right font-bold text-gray-700">Principal</th>
                  <th className="px-4 py-3 text-right font-bold text-gray-700">Interest</th>
                  <th className="px-4 py-3 text-right font-bold text-gray-700">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((data, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 transition-colors hover:bg-gray-50 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-800">{data.year}</td>
                    <td className="px-4 py-3 text-right text-indigo-600 font-semibold">
                      {formatCurrency(data.principal)}
                    </td>
                    <td className="px-4 py-3 text-right text-green-600 font-semibold">
                      {formatCurrency(data.interest)}
                    </td>
                    <td className="px-4 py-3 text-right text-purple-600 font-semibold">
                      {formatCurrency(data.total)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              totalItems={yearData.length}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CompoundInterestCalculator;
