import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Drop Card - Networking Made Effortless',
  description:
    'DropCard is a digital business card app that lets you instantly exchange contact info, remember who you meet, and organize your network. Join the beta.',
  icons: {
    icon: '/card/dc-favicon.png',
    shortcut: '/card/dc-favicon.png',
    apple: '/card/dc-favicon.png',
  },
  openGraph: {
    title: 'Drop Card - Networking Made Effortless',
    description:
      'DropCard is a digital business card app that lets you instantly exchange contact info, remember who you meet, and organize your network. Join the beta.',
    images: [
      { url: '/card/your-networking-upgraded.png' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drop Card - Networking Made Effortless',
    description:
      'DropCard is a digital business card app that lets you instantly exchange contact info, remember who you meet, and organize your network. Join the beta.',
    images: ['/card/your-networking-upgraded.png'],
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


