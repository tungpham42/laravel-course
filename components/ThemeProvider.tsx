"use client";
import React from "react";
import { ConfigProvider } from "antd";

const FONT =
  'var(--font-jakarta), "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: FONT,
          colorPrimary: "#6247F5",
          colorText: "#1C1840",
          colorTextSecondary: "#6C6990",
          colorBgLayout: "#F7F6FC",
          colorBorder: "#E8E5F4",
          colorSuccess: "#12B76A",
          colorWarning: "#FFB547",
          borderRadius: 12,
          borderRadiusLG: 16,
        },
        components: {
          Button: { fontWeight: 600, controlHeight: 40 },
          Tabs: { titleFontSize: 15 },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
