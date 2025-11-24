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
import { cloudinaryService } from "./cloudinaryService";

export const courseService = {
  async createCourse(
    courseData: Omit<Course, "id">,
    imageFile?: File
  ): Promise<string> {
    try {
      let imageUrl = courseData.image;

      if (imageFile) {
        console.log("Uploading course image to Cloudinary...");
        imageUrl = await cloudinaryService.uploadCourseImage(imageFile, "temp");
      }

      const docRef = await addDoc(collection(db, "courses"), {
        ...courseData,
        image: imageUrl,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      // Update with proper course ID if we used temp
      if (imageFile && imageUrl !== courseData.image) {
        try {
          const finalImageUrl = await cloudinaryService.uploadCourseImage(
            imageFile,
            docRef.id
          );
          await updateDoc(docRef, { image: finalImageUrl });

          // Delete temp image
          const tempPublicId = cloudinaryService.getPublicIdFromUrl(imageUrl);
          if (tempPublicId) {
            await cloudinaryService.deleteImage(tempPublicId);
          }
        } catch (imageError) {
          console.warn(
            "Failed to update course image with final ID:",
            imageError
          );
          // Continue with temp image URL
        }
      }

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

  async updateCourse(
    id: string,
    updates: Partial<Course>,
    imageFile?: File
  ): Promise<void> {
    try {
      let imageUrl = updates.image;

      // Get current course data to preserve old image URL
      const currentCourse = await this.getCourseById(id);
      const oldImageUrl: string | undefined = currentCourse?.image;

      if (imageFile) {
        console.log("Uploading new course image to Cloudinary...");
        imageUrl = await cloudinaryService.uploadCourseImage(imageFile, id);
      }

      const docRef = doc(db, "courses", id);
      await updateDoc(docRef, {
        ...updates,
        ...(imageUrl && { image: imageUrl }),
        updatedAt: new Date(),
      });

      // Delete old image if it was replaced
      if (imageFile && oldImageUrl && oldImageUrl.includes("cloudinary")) {
        try {
          const oldPublicId = cloudinaryService.getPublicIdFromUrl(oldImageUrl);
          if (oldPublicId) {
            await cloudinaryService.deleteImage(oldPublicId);
          }
        } catch (deleteError) {
          console.warn("Could not delete old image:", deleteError);
        }
      }
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
      const course = await this.getCourseById(id);

      if (course?.image && course.image.includes("cloudinary")) {
        const publicId = cloudinaryService.getPublicIdFromUrl(course.image);
        if (publicId) {
          try {
            await cloudinaryService.deleteImage(publicId);
          } catch (deleteError) {
            console.warn("Could not delete course image:", deleteError);
          }
        }
      }

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
