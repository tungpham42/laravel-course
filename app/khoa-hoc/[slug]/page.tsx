import CoursePage from "@/components/CoursePage";
import { courses } from "@/data/courses";

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params;

  const course = courses.find((c) => c.slug === slug);

  // Here you can fetch course data based on the slug to get dynamic metadata
  // For simplicity, we'll just use the slug in the title
  return {
    title: `Khóa học "${course ? course.title : slug}"`,
    description: `Tìm hiểu về khóa học "${
      course ? course.title : slug
    }" trên nền tảng của chúng tôi.`,
  };
}

export default async function Course({ params }: CoursePageProps) {
  const { slug } = await params;

  return <CoursePage params={{ slug }} />;
}
