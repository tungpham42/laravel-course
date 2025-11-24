import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { AuthProvider } from "@/context/AuthContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khóa học Lập trình miễn phí",
  description: "Học lập trình web từ cơ bản đến nâng cao hoàn toàn miễn phí",
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
