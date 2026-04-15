import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "../styles/globals.css";

const bodyFont = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SGO Engenharia & Consultoria",
  description:
    "Landing page institucional da SGO Engenharia & Consultoria com foco em soldagem, qualidade e engenharia para obras industriais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bodyFont.variable} ${bodyFont.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
