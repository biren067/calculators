'use client';

import { useState } from 'react';
import { power, sqrt, factorial, logarithm, sine, cosine, tangent } from '@/lib/calculators';

const ScientificCalculator: React.FC = () => {
  const [input, setInput] = useState('0');
  const [result, setResult] = useState<number | null>(null);

  const handleInput = (value: string) => {
    setInput(input === '0' ? value : input + value);
  };

  const handleClear = () => {
    setInput('0');
    setResult(null);
  };

  const handleBasicOperation = (operator: string) => {
    setInput(input + ` ${operator} `);
  };

  const handleEvaluate = () => {
    try {
      const calculation = input
        .replace(/√/g, 'Math.sqrt')
        .replace(/\^/g, '**')
        .replace(/π/g, String(Math.PI))
        .replace(/e/g, String(Math.E));
      
      const evalResult = eval(calculation);
      setResult(evalResult);
      setInput(String(evalResult));
    } catch {
      setInput('Error');
    }
  };

  const handleSquare = () => {
    const num = parseFloat(input);
    const res = power(num, 2);
    setResult(res);
    setInput(String(res));
  };

  const handleSqrt = () => {
    const num = parseFloat(input);
    const res = sqrt(num);
    setResult(res);
    setInput(String(res));
  };

  const handleFactorial = () => {
    const num = parseInt(input);
    const res = factorial(num);
    setResult(res);
    setInput(String(res));
  };

  const handleLog = () => {
    const num = parseFloat(input);
    const res = logarithm(num, 10);
    setResult(res);
    setInput(String(res));
  };

  const handleSin = () => {
    const num = parseFloat(input);
    const res = sine(num);
    setResult(res);
    setInput(String(res.toFixed(4)));
  };

  const handleCos = () => {
    const num = parseFloat(input);
    const res = cosine(num);
    setResult(res);
    setInput(String(res.toFixed(4)));
  };

  const handleTan = () => {
    const num = parseFloat(input);
    const res = tangent(num);
    setResult(res);
    setInput(String(res.toFixed(4)));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Scientific Calculator</h1>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full bg-white px-4 py-3 rounded text-right text-2xl font-bold text-gray-800 border border-gray-300"
        />
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        <button onClick={handleClear} className="col-span-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold">
          Clear
        </button>
        <button onClick={() => handleInput('.')} className="bg-gray-300 hover:bg-gray-400 py-2 rounded">
          .
        </button>
        <button onClick={() => handleBasicOperation('/')} className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">
          ÷
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {['7', '8', '9', '*'].map((btn) => (
          <button
            key={btn}
            onClick={() => btn === '*' ? handleBasicOperation('*') : handleInput(btn)}
            className={`py-3 rounded font-semibold ${btn === '*' ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {btn === '*' ? '×' : btn}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {['4', '5', '6', '-'].map((btn) => (
          <button
            key={btn}
            onClick={() => btn === '-' ? handleBasicOperation('-') : handleInput(btn)}
            className={`py-3 rounded font-semibold ${btn === '-' ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {['1', '2', '3', '+'].map((btn) => (
          <button
            key={btn}
            onClick={() => btn === '+' ? handleBasicOperation('+') : handleInput(btn)}
            className={`py-3 rounded font-semibold ${btn === '+' ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        <button onClick={() => handleInput('0')} className="col-span-2 bg-gray-200 hover:bg-gray-300 py-3 rounded font-semibold">
          0
        </button>
        <button onClick={() => handleInput('(')} className="bg-gray-200 hover:bg-gray-300 py-3 rounded font-semibold">
          (
        </button>
        <button onClick={() => handleInput(')')} className="bg-gray-200 hover:bg-gray-300 py-3 rounded font-semibold">
          )
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        <button onClick={handleSqrt} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm font-semibold">
          √
        </button>
        <button onClick={handleSquare} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm font-semibold">
          x²
        </button>
        <button onClick={handleFactorial} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm font-semibold">
          n!
        </button>
        <button onClick={handleLog} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm font-semibold">
          log
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        <button onClick={handleSin} className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded text-sm font-semibold">
          sin
        </button>
        <button onClick={handleCos} className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded text-sm font-semibold">
          cos
        </button>
        <button onClick={handleTan} className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded text-sm font-semibold">
          tan
        </button>
        <button onClick={() => handleBasicOperation('^')} className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded text-sm font-semibold">
          ^
        </button>
      </div>

      <button
        onClick={handleEvaluate}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded text-lg"
      >
        =
      </button>
    </div>
  );
};

export default ScientificCalculator;
