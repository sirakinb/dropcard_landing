import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'DropCard — Your Networking. Upgraded.',
  description:
    'DropCard is a digital business card app that lets you instantly exchange contact info, remember who you meet, and organize your network. Join the beta.',
  openGraph: {
    title: 'DropCard — Your Networking. Upgraded.',
    description:
      'DropCard is a digital business card app that lets you instantly exchange contact info, remember who you meet, and organize your network. Join the beta.',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'DropCard' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DropCard — Your Networking. Upgraded.',
    description:
      'DropCard is a digital business card app that lets you instantly exchange contact info, remember who you meet, and organize your network. Join the beta.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-stone-900 antialiased [font-variation-settings:'slnt'_0]">
        {children}
      </body>
    </html>
  );
}


