"use client";
import React from "react";
import { Breadcrumb } from "antd";
import type { BreadcrumbProps } from "antd";
import { HomeOutlined, BookOutlined } from "@ant-design/icons";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

type BreadcrumbItems = NonNullable<BreadcrumbProps["items"]>;

interface PageShellProps {
  /** Large title shown in the page banner. */
  headerTitle: React.ReactNode;
  /** Breadcrumb entries after "Trang chủ > Khóa học". Omit `href` on the last one. */
  trail: { title: React.ReactNode; href?: string }[];
  children: React.ReactNode;
}

const rootItems: BreadcrumbItems = [
  {
    title: (
      <Link href="/">
        <HomeOutlined /> Trang chủ
      </Link>
    ),
  },
  {
    title: (
      <Link href="/khoa-hoc">
        <BookOutlined /> Khóa học
      </Link>
    ),
  },
];

export default function PageShell({
  headerTitle,
  trail,
  children,
}: PageShellProps) {
  const items: BreadcrumbItems = [
    ...rootItems,
    ...trail.map(({ title, href }) => ({
      title: href ? <Link href={href}>{title}</Link> : title,
    })),
  ];

  return (
    <>
      <SiteHeader />
      <section className="page-banner">
        <div className="container page-banner__inner">
          <Breadcrumb items={items} />
          <h1>{headerTitle}</h1>
        </div>
      </section>
      <main className="container page-body">{children}</main>
    </>
  );
}
