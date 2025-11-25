// services/courseService.ts
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "@/firebase/config";
import { Course } from "@/types";

export const courseService = {
  async createCourse(courseData: Omit<Course, "id">): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, "courses"), {
        ...courseData,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return docRef.id;
    } catch (error) {
      console.error("Error creating course:", error);
      throw new Error(
        `Failed to create course: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  },

  async updateCourse(id: string, updates: Partial<Course>): Promise<void> {
    try {
      const docRef = doc(db, "courses", id);
      await updateDoc(docRef, {
        ...updates,
        updatedAt: new Date(),
      });
    } catch (error) {
      console.error("Error updating course:", error);
      throw new Error(
        `Failed to update course: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  },

  async deleteCourse(id: string): Promise<void> {
    try {
      const docRef = doc(db, "courses", id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting course:", error);
      throw new Error(
        `Failed to delete course: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  },

  async getAllCourses(): Promise<Course[]> {
    try {
      const q = query(collection(db, "courses"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Course)
      );
    } catch (error) {
      console.error("Error getting courses:", error);
      throw error;
    }
  },

  async getCourseById(id: string): Promise<Course | null> {
    try {
      const docRef = doc(db, "courses", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        } as Course;
      }
      return null;
    } catch (error) {
      console.error("Error getting course:", error);
      throw error;
    }
  },

  async getCourseBySlug(slug: string): Promise<Course | null> {
    try {
      const q = query(collection(db, "courses"), where("slug", "==", slug));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return {
          id: doc.id,
          ...doc.data(),
        } as Course;
      }
      return null;
    } catch (error) {
      console.error("Error getting course by slug:", error);
      throw error;
    }
  },
};
