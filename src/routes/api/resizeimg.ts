import { Request, Response, Router } from 'express';
import { resizingimg } from '../../controllers/resizingfunction';

const router = Router();

router.get('/resize', async (req: Request, res: Response): Promise<void> => {
  const { name, width, height } = req.query;

  try {
    if (!name || !width || !height) {
      res.status(400).send('no paramters found');
      return;
    }

    const outputimgpath = await resizingimg(
      name as string,
      parseInt(width as string),
      parseInt(height as string)
    );

    res.sendFile(outputimgpath);
  } catch (error) {
    console.log(error);
    res.status(500).send('error running process');
  }
});

export default router;
