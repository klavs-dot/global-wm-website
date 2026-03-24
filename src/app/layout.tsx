import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Global WM — AI Solutions & Automation",
  description: "Building future businesses. AI solutions, executive dashboards, command centers, sales automation and smart tools.",
  keywords: "AI solutions, automation, dashboards, command centers, design, Global WM",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang?: string };
}>) {
  const lang = params?.lang || "lv";

  return (
    <html lang={lang} className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased noise-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
