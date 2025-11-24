import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { AuthProvider } from "@/context/AuthContext";
import type { Metadata } from "next";
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
        url: "/1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Khóa học Lập trình miễn phí",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="vi">
    <body>
      <AntdRegistry>
        <AuthProvider>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#667eea",
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AuthProvider>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
