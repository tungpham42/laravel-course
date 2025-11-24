// services/lessonService.ts
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/firebase/config";
import { Lesson } from "@/types";

export const lessonService = {
  // Create a lesson for a course
  async createLesson(
    courseId: string,
    lesson: Omit<Lesson, "id">
  ): Promise<string> {
    try {
      const lessonsRef = collection(db, `courses/${courseId}/lessons`);
      const docRef = await addDoc(lessonsRef, {
        ...lesson,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return docRef.id;
    } catch (error) {
      console.error("Error creating lesson:", error);
      throw error;
    }
  },

  // Get all lessons for a course
  async getLessonsByCourseId(courseId: string): Promise<Lesson[]> {
    try {
      const lessonsRef = collection(db, `courses/${courseId}/lessons`);
      const q = query(lessonsRef, orderBy("createdAt", "asc"));
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Lesson)
      );
    } catch (error) {
      console.error("Error getting lessons:", error);
      throw error;
    }
  },

  // Get lesson by ID
  async getLessonById(
    courseId: string,
    lessonId: string
  ): Promise<Lesson | null> {
    try {
      const docRef = doc(db, `courses/${courseId}/lessons`, lessonId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        } as Lesson;
      }
      return null;
    } catch (error) {
      console.error("Error getting lesson:", error);
      throw error;
    }
  },

  // Update lesson
  async updateLesson(
    courseId: string,
    lessonId: string,
    updates: Partial<Lesson>
  ): Promise<void> {
    try {
      const docRef = doc(db, `courses/${courseId}/lessons`, lessonId);
      await updateDoc(docRef, {
        ...updates,
        updatedAt: new Date(),
      });
    } catch (error) {
      console.error("Error updating lesson:", error);
      throw error;
    }
  },

  // Delete lesson
  async deleteLesson(courseId: string, lessonId: string): Promise<void> {
    try {
      const docRef = doc(db, `courses/${courseId}/lessons`, lessonId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting lesson:", error);
      throw error;
    }
  },
};
