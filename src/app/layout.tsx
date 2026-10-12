import type { Metadata } from 'next';
import './globals.css';
import { TripProvider } from '@/context/TripContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import React, { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Heritage Travels | Luxury Sri Lankan Heritage Tourism & Private Journeys',
  description:
    'Discover the soul of Sri Lanka through ancient kingdoms, sacred architecture, UNESCO World Heritage Sites, and bespoke private cultural journeys with Heritage Travels.',
  keywords: [
    'Sri Lanka heritage tours',
    'Sri Lanka cultural tours',
    'Sri Lanka private tours',
    'Ancient cities of Sri Lanka',
    'Sri Lanka heritage destinations',
    'Custom Sri Lanka itineraries',
    'Sigiriya private tour',
    'Galle Fort luxury heritage',
    'Cultural Triangle journeys',
    'Anuradhapura sacred cities',
  ],
  openGraph: {
    title: 'Heritage Travels — Discover the Soul of Sri Lanka',
    description:
      'Ancient kingdoms, living traditions, and bespoke private cultural journeys across Sri Lanka.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Heritage Travels',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F5F1E9] text-[#252720] antialiased selection:bg-[#EBE5DA] selection:text-[#252720]">
        <TripProvider>
          <Suspense fallback={<header className="h-20 bg-[#F5F1E9] border-b border-[#DCD4C6]" />}>
            <Navbar />
          </Suspense>
          <main className="flex-grow">{children}</main>
          <Footer />
        </TripProvider>
      </body>
    </html>
  );
}
