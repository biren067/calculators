'use client';

import { useState } from 'react';
import { formatNumber } from '@/lib/formatters';

interface CalculationHistory {
  expression: string;
  result: number;
  timestamp: number;
}

const BasicCalculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [expression, setExpression] = useState('');
  const [history, setHistory] = useState<CalculationHistory[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleDigitClick = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const handleOperation = (nextOp: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
      setExpression(display + ' ' + nextOp);
    } else if (operation) {
      const result = calculate(previousValue, inputValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
      setExpression(result + ' ' + nextOp);
    }

    setWaitingForOperand(true);
    setOperation(nextOp);
  };

  const calculate = (prev: number, current: number, op: string): number => {
    let result = 0;
    switch (op) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = current !== 0 ? prev / current : 0;
        break;
      case '%':
        result = prev % current;
        break;
      default:
        result = current;
    }
    return Math.round(result * 1000000) / 1000000; // Fix floating point errors
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const result = calculate(previousValue, inputValue, operation);
      const fullExpression = expression + ' ' + inputValue + ' = ' + result;

      setDisplay(String(result));
      setHistory([
        ...history,
        {
          expression: fullExpression,
          result,
          timestamp: Date.now(),
        },
      ]);

      setPreviousValue(null);
      setOperation(null);
      setExpression('');
      setWaitingForOperand(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setExpression('');
    setWaitingForOperand(false);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const getOperationSymbol = (op: string): string => {
    const symbols: Record<string, string> = {
      '+': '+',
      '-': '−',
      '*': '×',
      '/': '÷',
      '%': '%',
    };
    return symbols[op] || op;
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calculator */}
        <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg border border-blue-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Calculator</h2>

          {/* Expression Display */}
          {expression && (
            <div className="bg-white p-3 rounded-lg mb-2 text-right text-sm text-gray-600 border border-gray-300">
              {expression} {display}
            </div>
          )}

          {/* Result Display */}
          <div className="bg-white p-4 rounded-lg mb-4">
            <input
              type="text"
              value={formatNumber(display)}
              readOnly
              className="w-full px-4 py-4 text-right text-3xl font-bold text-gray-800 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Calculator Buttons */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            <button
              onClick={handleClear}
              className="col-span-2 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95"
            >
              Clear
            </button>
            <button
              onClick={handleBackspace}
              className="bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95"
            >
              ←
            </button>
            <button
              onClick={() => handleOperation('/')}
              className="bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95"
            >
              ÷
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-4">
            {['7', '8', '9'].map((num) => (
              <button
                key={num}
                onClick={() => handleDigitClick(num)}
                className="bg-white hover:bg-gray-100 border-2 border-gray-300 py-3 rounded-lg font-semibold text-lg transition-all duration-200 active:scale-95"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleOperation('*')}
              className="bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-4">
            {['4', '5', '6'].map((num) => (
              <button
                key={num}
                onClick={() => handleDigitClick(num)}
                className="bg-white hover:bg-gray-100 border-2 border-gray-300 py-3 rounded-lg font-semibold text-lg transition-all duration-200 active:scale-95"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleOperation('-')}
              className="bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95"
            >
              −
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-4">
            {['1', '2', '3'].map((num) => (
              <button
                key={num}
                onClick={() => handleDigitClick(num)}
                className="bg-white hover:bg-gray-100 border-2 border-gray-300 py-3 rounded-lg font-semibold text-lg transition-all duration-200 active:scale-95"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleOperation('+')}
              className="bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95"
            >
              +
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => handleDigitClick('0')}
              className="col-span-2 bg-white hover:bg-gray-100 border-2 border-gray-300 py-3 rounded-lg font-semibold text-lg transition-all duration-200 active:scale-95"
            >
              0
            </button>
            <button
              onClick={handleDecimal}
              className="bg-white hover:bg-gray-100 border-2 border-gray-300 py-3 rounded-lg font-semibold text-lg transition-all duration-200 active:scale-95"
            >
              .
            </button>
            <button
              onClick={handleEquals}
              className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95"
            >
              =
            </button>
          </div>
        </div>

        {/* History Sidebar */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">History</h3>
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800"
            >
              {showHistory ? 'Hide' : 'Show'}
            </button>
          </div>

          {showHistory && (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {history.length === 0 ? (
                <p className="text-sm text-gray-500 italic">No calculations yet</p>
              ) : (
                <>
                  {history
                    .slice()
                    .reverse()
                    .map((item, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded-lg border border-gray-200 text-sm"
                      >
                        <p className="text-gray-700 font-mono">{item.expression}</p>
                      </div>
                    ))}
                  {history.length > 0 && (
                    <button
                      onClick={clearHistory}
                      className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-95"
                    >
                      Clear History
                    </button>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicCalculator;
