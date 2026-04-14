import type { Metadata } from "next";
import { siteContent } from "@/data/content";
import "./globals.css";

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  metadataBase: new URL(siteContent.meta.url),
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    url: siteContent.meta.url,
    siteName: siteContent.hero.name,
    images: [{ url: siteContent.meta.ogImage, width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [siteContent.meta.ogImage],
  },
  robots: { index: true, follow: true },
};

// Runs before React hydrates, so the correct theme is applied before paint.
const noFlashThemeScript = `(() => {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored === 'dark' || stored === 'light' ? stored : (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          // Must run before the body paints, hence inline.
          dangerouslySetInnerHTML={{ __html: noFlashThemeScript }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
