// Packages
import multer from 'multer';

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const uploadMulter = multer({ storage: multerConfig });

export { uploadMulter };
