import express, { Request, Response, Router } from 'express';
import uploadimgmiddleware from '../../middleware/uploadimgmiddleware';

const router = Router();

router.post('/upload', uploadimgmiddleware, (req: Request, res: Response) => {
  try {
    if (!req.file) {
      res.status(400).send('no file found');
      return;
    }
    res.status(200).json({ message: 'Uploaded successfully', file: req.file });
  } catch (error) {
    res.status(500).send(`error running process ${error}`);
  }
});

export default router;
