// app/auth/signin/page.tsx
"use client";
import { Card, Button, Typography, Space, Divider, Layout } from "antd";
import { GoogleOutlined, RocketOutlined } from "@ant-design/icons";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { message } from "antd";

const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;

export default function SignInPage() {
  const { signInWithGoogle, loading } = useAuth();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      message.success("Successfully signed in!");
      router.push("/admin");
    } catch (error: unknown) {
      if (error instanceof Error) {
        message.error(`Sign in failed: ${error.message}`);
      } else {
        message.error("Sign in failed");
      }
    }
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Card
          style={{
            maxWidth: 400,
            width: "100%",
            textAlign: "center",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            border: "none",
            borderRadius: 12,
          }}
        >
          <Space orientation="vertical" size="large" style={{ width: "100%" }}>
            <div>
              <RocketOutlined
                style={{ fontSize: 48, color: "#1890ff", marginBottom: 16 }}
              />
              <Title level={2} style={{ margin: 0 }}>
                EduPlatform
              </Title>
              <Text type="secondary">Admin Dashboard</Text>
            </div>

            <Divider>Sign In to Continue</Divider>

            <Paragraph type="secondary">
              Access the admin dashboard to manage courses, lessons, and
              exercises.
            </Paragraph>

            <Button
              type="primary"
              icon={<GoogleOutlined />}
              size="large"
              onClick={handleGoogleSignIn}
              loading={loading}
              style={{
                width: "100%",
                height: 48,
                fontSize: 16,
                borderRadius: 8,
              }}
            >
              Sign in with Google
            </Button>

            <Text type="secondary" style={{ fontSize: 12 }}>
              By signing in, you agree to our Terms of Service and Privacy
              Policy
            </Text>
          </Space>
        </Card>
      </Content>
    </Layout>
  );
}
