# Configuration Guide

This document explains how to customize and configure your Financial Calculator website.

## 1. AdSense Configuration

### Update Publisher ID

Edit: `src/components/common/AdSenseSlot.tsx`

```tsx
// Find this line:
data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"

// Replace with your actual AdSense publisher ID:
data-ad-client="ca-pub-1234567890123456"
```

### Update Ad Slot IDs

Each page has multiple ad slots. Update them with your actual slot IDs:

1. **Homepage** (`src/app/page.tsx`):
   - Replace `2147483640`, `2147483641`, `2147483642`

2. **Each Calculator Page** (e.g., `src/app/calculator/simple-interest/page.tsx`):
   - Replace the ad slot numbers in `<AdSenseSlot adSlot="..." />`

Example:
```tsx
// Before:
<AdSenseSlot adSlot="2147483648" />

// After:
<AdSenseSlot adSlot="9876543210" />
```

## 2. SEO Configuration

### Update Domain

Edit: `src/app/sitemap.ts`
```typescript
const baseUrl = 'https://calculators.example.com';
// Change to:
const baseUrl = 'https://yourdomain.com';
```

Edit: `src/app/robots.ts`
```typescript
sitemap: 'https://calculators.example.com/sitemap.xml',
// Change to:
sitemap: 'https://yourdomain.com/sitemap.xml',
```

### Google Site Verification

Edit: `src/app/layout.tsx`
```tsx
<meta name="google-site-verification" content="your-google-verification-code" />
// Replace "your-google-verification-code" with code from Google Search Console
```

### Meta Tags Customization

Edit page metadata in each calculator page:

```tsx
export const metadata: Metadata = {
  title: 'Your Custom Title | Financial Calculator',
  description: 'Your custom description',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'Your Title',
    description: 'Your description',
    type: 'website',
  },
};
```

## 3. Styling & Theme Customization

### Tailwind CSS Configuration

Edit: `tailwind.config.ts`

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        // Add custom colors here
      },
    },
  },
};
```

### Change Color Scheme

Update gradient backgrounds in calculator pages:

```tsx
// Current:
className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50"

// Change to:
className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50"
```

Available gradients:
- `from-blue-50 to-indigo-50`
- `from-green-50 to-blue-50`
- `from-purple-50 to-blue-50`
- `from-orange-50 to-red-50`
- `from-indigo-50 to-purple-50`
- And many more...

### Typography Customization

Edit: `src/app/globals.css`

```css
:root {
  --font-family: 'Geist', sans-serif;
  /* Customize fonts here */
}
```

## 4. Content Customization

### Update FAQ Items

Edit each calculator page, find the `faqItems` array:

```tsx
const faqItems = [
  {
    question: 'Your question?',
    answer: 'Your answer here.',
  },
  // Add more items
];
```

### Update Calculator Description

Edit the page text:

```tsx
<p className="text-lg text-gray-600 mb-8">
  Your custom description here.
</p>
```

### Update Calculator Names & Descriptions

Edit: `src/app/page.tsx`

```typescript
const calculators = [
  {
    name: 'Your Calculator Name',
    slug: 'calculator-slug',
    description: 'Your description',
    icon: '📊', // Change emoji icon
  },
  // More calculators
];
```

## 5. Calculator-Specific Customization

### Add Default Values

Edit the component file, e.g., `src/components/calculators/SimpleInterestCalculator.tsx`:

```tsx
const [principal, setPrincipal] = useState('1000'); // Default value
```

### Change Result Display Format

Edit how results are displayed:

```tsx
// Before:
₹{interest.toFixed(2)}

// After (percentage):
{interest.toFixed(4)}%

// Or scientific notation:
{interest.toExponential(2)}
```

### Add More Input Validation

Add before calculation:

```tsx
if (principal <= 0) {
  alert('Please enter a positive amount');
  return;
}
```

## 6. Header & Footer Customization

### Update Header Navigation

Edit: `src/components/common/Header.tsx`

```tsx
<Link href="/calculator/your-calculator" className="...">
  Your Calculator
</Link>
```

### Update Footer Content

Edit: `src/components/common/Footer.tsx`

```tsx
<p className="text-gray-300">
  Your custom footer text here.
</p>
```

## 7. Analytics Integration

### Google Analytics

Edit: `src/app/layout.tsx` (in the `<head>`)

```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
`}} />
```

Replace `G-XXXXXXXXXX` with your GA4 ID.

## 8. Environment Variables

Create: `.env.local`

```
# Example environment variables (currently not used)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_AD_CLIENT=ca-pub-xxxxxxxxxxxxxxxx
```

## 9. Next.js Configuration

Edit: `next.config.ts`

```typescript
const nextConfig = {
  // Performance optimizations
  swcMinify: true,
  
  // Custom headers for caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate',
          },
        ],
      },
    ];
  },
};
```

## 10. Custom Calculations

### Add New Calculation Function

Edit: `src/lib/calculators.ts`

```typescript
export const myNewCalculation = (param1: number, param2: number): number => {
  // Your calculation logic
  return result;
};
```

### Use in Component

```tsx
import { myNewCalculation } from '@/lib/calculators';

// In your component:
const result = myNewCalculation(value1, value2);
```

## 11. Add New Calculator Page

### Step 1: Create Calculation Function
Add to `src/lib/calculators.ts`

### Step 2: Create Component
Create: `src/components/calculators/MyCalculator.tsx`

### Step 3: Create Page
Create folder: `src/app/calculator/my-calculator/`
Create file: `src/app/calculator/my-calculator/page.tsx`

### Step 4: Add to Homepage
Edit: `src/app/page.tsx`, add to `calculators` array

## 12. Performance Optimization

### Image Optimization
Next.js automatically optimizes images. Use `<Image>` component:

```tsx
import Image from 'next/image';

<Image src="/image.jpg" alt="..." width={800} height={600} />
```

### Code Splitting
Automatic per route. No action needed.

### Lazy Loading
```tsx
import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('@/components/MyComponent'));
```

## 13. Testing Configuration

Create: `jest.config.js`

```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
```

## 14. Accessibility Configuration

### ARIA Labels
Already included in components. Ensure all inputs have labels:

```tsx
<label htmlFor="input-id">Label Text</label>
<input id="input-id" ... />
```

### Color Contrast
Check with tools like WebAIM contrast checker.

## Quick Checklist Before Going Live

- [ ] Update AdSense publisher ID
- [ ] Update AdSense slot IDs
- [ ] Update domain in sitemap.ts and robots.ts
- [ ] Add Google Site Verification meta tag
- [ ] Review all page titles and descriptions
- [ ] Test all calculators work correctly
- [ ] Check responsive design on mobile
- [ ] Set up Google Analytics (optional)
- [ ] Review FAQ items for accuracy
- [ ] Test AdSense placement
- [ ] Configure production deployment
- [ ] Set up monitoring and analytics
- [ ] Submit sitemap to Google Search Console

## Common Customizations

### Change Currency Symbol
Find: `₹` in calculator components
Replace with: `$`, `€`, `£`, etc.

### Change Calculation Formula
Edit function in `src/lib/calculators.ts`

### Add Input Validation
Add before `setResult()` in components

### Change Button Colors
Update className in components:
```tsx
className="bg-blue-600 hover:bg-blue-700 text-white ..."
// Change blue-600/blue-700 to your color
```

### Add Calculator Loading State
```tsx
const [loading, setLoading] = useState(false);

// In handleCalculate:
setLoading(true);
// calculations here
setLoading(false);
```

---

For more help, refer to the main README.md and DEPLOYMENT.md files.
