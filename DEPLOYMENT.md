# Deployment Guide

## Production Deployment Instructions

This guide covers deploying your Financial Calculator website to various platforms.

## Prerequisites

- Node.js 18+ and npm
- A domain name (optional)
- AdSense account (for monetization)
- Git repository (recommended)

## Environment Setup

### 1. Google AdSense Configuration

Before deploying, configure your AdSense account:

1. **Update Publisher ID**: Edit `src/components/common/AdSenseSlot.tsx`
   ```tsx
   data-ad-client="ca-pub-YOUR-PUBLISHER-ID"
   ```

2. **Update Ad Slots**: Each calculator page has AdSense slots that need specific slot IDs
   - Open each calculator page file
   - Replace generic slot numbers with your actual AdSense slot IDs

3. **Verification**: Google will need to verify your domain

### 2. SEO Configuration

Update domain references:

1. Edit `src/app/sitemap.ts`: Replace `https://calculators.example.com` with your domain
2. Edit `src/app/robots.ts`: Update sitemap URL
3. Edit `src/app/layout.tsx`: Add Google Site Verification meta tag

## Deployment to Vercel (Recommended)

Vercel is the easiest platform for Next.js applications.

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up (can use GitHub account)
3. Create a team if desired

### Step 2: Connect Git Repository
1. Push your code to GitHub/GitLab
2. In Vercel dashboard, click "New Project"
3. Select your repository
4. Vercel will auto-detect it's a Next.js project

### Step 3: Configure Environment Variables
1. In project settings, go to Environment Variables
2. Add any custom variables if needed (currently none required)

### Step 4: Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Your site is live!

### Step 5: Custom Domain
1. In project settings, go to "Domains"
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update SEO files with your domain

## Deployment to Netlify

### Step 1: Build Static Site
```bash
npm run build
```

### Step 2: Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub account

### Step 3: Connect Repository
1. Click "New site from Git"
2. Select your repository
3. Build command: `next build`
4. Publish directory: `.next`

### Step 4: Deploy
1. Netlify will build and deploy automatically
2. Custom domain settings in Site Settings

## Deployment to Traditional Hosting

For servers with Node.js support:

### Step 1: Prepare Server
```bash
# SSH into your server
ssh user@your-domain.com

# Install Node.js if not installed
node --version  # should be 18+
```

### Step 2: Upload Project
```bash
# Clone from Git
git clone https://github.com/yourusername/calculator.git
cd calculator

# Or upload via FTP/SFTP
```

### Step 3: Install Dependencies
```bash
npm install
npm run build
```

### Step 4: Run Production Server
```bash
# Using npm
npm start

# Or using PM2 for process management
npm install -g pm2
pm2 start npm --name "calculator" -- start
pm2 startup
pm2 save
```

### Step 5: Configure Web Server (Nginx)
```nginx
upstream calculator {
  server 127.0.0.1:3000;
}

server {
  listen 80;
  server_name your-domain.com;

  location / {
    proxy_pass http://calculator;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

### Step 6: SSL Certificate (Let's Encrypt)
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d your-domain.com
```

## Docker Deployment

### Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Docker Compose
```yaml
version: '3.8'

services:
  calculator:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
```

### Deploy with Docker
```bash
docker build -t calculator:latest .
docker run -p 3000:3000 calculator:latest
```

## Performance Optimization for Production

### 1. Enable Caching Headers
Add to `next.config.ts`:
```typescript
const nextConfig = {
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};
```

### 2. Image Optimization
Already built-in with Next.js Image component.

### 3. Compression
Enable in Vercel or web server automatically.

### 4. CDN Usage
- Vercel: Built-in global CDN
- Netlify: Built-in edge caching
- Traditional: Use Cloudflare (free tier available)

## SEO After Deployment

### 1. Google Search Console
1. Add your site to Google Search Console
2. Verify ownership via DNS or HTML file
3. Submit sitemap: yoursite.com/sitemap.xml
4. Monitor search performance

### 2. Google Analytics (Optional)
Add to `src/app/layout.tsx`:
```tsx
<script async src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`} />
<script dangerouslySetInnerHTML={{__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
`}} />
```

### 3. Robots.txt Verification
- robots.txt automatically generated at `/robots.txt`
- Check it's accessible and correctly formatted

### 4. Sitemap Verification
- Sitemap automatically generated at `/sitemap.xml`
- Verify in Google Search Console

## Monitoring & Maintenance

### 1. Error Tracking (Optional)
Add Sentry for error monitoring:
```bash
npm install @sentry/nextjs
```

### 2. Performance Monitoring
- Use Vercel Analytics (automatic)
- Use Google PageSpeed Insights
- Monitor Core Web Vitals

### 3. Uptime Monitoring
Use services like:
- UptimeRobot (free)
- Pingdom
- StatusPage

### 4. Log Monitoring
- Vercel: Built-in logging
- Traditional server: Use pm2 logs or systemd journal

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Site Not Responsive
1. Check CSS loading in browser console
2. Verify Tailwind CSS is compiled
3. Clear browser cache (Ctrl+Shift+Delete)

### AdSense Not Showing
1. Verify publisher ID is correct
2. Check ad slot numbers are valid
3. Wait 24-48 hours for initial approval
4. Check Google AdSense dashboard for warnings

### Poor Performance
1. Check Core Web Vitals in PageSpeed Insights
2. Optimize images
3. Enable compression
4. Use CDN (Cloudflare)

## Backup & Disaster Recovery

### Automated Backups
1. For Vercel: Automatic via Git
2. For traditional server: Daily cron backup
   ```bash
   0 2 * * * tar -czf /backups/calculator-$(date +\%Y\%m\%d).tar.gz /app/calculator
   ```

## Scaling Considerations

### If Traffic Increases
1. **Vercel**: Automatically scales (no action needed)
2. **Traditional Server**: 
   - Use load balancing
   - Add caching layer
   - Use CDN
   - Scale database if added

## Support & Help

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Tailwind CSS: https://tailwindcss.com/docs
- AdSense Help: https://support.google.com/adsense

## Monetization Tips

1. **Ad Placement**: Test different placements for CTR
2. **Content**: High-quality content attracts quality traffic
3. **Traffic**: 1000s of monthly visits = significant income
4. **Niche**: Financial calculators have high CPM rates
5. **Mobile**: Ensure mobile experience is perfect

Expected earnings (rough estimates):
- 1000 visitors/month: $5-20/month
- 10,000 visitors/month: $50-200/month
- 100,000 visitors/month: $500-2000/month
- 1,000,000 visitors/month: $5000-20000/month

---

Questions or issues? Refer to the main README.md file.
