import { NextResponse } from "next/server";
import { courses } from "@/data/courses";
import { getHostUrl } from "@/utils/getHostUrl";

export async function GET() {
  const baseUrl = await getHostUrl(); // Thay bằng domain thực tế của bạn

  // Tạo URLs cho các khóa học
  const courseUrls = courses.map((course) => ({
    url: `${baseUrl}/khoa-hoc/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Tạo URLs cho các bài học trong từng khóa học
  const lessonUrls = courses.flatMap((course) =>
    course.lessons.map((lesson) => ({
      url: `${baseUrl}/khoa-hoc/${course.slug}/bai-hoc/${lesson.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }))
  );

  // URLs tĩnh quan trọng
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/khoa-hoc`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  const allUrls = [...staticUrls, ...courseUrls, ...lessonUrls];

  // Tạo XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (item) => `
    <url>
      <loc>${item.url}</loc>
      <lastmod>${item.lastModified.toISOString()}</lastmod>
      <changefreq>${item.changeFrequency}</changefreq>
      <priority>${item.priority}</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}
