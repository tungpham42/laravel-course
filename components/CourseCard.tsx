"use client";
import React from "react";
import Link from "next/link";
import {
  ArrowRightOutlined,
  ClockCircleOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { Course } from "@/types";
import { getCourseGradient, getLevelLabel } from "@/components/courseTheme";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => (
  <Link href={`/khoa-hoc/${course.slug}`} className="course-card">
    <div
      className="course-card__cover"
      style={{ background: getCourseGradient(course.slug) }}
    >
      <span className="pill pill--glass">{getLevelLabel(course.level)}</span>
      <span className="course-card__initial" aria-hidden>
        {course.title.charAt(0)}
      </span>
    </div>

    <div className="course-card__body">
      <h3 className="course-card__title">{course.title}</h3>
      <p className="course-card__desc">{course.description}</p>
      <div className="course-card__meta">
        <span>
          <ClockCircleOutlined /> {course.duration}
        </span>
        <span>
          <ReadOutlined /> {course.lessons.length} bài học
        </span>
      </div>
    </div>

    <div className="course-card__cta">
      Bắt đầu học <ArrowRightOutlined />
    </div>
  </Link>
);

export default CourseCard;
