import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@/components/analytics';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://aicreatorops.com'),
  title: {
    default: 'AI Creator Ops — The operating manual for AI creator businesses',
    template: '%s | AI Creator Ops'
  },
  description: 'Tools, platform intelligence, workflows, and monetization playbooks for synthetic creators, virtual influencers, fan-platform brands, and agent-run creator operations.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'AI Creator Ops',
    description: 'Build the creator business, not just the character.',
    url: 'https://aicreatorops.com',
    siteName: 'AI Creator Ops',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
