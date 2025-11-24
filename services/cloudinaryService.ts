// services/cloudinaryService.ts
export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
}

export interface CloudinaryTransformation {
  width?: number;
  height?: number;
  crop?: string;
  quality?: string;
  format?: string;
  aspect_ratio?: string;
  gravity?: string;
}

export const cloudinaryService = {
  // Upload image to Cloudinary
  async uploadImage(
    file: File | Blob,
    folder: string = "khoa-hoc",
    transformations: CloudinaryTransformation = {}
  ): Promise<CloudinaryUploadResult> {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "khoa-hoc"); // Use your upload preset name
      formData.append("folder", folder);

      // Build transformation string
      if (Object.keys(transformations).length > 0) {
        const transformationParams = [];

        if (transformations.width)
          transformationParams.push(`w_${transformations.width}`);
        if (transformations.height)
          transformationParams.push(`h_${transformations.height}`);
        if (transformations.crop)
          transformationParams.push(`c_${transformations.crop}`);
        if (transformations.quality)
          transformationParams.push(`q_${transformations.quality}`);
        if (transformations.format)
          transformationParams.push(`f_${transformations.format}`);
        if (transformations.aspect_ratio)
          transformationParams.push(`ar_${transformations.aspect_ratio}`);
        if (transformations.gravity)
          transformationParams.push(`g_${transformations.gravity}`);

        if (transformationParams.length > 0) {
          formData.append("transformation", transformationParams.join(","));
        }
      }

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/filecuatui/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Upload failed: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw error;
    }
  },

  // Upload image with specific transformations for course images
  async uploadCourseImage(file: File, courseId: string): Promise<string> {
    const transformations: CloudinaryTransformation = {
      width: 800,
      height: 450,
      crop: "fill",
      quality: "auto",
      format: "webp",
    };

    const result = await this.uploadImage(
      file,
      `courses/${courseId}`,
      transformations
    );

    return result.secure_url;
  },

  // Upload lesson content images
  async uploadLessonImage(
    file: File,
    courseId: string,
    lessonId: string
  ): Promise<string> {
    const transformations: CloudinaryTransformation = {
      width: 1200,
      quality: "auto",
      format: "webp",
    };

    const result = await this.uploadImage(
      file,
      `courses/${courseId}/lessons/${lessonId}`,
      transformations
    );

    return result.secure_url;
  },

  // Delete image from Cloudinary
  async deleteImage(publicId: string): Promise<void> {
    try {
      // For client-side deletion, you'll need a server API route
      // since the API secret shouldn't be exposed to the client
      const response = await fetch("/api/cloudinary/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ publicId }),
      });

      if (!response.ok) {
        throw new Error(`Delete failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error deleting from Cloudinary:", error);
      throw error;
    }
  },

  // Extract public_id from Cloudinary URL
  getPublicIdFromUrl(url: string): string | null {
    try {
      const urlObj = new URL(url);
      const pathParts = urlObj.pathname.split("/");
      const publicIdWithExtension = pathParts.slice(7).join("/"); // Cloudinary URLs have specific structure
      const publicId = publicIdWithExtension.replace(/\.[^/.]+$/, ""); // Remove extension
      return publicId;
    } catch {
      // Fallback regex method
      const matches = url.match(/\/v\d+\/(.+)\.\w+$/);
      return matches ? matches[1] : null;
    }
  },

  // Generate optimized image URL with transformations
  generateOptimizedUrl(
    publicId: string,
    transformations: CloudinaryTransformation = {}
  ): string {
    const baseUrl = `https://res.cloudinary.com/filecuatui/image/upload`;

    const transformationParams = [];

    if (transformations.width)
      transformationParams.push(`w_${transformations.width}`);
    if (transformations.height)
      transformationParams.push(`h_${transformations.height}`);
    if (transformations.crop)
      transformationParams.push(`c_${transformations.crop}`);
    if (transformations.quality)
      transformationParams.push(`q_${transformations.quality}`);
    if (transformations.format)
      transformationParams.push(`f_${transformations.format}`);

    const transformationString =
      transformationParams.length > 0
        ? `${transformationParams.join(",")}/`
        : "";

    return `${baseUrl}/${transformationString}${publicId}`;
  },
};
