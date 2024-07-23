import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';
// ENV
const { CLOUDINARY_CLOUDNAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;
// ------------------------------------------------

// Cloudinary Config
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUDNAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export default cloudinary;
