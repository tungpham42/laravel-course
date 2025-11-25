// app/admin/layout.tsx
"use client";
import React, { useState } from "react";
import {
  Layout,
  Menu,
  Button,
  theme,
  Avatar,
  Dropdown,
  Space,
  Typography,
} from "antd";
import {
  DashboardOutlined,
  BookOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: "/admin",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/admin/courses",
      icon: <BookOutlined />,
      label: "Courses",
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key);
  };

  const userMenuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Profile",
    },
  ];

  const getInitials = (displayName: string | null) => {
    if (!displayName) return "U";
    return displayName
      .split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Mock user data (replace with your actual user data source)
  const user = {
    displayName: "Admin User",
    email: "admin@example.com",
    photoURL: null,
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          background: colorBgContainer,
        }}
      >
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <Title level={4} style={{ margin: 0, color: "#1890ff" }}>
            {collapsed ? "E" : "EduPlatform"}
          </Title>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0 16px",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />

          <Dropdown
            menu={{
              items: userMenuItems,
            }}
            placement="bottomRight"
            arrow
          >
            <Space style={{ cursor: "pointer" }}>
              <Avatar
                src={user.photoURL}
                style={{ backgroundColor: "#1890ff" }}
              >
                {getInitials(user.displayName)}
              </Avatar>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text strong style={{ lineHeight: 1.2 }}>
                  {user.displayName || "User"}
                </Text>
                <Text
                  type="secondary"
                  style={{ fontSize: 12, lineHeight: 1.2 }}
                >
                  {user.email}
                </Text>
              </div>
            </Space>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "auto",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
