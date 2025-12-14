# ✅ Setup & Launch Checklist

Complete these steps to get your Financial Calculator website live!

## Phase 1: Local Testing (5 minutes)

- [ ] Open terminal/command prompt
- [ ] Navigate to project: `cd d:\website\calculator`
- [ ] Run dev server: `npm run dev`
- [ ] Open browser: http://localhost:3000
- [ ] Check homepage loads
- [ ] Click on a calculator page
- [ ] Test calculator functionality
- [ ] Check mobile responsiveness (F12 → device toolbar)

## Phase 2: Configuration (15 minutes)

### AdSense Setup
- [ ] Go to [Google AdSense](https://adsense.google.com)
- [ ] Sign up or log in
- [ ] Get your Publisher ID (ca-pub-...)
- [ ] Open `src/components/common/AdSenseSlot.tsx`
- [ ] Replace `ca-pub-xxxxxxxxxxxxxxxx` with your Publisher ID
- [ ] Save file

### Domain Configuration
- [ ] Decide your domain (e.g., calculators.mysite.com)
- [ ] Open `src/app/sitemap.ts`
- [ ] Replace `https://calculators.example.com` with your domain
- [ ] Open `src/app/robots.ts`
- [ ] Replace domain in robots.ts
- [ ] Save files

### SEO Verification (Optional)
- [ ] Go to [Google Search Console](https://search.google.com/search-console)
- [ ] Add property (your domain)
- [ ] Copy verification code
- [ ] Open `src/app/layout.tsx`
- [ ] Paste verification code in meta tag
- [ ] Save file

## Phase 3: Customization (Optional, 10 minutes)

### Content Updates
- [ ] Open `src/app/page.tsx` (homepage)
- [ ] Update calculator descriptions if desired
- [ ] Add/remove FAQ items
- [ ] Update footer text
- [ ] Customize colors (find color class names)

### FAQ Customization
- [ ] Open any calculator page (e.g., `src/app/calculator/simple-interest/page.tsx`)
- [ ] Edit `faqItems` array
- [ ] Update questions and answers
- [ ] Repeat for other calculators as desired

## Phase 4: Build & Test (5 minutes)

- [ ] Stop dev server (Ctrl+C)
- [ ] Build project: `npm run build`
- [ ] Wait for build to complete
- [ ] Check for any errors in build output
- [ ] If successful, see ✓ messages

## Phase 5: Production Build Test (5 minutes)

- [ ] Start production server: `npm start`
- [ ] Open browser: http://localhost:3000
- [ ] Test homepage
- [ ] Test all calculator types:
  - [ ] Simple Interest
  - [ ] Compound Interest
  - [ ] SIP
  - [ ] SIP + Lumpsum
  - [ ] EMI
  - [ ] Scientific
  - [ ] Basic
  - [ ] Stock Returns
  - [ ] CAGR
  - [ ] PPF
  - [ ] FD
  - [ ] RD
- [ ] Check mobile responsiveness

## Phase 6: Choose Deployment Platform

### Option A: Vercel (Easiest - Recommended)
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Sign up (use GitHub account)
- [ ] Click "New Project"
- [ ] Connect your GitHub repository
- [ ] Click "Deploy"
- [ ] Wait 2-5 minutes for deployment
- [ ] Your site is live!

### Option B: Netlify
- [ ] Go to [netlify.com](https://netlify.com)
- [ ] Sign up (use GitHub account)
- [ ] Click "New site from Git"
- [ ] Select your repository
- [ ] Set build command: `next build`
- [ ] Set publish directory: `.next`
- [ ] Deploy

### Option C: Traditional Server
- [ ] Follow [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed steps
- [ ] SSH into server
- [ ] Clone repository
- [ ] Install Node.js and dependencies
- [ ] Build and run

## Phase 7: Post-Deployment (10 minutes)

### Update Custom Domain
- [ ] Wait for DNS propagation (can take 24 hours)
- [ ] Update domain in:
  - [ ] `src/app/sitemap.ts`
  - [ ] `src/app/robots.ts`
  - [ ] `src/app/layout.tsx`
- [ ] Rebuild and redeploy

### Submit to Search Engines
- [ ] Go to [Google Search Console](https://search.google.com/search-console)
- [ ] Add property (your domain)
- [ ] Verify ownership
- [ ] Submit sitemap: https://yourdomain.com/sitemap.xml
- [ ] Submit URLs
- [ ] Go to [Bing Webmaster](https://www.bing.com/webmaster)
- [ ] Add your site
- [ ] Submit sitemap

### Google Analytics (Optional)
- [ ] Go to [Google Analytics](https://analytics.google.com)
- [ ] Create account
- [ ] Get Tracking ID
- [ ] Add to `src/app/layout.tsx`
- [ ] Redeploy

## Phase 8: AdSense Configuration

- [ ] Wait for AdSense approval (1-2 weeks)
- [ ] Update AdSense slot IDs in each page:
  - [ ] Homepage
  - [ ] Simple Interest page
  - [ ] Compound Interest page
  - [ ] SIP page
  - [ ] SIP + Lumpsum page
  - [ ] EMI page
  - [ ] Scientific Calculator page
  - [ ] Basic Calculator page
  - [ ] Stock Returns page
  - [ ] CAGR page
  - [ ] PPF page
  - [ ] FD page
  - [ ] RD page
- [ ] Rebuild and redeploy
- [ ] Verify ads appear after 24 hours

## Phase 9: Monitoring & Optimization

### Analytics
- [ ] Check Google Search Console daily for 1 week
- [ ] Monitor search performance
- [ ] Check indexed pages
- [ ] Monitor Core Web Vitals

### SEO
- [ ] Use [Google PageSpeed Insights](https://pagespeed.web.dev)
- [ ] Check mobile performance
- [ ] Check desktop performance
- [ ] Work on improving scores

### Traffic
- [ ] Monitor daily visitors in Analytics
- [ ] Check which calculators are popular
- [ ] Optimize underperforming pages
- [ ] Share site on social media

### AdSense
- [ ] Monitor earnings daily
- [ ] Check CTR (Click-Through Rate)
- [ ] Monitor impressions
- [ ] Test different ad placements

## Phase 10: Maintenance (Ongoing)

### Weekly
- [ ] Check for errors in console (Ctrl+F12)
- [ ] Verify all calculators working
- [ ] Check Google Search Console

### Monthly
- [ ] Review Google Analytics
- [ ] Check AdSense earnings
- [ ] Update content if needed
- [ ] Check for broken links

### Quarterly
- [ ] Update Next.js: `npm update next`
- [ ] Update other dependencies: `npm update`
- [ ] Review and optimize SEO
- [ ] Analyze user behavior
- [ ] Plan new features or calculators

## Troubleshooting

### Site Not Loading
1. Check internet connection
2. Verify domain DNS is configured
3. Check Vercel/platform deployment logs
4. Restart server

### Calculators Not Working
1. Check browser console for errors (F12)
2. Verify calculation functions in `src/lib/calculators.ts`
3. Check input validation
4. Refresh page

### AdSense Not Showing
1. Verify Publisher ID is correct
2. Check ad slot IDs are valid
3. Verify site is approved for AdSense
4. Wait 24 hours after adding new slots
5. Check for policy violations

### SEO Issues
1. Check Google Search Console for errors
2. Verify sitemap is accessible
3. Check robots.txt
4. Verify meta tags are correct
5. Test with [schema.org validator](https://validator.schema.org)

### Performance Issues
1. Check Page Speed Insights
2. Optimize images
3. Enable caching
4. Use CDN (Cloudflare - free)
5. Check Core Web Vitals

## Quick Links

- **Project Files**: `d:\website\calculator`
- **Main Documentation**: [README.md](./README.md)
- **Deployment Guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Configuration Guide**: [CONFIGURATION.md](./CONFIGURATION.md)
- **Project Summary**: [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Google AdSense**: https://support.google.com/adsense
- **Google Search Console Help**: https://support.google.com/webmasters
- **Vercel Docs**: https://vercel.com/docs

## 🎉 Success Indicators

You'll know your site is successful when:
- ✅ Site appears in Google search results
- ✅ Getting 10+ visitors per day
- ✅ AdSense showing ads
- ✅ Getting clicks on ads
- ✅ Earning $1+ per day

## 📞 Need Help?

1. Check the documentation files (README, DEPLOYMENT, CONFIGURATION)
2. Review Next.js documentation
3. Check your code for obvious errors
4. Test in development mode first
5. Read error messages carefully

---

**Estimated Time to Launch**: 1-2 hours
**Estimated Time to First Earnings**: 3-6 months
**Potential Monthly Revenue**: $100-500+ (depending on traffic)

Good luck with your financial calculator website! 🚀
