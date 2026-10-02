"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Lesson } from "@/types";
import Link from "next/link";

interface LessonContentProps {
  lesson: Lesson;
  courseSlug: string;
  completed?: boolean;
}

const LessonContent: React.FC<LessonContentProps> = ({
  lesson,
  courseSlug,
  completed = false,
}) => (
  <article className="panel">
    <div className="chip-row">
      <span className="pill pill--soft">
        <ClockCircleOutlined /> {lesson.duration}
      </span>
      {completed && (
        <span className="pill pill--success">
          <CheckCircleOutlined /> Đã hoàn thành
        </span>
      )}
    </div>

    <h2 className="lesson-title">{lesson.title}</h2>

    <div className="markdown-content">
      <ReactMarkdown>{lesson.content}</ReactMarkdown>
    </div>

    {lesson.exercises.length > 0 && (
      <section className="exercises">
        <h3>
          Bài tập <span className="pill pill--soft">{lesson.exercises.length}</span>
        </h3>
        <ul className="exercise-list">
          {lesson.exercises.map((exercise, index) => (
            <li key={exercise.id}>
              <Link
                className="exercise-link"
                href={`/khoa-hoc/${courseSlug}/bai-hoc/${lesson.slug}/bai-tap/${exercise.id}`}
              >
                <span className="exercise-link__index">{index + 1}</span>
                <span className="exercise-link__text">
                  <strong>{exercise.title}</strong>
                  <span>{exercise.description}</span>
                </span>
                <RightOutlined />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    )}
  </article>
);

export default LessonContent;
