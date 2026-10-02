"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReadOutlined } from "@ant-design/icons";

const links = [
  { href: "/", label: "Trang chủ" },
  { href: "/khoa-hoc", label: "Khóa học" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand">
          <span className="brand__mark">
            <ReadOutlined />
          </span>
          Khóa Học
        </Link>
        <nav className="nav" aria-label="Điều hướng chính">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
