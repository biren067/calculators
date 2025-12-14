# Financial & Mathematical Calculators

A production-ready financial and mathematical calculator website built with Next.js, TypeScript, and Tailwind CSS. Fully SEO-optimized, AdSense-ready, and runs entirely on the frontend with no backend required.

## 🎯 Project Overview

This project provides a comprehensive suite of financial and mathematical calculators:

### Financial Calculators
- **Simple Interest Calculator** - Calculate interest on savings and loans
- **Compound Interest Calculator** - See how money grows with compounding
- **SIP Calculator** - Calculate Systematic Investment Plan returns
- **SIP + Lumpsum Calculator** - Combined regular and one-time investments
- **EMI Calculator** - Calculate monthly loan payments
- **Stock Returns Calculator** - Track investment performance
- **CAGR Calculator** - Measure investment growth rate
- **PPF Calculator** - Public Provident Fund projections
- **Fixed Deposit Calculator** - FD maturity calculations
- **Recurring Deposit Calculator** - RD returns calculator

### Math Calculators
- **Scientific Calculator** - Advanced mathematical functions (trigonometry, logarithms, etc.)
- **Basic Calculator** - Simple arithmetic operations

## ✨ Key Features

✅ **Production-Ready**
- Built with Next.js 14+ (App Router)
- TypeScript for type safety
- Tailwind CSS for modern styling
- Responsive design (mobile, tablet, desktop)

✅ **SEO Optimized**
- Individual pages for each calculator
- Metadata API for page-specific SEO
- Sitemap and robots.txt
- Structured content with FAQs
- Open Graph meta tags

✅ **AdSense Ready**
- AdSense slots on every page
- Proper ad placement between content
- AdSense-compatible layout

✅ **Privacy Focused**
- All calculations run in browser
- No backend server required
- No data transmission
- No tracking (except AdSense)

✅ **Developer Friendly**
- Clean, modular component architecture
- Reusable calculator components
- Calculation utilities in dedicated library
- Common components (FAQ, AdSense, Header, Footer)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── calculator/              # Calculator routes
│   │   ├── simple-interest/
│   │   ├── compound-interest/
│   │   ├── sip/
│   │   ├── sip-lumpsum/
│   │   ├── emi/
│   │   ├── scientific/
│   │   ├── basic/
│   │   ├── stock-returns/
│   │   ├── cagr/
│   │   ├── ppf/
│   │   ├── fd/
│   │   └── rd/
│   ├── layout.tsx                # Root layout with Header & Footer
│   ├── page.tsx                  # Homepage
│   ├── sitemap.ts                # XML sitemap
│   ├── robots.ts                 # robots.txt
│   └── globals.css               # Global styles
├── components/
│   ├── calculators/              # Calculator components
│   │   ├── SimpleInterestCalculator.tsx
│   │   ├── CompoundInterestCalculator.tsx
│   │   ├── SIPCalculator.tsx
│   │   ├── SIPLumpsumCalculator.tsx
│   │   ├── EMICalculator.tsx
│   │   ├── StockReturnsCalculator.tsx
│   │   ├── CAGRCalculator.tsx
│   │   ├── PPFCalculator.tsx
│   │   ├── FDCalculator.tsx
│   │   ├── RDCalculator.tsx
│   │   ├── ScientificCalculator.tsx
│   │   └── BasicCalculator.tsx
│   └── common/                   # Shared components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── FAQ.tsx
│       └── AdSenseSlot.tsx
└── lib/
    └── calculators.ts            # Calculation functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Building for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📝 Configuration

### AdSense Setup

1. Open `src/components/common/AdSenseSlot.tsx`
2. Replace `ca-pub-xxxxxxxxxxxxxxxx` with your actual AdSense publisher ID
3. Update ad slot numbers for each page as needed

### Custom Domain

1. Update the domain in `src/app/sitemap.ts` from `https://calculators.example.com` to your domain
2. Update the domain in `src/app/robots.ts`

### SEO Customization

Each calculator page includes:
- Unique title and description
- Keywords
- Open Graph meta tags
- FAQ section specific to that calculator

## 🔧 Calculation Formulas

All calculation formulas are in `src/lib/calculators.ts`:

- **Simple Interest**: SI = (P × R × T) / 100
- **Compound Interest**: A = P(1 + r/n)^(nt)
- **SIP Returns**: Using geometric series formula
- **EMI**: [P × r × (1 + r)^n] / [(1 + r)^n - 1]
- **CAGR**: (Ending Value / Beginning Value)^(1/Years) - 1
- And more...

## 📱 Features by Calculator

### Simple Interest
- Principal amount input
- Interest rate (annual)
- Time period in years
- Total amount calculation

### Compound Interest
- Principal amount
- Annual interest rate
- Time period
- Compounding frequency (annual, semi-annual, quarterly, monthly)

### SIP
- Monthly investment amount
- Expected annual return
- Investment period
- Invested amount, gains, and total amount

### EMI
- Loan amount
- Annual interest rate
- Loan period (months)
- Monthly EMI, total interest, and total payment

### Stock Returns
- Buy price per share
- Sell price per share
- Number of shares
- Total investment, returns, profit, and return percentage

### Scientific Calculator
- Basic operations (+, -, ×, ÷)
- Advanced functions (√, x², n!, log, sin, cos, tan, power)
- Support for parentheses and decimal numbers

### Basic Calculator
- Simple arithmetic
- Decimal support
- Backspace and clear functions
- Continuous calculation support

## 🎨 Styling

The project uses Tailwind CSS v4 with a clean, professional color scheme:

- **Primary**: Blue (#007bff)
- **Secondary**: Green, Purple, Orange
- **Neutral**: Gray shades for text and backgrounds
- **Gradients**: Soft gradients on page backgrounds

Each calculator page has a unique gradient background for visual distinction.

## ♿ Accessibility

- Semantic HTML structure
- Proper form labels and inputs
- Color contrast compliance
- Keyboard navigation support
- Screen reader friendly

## 📊 Performance

- Next.js optimized with server-side rendering
- Code splitting per route
- Optimized images
- Minimal JavaScript bundle
- Fast page loads (all calculations client-side)

## 📈 SEO Benefits

- Individual SEO-optimized pages for each calculator
- XML sitemap for search engine indexing
- robots.txt for crawler guidance
- Open Graph meta tags for social sharing
- Descriptive page titles and meta descriptions
- Structured FAQ content
- Internal linking between calculators

## 🔐 Privacy & Security

- ✅ No backend server - all calculations client-side
- ✅ No data transmission - everything stays in user's browser
- ✅ No cookies or tracking (except AdSense)
- ✅ SSL-ready (HTTPS recommended for production)
- ✅ GDPR compliant

## 💰 Monetization

This site is ready for Google AdSense monetization:

1. Replace AdSense publisher ID in `AdSenseSlot.tsx`
2. Replace ad slots with your actual slot IDs
3. Each page has 3 ad placement opportunities
4. Homepage has 3 additional placements

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The project is compatible with Netlify, GitHub Pages, and traditional Node.js hosting.

## 📄 License

This project is open source and available under the MIT License.

---

**Note**: These calculators are for educational purposes. Always consult with a qualified financial advisor before making investment decisions.

Built with ❤️ using Next.js, React, and Tailwind CSS

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
