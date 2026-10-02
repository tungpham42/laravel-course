"use client";
import React from "react";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import CourseCard from "@/components/CourseCard";
import SiteHeader from "@/components/SiteHeader";
import { courses } from "@/data";

export default function Home() {
  const lessonCount = courses.reduce((n, c) => n + c.lessons.length, 0);
  const exerciseCount = courses.reduce(
    (n, c) => n + c.lessons.reduce((m, l) => m + l.exercises.length, 0),
    0,
  );

  return (
    <>
      <SiteHeader />

      <section className="hero">
        <div className="container hero__inner">
          <h1>Học kỹ năng mới, từng bài một.</h1>
          <p>
            Bộ sưu tập khóa học từ cơ bản đến nâng cao, với bài học thực tế và
            bài tập thực hành giúp bạn tiến bộ mỗi ngày.
          </p>
          <div className="hero__actions">
            <Link href="/khoa-hoc" className="btn btn--primary">
              Khám phá khóa học <ArrowRightOutlined />
            </Link>
          </div>

          <div className="hero__stats">
            <div className="stat">
              <strong>{courses.length}</strong>
              <span>Khóa học</span>
            </div>
            <div className="stat">
              <strong>{lessonCount}</strong>
              <span>Bài học</span>
            </div>
            <div className="stat">
              <strong>{exerciseCount}</strong>
              <span>Bài tập thực hành</span>
            </div>
          </div>
        </div>
      </section>

      <main className="container section">
        <div className="section__head">
          <div>
            <h2 className="section__title">Khóa học nổi bật</h2>
            <p className="section__sub">
              Chọn một khóa học và bắt đầu ngay hôm nay.
            </p>
          </div>
          <Link href="/khoa-hoc" className="btn btn--outline btn--sm">
            Xem tất cả <ArrowRightOutlined />
          </Link>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </>
  );
}
