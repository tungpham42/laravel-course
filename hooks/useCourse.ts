// hooks/useCourse.ts
"use client";
import { useState, useEffect } from "react";
import { Course } from "@/types";
import { courseService } from "@/services/courseService";

export const useCourse = (id?: string, slug?: string) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id || slug) {
      loadCourse();
    }
  }, [id, slug]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadCourse = async () => {
    try {
      setLoading(true);
      let data: Course | null = null;

      if (id) {
        data = await courseService.getCourseById(id);
      } else if (slug) {
        data = await courseService.getCourseBySlug(slug);
      }

      setCourse(data);
      setError(null);
    } catch (err) {
      setError("Failed to load course");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateCourse = async (updates: Partial<Course>) => {
    if (!course) return;

    try {
      await courseService.updateCourse(course.id, updates);
      setCourse((prev) => (prev ? { ...prev, ...updates } : null));
    } catch (err) {
      setError("Failed to update course");
      throw err;
    }
  };

  return {
    course,
    loading,
    error,
    updateCourse,
    refreshCourse: loadCourse,
  };
};
