"use client";
import React from "react";
import { Card, Tag, Button } from "antd";
import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Course } from "@/types";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "green";
      case "intermediate":
        return "orange";
      case "advanced":
        return "red";
      default:
        return "blue";
    }
  };

  return (
    <Card
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      bodyStyle={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: 16,
      }}
      cover={
        <div
          style={{
            height: 140,
            padding: 16,
            background: `linear-gradient(45deg, #667eea 0%, #764ba2 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          {course.title}
        </div>
      }
      actions={[
        <Link key="view" href={`/khoa-hoc/${course.slug}`}>
          <Button type="primary">Bắt đầu học</Button>
        </Link>,
      ]}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Card.Meta
          title={
            <div style={{ marginBottom: 8, fontSize: 16, fontWeight: 600 }}>
              {course.title}
            </div>
          }
          description={
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  marginBottom: 16,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: 1.5,
                  minHeight: 72,
                }}
              >
                {course.description}
              </p>
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                <Tag icon={<ClockCircleOutlined />} color="blue">
                  {course.duration}
                </Tag>
                <Tag color={getLevelColor(course.level)}>
                  {course.level === "beginner"
                    ? "Cơ bản"
                    : course.level === "intermediate"
                    ? "Trung cấp"
                    : "Nâng cao"}
                </Tag>
                <Tag icon={<UserOutlined />} color="purple">
                  {course.lessons.length} bài học
                </Tag>
              </div>
            </div>
          }
        />
      </div>
    </Card>
  );
};

export default CourseCard;
