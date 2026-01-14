import type { Metadata, Viewport } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/shared/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingButtons } from '@/components/layout/floating-buttons';

export const metadata: Metadata = {
  title: {
    default: 'TechAnalítica - Análisis y Guías de Compra de Tecnología',
    template: '%s | TechAnalítica',
  },
  description: 'Análisis detallados, comparativas y guías de compra de AI PCs, tablets, y dispositivos para la productividad. Tomamos decisiones tecnológicas inteligentes.',
  keywords: ['AI PC', 'Tablets', 'Portátiles', 'Productividad', 'Guías de compra', 'Análisis tecnología'],
  authors: [{ name: 'TechAnalítica' }],
  creator: 'TechAnalítica',
  publisher: 'TechAnalítica',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F0F9FF' },
    { media: '(prefers-color-scheme: dark)', color: '#05081a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <FloatingButtons />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
