'use client';

import { useState } from 'react';
import { sipReturns, compoundAmount } from '@/lib/calculators';
import { formatCurrency, formatNumber } from '@/lib/formatters';
import Pagination from '@/components/common/Pagination';

type Mode = 'sip' | 'lumpsum' | 'combined';

interface YearData {
  year: number;
  invested: number;
  interest: number;
  total: number;
}

const SIPCalculator: React.FC = () => {
  const [mode, setMode] = useState<Mode>('sip');
  const [monthly, setMonthly] = useState('');
  const [lumpsum, setLumpsum] = useState('');
  const [rate, setRate] = useState('12');
  const [years, setYears] = useState('');
  const [yearData, setYearData] = useState<YearData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const calculateSIPData = (): YearData[] => {
    if (!monthly || !years || !rate) return [];

    const m = parseFloat(monthly);
    const r = parseFloat(rate);
    const y = parseInt(years);
    const monthlyRate = r / 12 / 100;

    const data: YearData[] = [];

    for (let year = 1; year <= y; year++) {
      const months = year * 12;
      const sipAmount = sipReturns(m, r / 12, months);
      const totalInvested = m * months;
      const interest = sipAmount - totalInvested;

      data.push({
        year,
        invested: totalInvested,
        interest,
        total: sipAmount,
      });
    }

    return data;
  };

  const calculateLumpsumData = (): YearData[] => {
    if (!lumpsum || !years || !rate) return [];

    const principal = parseFloat(lumpsum);
    const r = parseFloat(rate);
    const y = parseInt(years);

    const data: YearData[] = [];

    for (let year = 1; year <= y; year++) {
      const total = compoundAmount(principal, r, year);
      const interest = total - principal;

      data.push({
        year,
        invested: principal,
        interest,
        total,
      });
    }

    return data;
  };

  const calculateCombinedData = (): YearData[] => {
    if (!monthly || !lumpsum || !years || !rate) return [];

    const m = parseFloat(monthly);
    const principal = parseFloat(lumpsum);
    const r = parseFloat(rate);
    const y = parseInt(years);

    const data: YearData[] = [];

    for (let year = 1; year <= y; year++) {
      const months = year * 12;
      const sipAmount = sipReturns(m, r / 12, months);
      const lumpsumAmount = compoundAmount(principal, r, year);
      const totalInvested = principal + m * months;
      const total = sipAmount + lumpsumAmount;
      const interest = total - totalInvested;

      data.push({
        year,
        invested: totalInvested,
        interest,
        total,
      });
    }

    return data;
  };

  const handleCalculate = () => {
    let data: YearData[] = [];

    if (mode === 'sip') {
      data = calculateSIPData();
    } else if (mode === 'lumpsum') {
      data = calculateLumpsumData();
    } else {
      data = calculateCombinedData();
    }

    setYearData(data);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(yearData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = yearData.slice(startIndex, startIndex + itemsPerPage);

  const lastYear = yearData[yearData.length - 1];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Mode Selection */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg border border-green-200 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Select Calculation Mode</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(['sip', 'lumpsum', 'combined'] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => {
                setMode(m);
                setYearData([]);
              }}
              className={`p-4 rounded-lg font-semibold transition-all duration-200 text-center ${
                mode === m
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-green-300 hover:bg-green-50'
              }`}
            >
              {m === 'sip' && 'SIP Only'}
              {m === 'lumpsum' && 'Lump Sum Only'}
              {m === 'combined' && 'SIP + Lump Sum'}
            </button>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Investment Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* SIP Input */}
          {(mode === 'sip' || mode === 'combined') && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Monthly SIP (₹)
              </label>
              <input
                type="number"
                value={monthly}
                onChange={(e) => setMonthly(e.target.value)}
                placeholder="e.g., 10000"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
            </div>
          )}

          {/* Lump Sum Input */}
          {(mode === 'lumpsum' || mode === 'combined') && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Lump Sum Amount (₹)
              </label>
              <input
                type="number"
                value={lumpsum}
                onChange={(e) => setLumpsum(e.target.value)}
                placeholder="e.g., 100000"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
            </div>
          )}

          {/* Annual Return */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Expected Annual Return (%)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="e.g., 12"
              step="0.1"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Investment Period */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Investment Period (Years)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="e.g., 5"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full mt-6 bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 rounded-lg transition-all duration-200 active:scale-95 shadow-lg"
        >
          Calculate Growth
        </button>
      </div>

      {/* Summary */}
      {lastYear && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Total Invested</p>
            <p className="text-2xl font-bold text-blue-700">
              {formatCurrency(lastYear.invested)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Total Interest Earned</p>
            <p className="text-2xl font-bold text-green-700">
              {formatCurrency(lastYear.interest)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-300">
            <p className="text-sm text-gray-600 font-semibold mb-2">Total Value</p>
            <p className="text-2xl font-bold text-purple-700">
              {formatCurrency(lastYear.total)}
            </p>
          </div>
        </div>
      )}

      {/* Year-by-Year Breakdown */}
      {yearData.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Year-by-Year Breakdown</h3>

          {/* Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-gray-100 to-gray-200 border-b-2 border-gray-300">
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Year</th>
                  <th className="px-4 py-3 text-right font-bold text-gray-700">Invested</th>
                  <th className="px-4 py-3 text-right font-bold text-gray-700">Interest</th>
                  <th className="px-4 py-3 text-right font-bold text-gray-700">Total Value</th>
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
                    <td className="px-4 py-3 text-right text-blue-600 font-semibold">
                      {formatCurrency(data.invested)}
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

export default SIPCalculator;
