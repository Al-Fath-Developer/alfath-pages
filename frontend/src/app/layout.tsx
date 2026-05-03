import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Scheherazade_New } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const scheherazadeNew = Scheherazade_New({
  variable: "--font-scheherazade",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "LDK AL-FATH Universitas Telkom",
  description: "Lembaga Dakwah Kampus AL-FATH Universitas Telkom - Bersama Membangun Kampus yang Islami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${scheherazadeNew.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
