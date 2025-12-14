import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://calculators.example.com';

  const calculators = [
    'simple-interest',
    'compound-interest',
    'sip',
    'sip-lumpsum',
    'emi',
    'scientific',
    'basic',
    'stock-returns',
    'cagr',
    'ppf',
    'fd',
    'rd',
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...calculators.map((calc) => ({
      url: `${baseUrl}/calculator/${calc}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
