// cloudinary/config.ts
import { v2 as cloudinary } from "cloudinary";

// Server-side configuration (for API routes or server components)
cloudinary.config({
  cloud_name: "filecuatui",
  api_key: "691187437325515",
  api_secret: "cck2dwn9W_c4bT00eFpA0pJGgZQ",
});

export { cloudinary };

// Client-side configuration (for direct uploads from browser)
export const cloudinaryClientConfig = {
  cloudName: "filecuatui",
  uploadPreset: "khoa-hoc", // You'll need to create this in Cloudinary dashboard
  apiKey: "691187437325515",
};
