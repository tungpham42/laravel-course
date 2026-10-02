"use client";
import React from "react";
import Link from "next/link";
import { CompassOutlined } from "@ant-design/icons";
import SiteHeader from "@/components/SiteHeader";

interface NotFoundViewProps {
  message: string;
  backHref: string;
  backLabel: string;
}

export default function NotFoundView({
  message,
  backHref,
  backLabel,
}: NotFoundViewProps) {
  return (
    <>
      <SiteHeader />
      <div className="panel not-found">
        <div className="not-found__icon">
          <CompassOutlined />
        </div>
        <h1>{message}</h1>
        <Link href={backHref} className="btn btn--primary">
          {backLabel}
        </Link>
      </div>
    </>
  );
}
