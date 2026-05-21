import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AosInit } from "./_component/aos-init";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dra. Aline Roque | Psiquiatria e Saúde Mental',
  description: 'Atendimento psiquiátrico humanizado e acolhedor. Consultas presenciais e online focadas no seu bem-estar emocional e equilíbrio.',
  openGraph: {
    title: 'Dra. Aline Roque | Psiquiatria e Saúde Mental',
    description: 'Atendimento psiquiátrico humanizado e acolhedor. Consultas presenciais e online focadas no seu bem-estar emocional e equilíbrio.',
    url: 'https://www.dralineroquepsiq.com.br/',
    siteName: 'Dra Aline Roque - Psiquiatria Humanizada',
    locale: 'pt_BR',
    type: 'website',
  }
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
