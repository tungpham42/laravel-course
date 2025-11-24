// hooks/useCourses.ts
"use client";
import { useState, useEffect } from "react";
import { Course } from "@/types";
import { courseService } from "@/services/courseService";

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true);
      const data = await courseService.getAllCourses();
      setCourses(data);
      setError(null);
    } catch (err) {
      setError("Failed to load courses");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const createCourse = async (course: Omit<Course, "id">) => {
    try {
      const id = await courseService.createCourse(course);
      await loadCourses(); // Reload courses
      return id;
    } catch (err) {
      setError("Failed to create course");
      throw err;
    }
  };

  const updateCourse = async (id: string, updates: Partial<Course>) => {
    try {
      await courseService.updateCourse(id, updates);
      await loadCourses(); // Reload courses
    } catch (err) {
      setError("Failed to update course");
      throw err;
    }
  };

  const deleteCourse = async (id: string) => {
    try {
      await courseService.deleteCourse(id);
      await loadCourses(); // Reload courses
    } catch (err) {
      setError("Failed to delete course");
      throw err;
    }
  };

  return {
    courses,
    loading,
    error,
    createCourse,
    updateCourse,
    deleteCourse,
    refreshCourses: loadCourses,
  };
};
