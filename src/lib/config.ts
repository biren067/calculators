/**
 * Global Configuration for Calculator Application
 * This file controls feature flags and global settings
 */

// Google AdSense Feature Flag
// Set to true only after AdSense approval
// All AdSense components check this flag before rendering
export const ADS_ENABLED = false;

// Google AdSense Publisher ID
// Replace with your actual AdSense publisher ID after approval
// Format: ca-pub-xxxxxxxxxxxxxxxx
export const ADSENSE_PUBLISHER_ID = 'ca-pub-xxxxxxxxxxxxxxxx';

// Google AdSense Slot IDs for different pages
// Update these after AdSense approval
export const ADSENSE_SLOTS = {
  HOMEPAGE_SLOT_1: '2147483648',
  HOMEPAGE_SLOT_2: '2147483649',
  HOMEPAGE_SLOT_3: '2147483650',
  CALCULATOR_SLOT_1: '3147483648',
  CALCULATOR_SLOT_2: '3147483649',
  CALCULATOR_SLOT_3: '3147483650',
} as const;

// Enable development mode logging
export const DEV_MODE = process.env.NODE_ENV === 'development';

// Site configuration
export const SITE_CONFIG = {
  siteName: 'Financial & Mathematical Calculator',
  siteUrl: 'https://calculators.example.com',
  description: 'Free online financial calculators including SIP, EMI, CAGR, and more',
  author: 'Calculator App',
  defaultLocale: 'en-US',
} as const;
