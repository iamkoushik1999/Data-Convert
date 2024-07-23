import { Router } from 'express';
const router = Router();
// Controllers
import { convert } from '../controllers/convertController.js';
// Utils
import upload from '../utils/upload.js';
// import { uploadMulter } from '../utils/multer.js';

// ------------------------------- Routes --------------------------------

// POST
// Upload File
router.post('/convert', upload.single('file'), convert);
// router.route('/convert').post(uploadMulter.single('file'), convert);

export default router;
