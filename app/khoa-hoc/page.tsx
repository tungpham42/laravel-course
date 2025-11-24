import CoursesPage from "@/components/CoursesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách khóa học Lập trình miễn phí",
  description:
    "Khám phá các khóa học lập trình web từ cơ bản đến nâng cao hoàn toàn miễn phí",
};

export default function Courses() {
  return <CoursesPage />;
}
