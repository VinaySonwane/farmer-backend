// src/server/middleware/upload.ts
import multer from "multer";
import path from "path";
// Configure storage for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads"); // save to public/uploads
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // preserve file extension
    },
});
const upload = multer({ storage });
export default uploadImage;
