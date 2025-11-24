// components/ProtectedRoute.tsx
"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Spin, Result, Button } from "antd";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  if (!user) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Result
          status="403"
          title="Access Denied"
          subTitle="Please sign in to access the admin dashboard."
          extra={
            <Button type="primary" onClick={() => router.push("/auth/signin")}>
              Go to Sign In
            </Button>
          }
        />
      </div>
    );
  }

  // Add admin role check here if needed
  // For now, we'll assume all authenticated users are admins
  // You can add role-based access control later

  return <>{children}</>;
}
