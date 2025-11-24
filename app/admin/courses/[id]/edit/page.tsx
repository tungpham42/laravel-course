// app/admin/courses/[id]/edit/page.tsx
"use client";
import { useParams, useRouter } from "next/navigation";
import { Button, Space, Spin, message, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { CourseForm } from "@/components/CourseForm";
import { useCourse } from "@/hooks/useCourse";

const { Text } = Typography;

export default function EditCoursePage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id as string;

  const { course, loading, error } = useCourse(courseId);

  const handleSuccess = () => {
    message.success("Course updated successfully!");
    router.push("/admin/courses");
  };

  const handleCancel = () => {
    router.push("/admin/courses");
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="large" />
        <div style={{ marginTop: 16 }}>Loading course...</div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Course not found</h2>
        <Text type="secondary">{error}</Text>
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={() => router.push("/admin/courses")}>
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Space style={{ marginBottom: 24 }}>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => router.push("/admin/courses")}
        >
          Back to Courses
        </Button>
      </Space>

      <CourseForm
        initialData={course}
        onSuccess={handleSuccess}
        onCancel={handleCancel}
      />
    </div>
  );
}
