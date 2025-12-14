/**
 * Number and Currency Formatting Utilities
 * Provides reusable formatting functions for calculations and display
 */

/**
 * Format a number with comma separators
 * Example: 1000000 → "1,000,000"
 */
export const formatNumber = (num: number | string): string => {
  const number = typeof num === 'string' ? parseFloat(num) : num;
  
  if (isNaN(number)) return '0';
  
  // Split into integer and decimal parts
  const [integerPart, decimalPart] = number.toFixed(2).split('.');
  
  // Add commas to integer part
  const withCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  // Combine back
  return decimalPart ? `${withCommas}.${decimalPart}` : withCommas;
};

/**
 * Remove formatting from a number string
 * Example: "1,000,000" → 1000000
 */
export const unformatNumber = (formatted: string): number => {
  return parseFloat(formatted.replace(/,/g, ''));
};

/**
 * Format a number as currency in INR (₹)
 * Example: 1000000 → "₹ 1,000,000.00"
 */
export const formatCurrency = (num: number | string): string => {
  const number = typeof num === 'string' ? parseFloat(num) : num;
  
  if (isNaN(number)) return '₹ 0.00';
  
  const formattedNum = formatNumber(number.toFixed(2));
  return `₹ ${formattedNum}`;
};

/**
 * Format percentage with fixed decimal places
 * Example: 12.5 → "12.50%"
 */
export const formatPercentage = (num: number | string, decimals: number = 2): string => {
  const number = typeof num === 'string' ? parseFloat(num) : num;
  
  if (isNaN(number)) return '0.00%';
  
  return `${number.toFixed(decimals)}%`;
};

/**
 * Round number to specific decimal places
 */
export const roundNumber = (num: number, decimals: number = 2): number => {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

/**
 * Abbreviate large numbers
 * Example: 1000000 → "10L" (in Indian format)
 */
export const abbreviateNumber = (num: number): string => {
  if (num >= 10000000) return (num / 10000000).toFixed(1) + 'Cr';
  if (num >= 100000) return (num / 100000).toFixed(1) + 'L';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
};
