// app/admin/courses/page.tsx
"use client";
import React, { useState } from "react";
import { Modal, Typography } from "antd";
import { CourseList } from "@/components/CourseList";
import { CourseForm } from "@/components/CourseForm";
import { Course } from "@/types";
import { useRouter } from "next/navigation";

const { Title } = Typography;

export default function CoursesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | undefined>();
  const router = useRouter();

  const handleCreateCourse = () => {
    setEditingCourse(undefined);
    setIsModalOpen(true);
  };

  const handleEditCourse = (course: Course) => {
    setEditingCourse(course);
    setIsModalOpen(true);
  };

  const handleViewCourse = (course: Course) => {
    router.push(`/admin/courses/${course.id}`);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingCourse(undefined);
  };

  const handleSuccess = () => {
    setIsModalOpen(false);
    setEditingCourse(undefined);
    // The CourseList component will automatically refresh due to the hook
  };

  return (
    <div>
      <Title level={2}>Course Management</Title>

      <CourseList
        onEditCourse={handleEditCourse}
        onCreateCourse={handleCreateCourse}
        onViewCourse={handleViewCourse}
      />

      <Modal
        title={editingCourse ? "Edit Course" : "Create Course"}
        open={isModalOpen}
        onCancel={handleModalClose}
        footer={null}
        width={800}
        destroyOnClose
      >
        <CourseForm
          initialData={editingCourse}
          onSuccess={handleSuccess}
          onCancel={handleModalClose}
        />
      </Modal>
    </div>
  );
}
