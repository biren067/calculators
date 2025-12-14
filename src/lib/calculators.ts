// Financial calculation utilities

export const simpleInterest = (principal: number, rate: number, time: number): number => {
  return (principal * rate * time) / 100;
};

export const compoundInterest = (
  principal: number,
  rate: number,
  time: number,
  frequency: number = 1
): number => {
  const amount = principal * Math.pow(1 + rate / (100 * frequency), frequency * time);
  return amount - principal;
};

export const compoundAmount = (
  principal: number,
  rate: number,
  time: number,
  frequency: number = 1
): number => {
  return principal * Math.pow(1 + rate / (100 * frequency), frequency * time);
};

export const sipReturns = (
  monthlyInvestment: number,
  monthlyRate: number,
  months: number
): number => {
  const rate = monthlyRate / 100;
  if (rate === 0) return monthlyInvestment * months;
  return (
    monthlyInvestment * (Math.pow(1 + rate, months) - 1) * (1 + rate) / rate
  );
};

export const sipWithLumpsum = (
  monthlyInvestment: number,
  lumpsumAmount: number,
  annualRate: number,
  years: number
): { sipAmount: number; lumpsumAmount: number; totalAmount: number } => {
  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;
  
  const sipAmount = sipReturns(monthlyInvestment, annualRate / 12, months);
  const lumpsumFinal = lumpsumAmount * Math.pow(1 + monthlyRate, months);
  
  return {
    sipAmount,
    lumpsumAmount: lumpsumFinal,
    totalAmount: sipAmount + lumpsumFinal,
  };
};

export const calculateEMI = (
  principal: number,
  annualRate: number,
  months: number
): { emi: number; totalAmount: number; totalInterest: number } => {
  const monthlyRate = annualRate / 12 / 100;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  
  const totalAmount = emi * months;
  const totalInterest = totalAmount - principal;
  
  return {
    emi: isNaN(emi) ? 0 : emi,
    totalAmount,
    totalInterest,
  };
};

export const stockReturns = (
  buyPrice: number,
  sellPrice: number,
  quantity: number
): { profit: number; profitPercentage: number } => {
  const profit = (sellPrice - buyPrice) * quantity;
  const profitPercentage = ((sellPrice - buyPrice) / buyPrice) * 100;
  
  return { profit, profitPercentage };
};

export const cagr = (
  beginningValue: number,
  endingValue: number,
  years: number
): number => {
  return (Math.pow(endingValue / beginningValue, 1 / years) - 1) * 100;
};

export const ppfMaturity = (
  annualInvestment: number,
  years: number,
  annualRate: number = 7.1
): { maturityAmount: number; totalInvested: number; totalInterest: number } => {
  let maturityAmount = 0;
  let totalInvested = annualInvestment * years;
  
  const rate = annualRate / 100;
  for (let i = 0; i < years; i++) {
    maturityAmount += annualInvestment * Math.pow(1 + rate, years - i);
  }
  
  return {
    maturityAmount,
    totalInvested,
    totalInterest: maturityAmount - totalInvested,
  };
};

export const fdMaturity = (
  principal: number,
  annualRate: number,
  years: number,
  frequency: number = 4 // Quarterly by default
): { maturityAmount: number; totalInterest: number } => {
  const rate = annualRate / 100;
  const maturityAmount = principal * Math.pow(1 + rate / frequency, frequency * years);
  
  return {
    maturityAmount,
    totalInterest: maturityAmount - principal,
  };
};

export const rdMaturity = (
  monthlyDeposit: number,
  annualRate: number,
  months: number,
  frequency: number = 4 // Quarterly
): { maturityAmount: number; totalInterest: number } => {
  const ratePerPeriod = annualRate / (100 * frequency);
  const periods = months / (12 / frequency);
  
  const maturityAmount =
    monthlyDeposit * (12 / frequency) * 
    (Math.pow(1 + ratePerPeriod, periods) - 1) / ratePerPeriod * 
    (1 + ratePerPeriod);
  
  const totalInvested = monthlyDeposit * months;
  
  return {
    maturityAmount,
    totalInterest: maturityAmount - totalInvested,
  };
};

// Scientific calculator operations
export const factorial = (n: number): number => {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

export const sqrt = (n: number): number => {
  return Math.sqrt(n);
};

export const power = (base: number, exponent: number): number => {
  return Math.pow(base, exponent);
};

export const logarithm = (n: number, base: number = Math.E): number => {
  return Math.log(n) / Math.log(base);
};

export const sine = (degrees: number): number => {
  return Math.sin((degrees * Math.PI) / 180);
};

export const cosine = (degrees: number): number => {
  return Math.cos((degrees * Math.PI) / 180);
};

export const tangent = (degrees: number): number => {
  return Math.tan((degrees * Math.PI) / 180);
};
