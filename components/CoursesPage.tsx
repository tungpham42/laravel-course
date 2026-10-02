"use client";
import React, { useState } from "react";
import { Segmented, Empty } from "antd";
import CourseCard from "@/components/CourseCard";
import SiteHeader from "@/components/SiteHeader";
import { courses } from "@/data";

const FILTERS = [
  { label: "Tất cả", value: "all" },
  { label: "Cơ bản", value: "beginner" },
  { label: "Trung cấp", value: "intermediate" },
  { label: "Nâng cao", value: "advanced" },
];

export default function CoursesPage() {
  const [level, setLevel] = useState<string>("all");
  const visible =
    level === "all" ? courses : courses.filter((c) => c.level === level);

  return (
    <>
      <SiteHeader />

      <section className="page-banner">
        <div className="container page-banner__inner">
          <h1>Các khóa học có sẵn</h1>
          <p>
            Chọn khóa học phù hợp với mục tiêu của bạn, từ cơ bản đến nâng cao.
          </p>
        </div>
      </section>

      <main className="container section" style={{ paddingTop: 36 }}>
        <div className="section__head">
          <Segmented
            size="large"
            options={FILTERS}
            value={level}
            onChange={(v) => setLevel(String(v))}
          />
          <span className="section__sub" style={{ margin: 0 }}>
            {visible.length} khóa học
          </span>
        </div>

        {visible.length === 0 ? (
          <div className="panel">
            <Empty description="Chưa có khóa học ở cấp độ này" />
          </div>
        ) : (
          <div className="course-grid">
            {visible.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
