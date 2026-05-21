import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AosInit } from "./_component/aos-init";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dra. Aline Roque | Psiquiatria e Saúde Mental',
  description: 'Atendimento psiquiátrico...',
  openGraph: {
    title: 'Dra. Aline Roque | Psiquiatria e Saúde Mental',
    description: 'Atendimento psiquiátrico...',
    url: 'https://www.dralineroquepsiq.com.br/',
    siteName: 'Dra Aline Roque - Psiquiatria Humanizada',
    images: ['https://www.dralineroquepsiq.com.br/images/opengraph-image.jpg'],
    locale: 'pt_BR',
    type: 'website',
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="h-full overflow-x-hidden">
        <AosInit />
        {children}
      </body>
    </html>
  );
}
