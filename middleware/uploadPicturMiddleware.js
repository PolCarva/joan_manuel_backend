import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadPicture = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1000000, // 2MB
  },
  fileFilter: function (req, file, cb) {
    const allowedFileTypes = [".png", ".jpg", ".jpeg", ".avif", ".webp"];
    let ext = path.extname(file.originalname);
    if (!allowedFileTypes.includes(ext)) {
      return cb(new Error("File type is not supported"), false);
    }
    cb(null, true);
  },
});

export { uploadPicture };
