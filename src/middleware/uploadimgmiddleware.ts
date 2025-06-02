import uploadimg from '../controllers/uploadimg';

const uploadimgmiddleware = uploadimg.single('file');

export default uploadimgmiddleware;
