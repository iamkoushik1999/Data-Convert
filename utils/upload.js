import multer from 'multer';
import cloudinary from './cloudinary.js';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Multer storage configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const name = Date.now() + '-' + file.originalname;
    return {
      folder: 'Excel Upload App',
      public_id: name,
      resource_type: 'raw', // Use 'raw' for non-image files like Excel
    };
  },
});

const upload = multer({ storage: storage });
export default upload;
