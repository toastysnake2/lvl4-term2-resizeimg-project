import multer from 'multer';
import fs from 'fs';
import path from 'path';

const dir = path.resolve(__dirname, '../../images');

const imgstorage = multer.diskStorage({
  destination: (req, file, callback) => {
    try {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      callback(null, dir);
    } catch (error) {
      throw new Error('process failed');
    }
  },

  filename: (req, file, callback) => {
    const name =
      path.parse(file.originalname).name.replace(/\s+/g, '') + '.jpg';
    callback(null, name);
  },
});

const uploadimg = multer({
  storage: imgstorage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg') {
      cb(null, true);
    } else {
      cb(new Error('file type not allowed'));
    }
  },
});

export default uploadimg;
