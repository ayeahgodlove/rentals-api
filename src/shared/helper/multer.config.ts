import multer from "multer";

// Create a Multer storage engine that saves files to disk
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/avatars");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// create a multer instance with the storage engine
const multerInstance = multer({ storage: storage });
export { multerInstance };
