// src/middleware/cloudinaryUpload.ts
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js";
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "vegetable-images", // Optional folder name in Cloudinary
        allowed_formats: ["jpg", "jpeg", "png"], // Allowed file formats
    },
});
const upload = multer({ storage });
export default upload;
