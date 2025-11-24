// app/admin/courses/new/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { Button, Space } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { CourseForm } from "@/components/CourseForm";

export default function CreateCoursePage() {
  const router = useRouter();

  const handleSuccess = () => {
    router.push("/admin/courses");
  };

  const handleCancel = () => {
    router.push("/admin/courses");
  };

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

      <CourseForm onSuccess={handleSuccess} onCancel={handleCancel} />
    </div>
  );
}
