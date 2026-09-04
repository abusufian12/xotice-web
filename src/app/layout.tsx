import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exoticjapan.co.jp"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") || "en";

  return (
    <html lang={locale} className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className={`min-h-screen antialiased ${locale === "ja" ? "font-jp" : "font-en"}`}>
        {children}
      </body>
    </html>
  );
}
