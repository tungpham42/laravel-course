// services/exerciseService.ts
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
import { Exercise } from "@/types";

export const exerciseService = {
  // Create an exercise for a lesson
  async createExercise(
    courseId: string,
    lessonId: string,
    exercise: Omit<Exercise, "id">
  ): Promise<string> {
    try {
      const exercisesRef = collection(
        db,
        `courses/${courseId}/lessons/${lessonId}/exercises`
      );
      const docRef = await addDoc(exercisesRef, {
        ...exercise,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return docRef.id;
    } catch (error) {
      console.error("Error creating exercise:", error);
      throw error;
    }
  },

  // Get all exercises for a lesson
  async getExercisesByLessonId(
    courseId: string,
    lessonId: string
  ): Promise<Exercise[]> {
    try {
      const exercisesRef = collection(
        db,
        `courses/${courseId}/lessons/${lessonId}/exercises`
      );
      const q = query(exercisesRef, orderBy("createdAt", "asc"));
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Exercise)
      );
    } catch (error) {
      console.error("Error getting exercises:", error);
      throw error;
    }
  },

  // Get exercise by ID
  async getExerciseById(
    courseId: string,
    lessonId: string,
    exerciseId: string
  ): Promise<Exercise | null> {
    try {
      const docRef = doc(
        db,
        `courses/${courseId}/lessons/${lessonId}/exercises`,
        exerciseId
      );
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        } as Exercise;
      }
      return null;
    } catch (error) {
      console.error("Error getting exercise:", error);
      throw error;
    }
  },

  // Update exercise
  async updateExercise(
    courseId: string,
    lessonId: string,
    exerciseId: string,
    updates: Partial<Exercise>
  ): Promise<void> {
    try {
      const docRef = doc(
        db,
        `courses/${courseId}/lessons/${lessonId}/exercises`,
        exerciseId
      );
      await updateDoc(docRef, {
        ...updates,
        updatedAt: new Date(),
      });
    } catch (error) {
      console.error("Error updating exercise:", error);
      throw error;
    }
  },

  // Delete exercise
  async deleteExercise(
    courseId: string,
    lessonId: string,
    exerciseId: string
  ): Promise<void> {
    try {
      const docRef = doc(
        db,
        `courses/${courseId}/lessons/${lessonId}/exercises`,
        exerciseId
      );
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting exercise:", error);
      throw error;
    }
  },

  // Submit exercise solution
  async submitExerciseSolution(
    courseId: string,
    lessonId: string,
    exerciseId: string,
    userId: string,
    solution: string
  ): Promise<void> {
    try {
      const solutionsRef = collection(db, `exercise-solutions`);
      await addDoc(solutionsRef, {
        courseId,
        lessonId,
        exerciseId,
        userId,
        solution,
        submittedAt: new Date(),
        status: "submitted",
      });
    } catch (error) {
      console.error("Error submitting solution:", error);
      throw error;
    }
  },
};
