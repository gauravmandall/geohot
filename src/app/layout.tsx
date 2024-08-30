import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/themeProvider';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from '@/components/ui/sonner';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Geohot',
  description: 'Your personal Web3 wallet',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem
        disableTransitionOnChange
        >
          <Toaster />
        {children}
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  );
}
