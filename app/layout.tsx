import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Plus_Jakarta_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { AuthProvider } from "@/context/AuthContext";
import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khóa học Lập trình miễn phí",
  description: "Học lập trình web từ cơ bản đến nâng cao hoàn toàn miễn phí",
  openGraph: {
    title: "Khóa học Lập trình miễn phí",
    description: "Học lập trình web từ cơ bản đến nâng cao hoàn toàn miễn phí",
    siteName: "Khóa học Lập trình miễn phí",
    images: [
      {
        url: "https://hoc.soft.io.vn/1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Khóa học Lập trình miễn phí",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jakarta",
  display: "swap",
});

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html
    lang="vi"
    className={`${jakarta.variable} font-sans`}
    suppressHydrationWarning
  >
    <head />
    <body suppressHydrationWarning>
      <Script
        id="adsense-script"
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3585118770961536"
        crossOrigin="anonymous"
      />
      <AntdRegistry>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </AntdRegistry>
      <GoogleAnalytics ga_id="G-HHXZSNQ65X" />
    </body>
  </html>
);

export default RootLayout;
