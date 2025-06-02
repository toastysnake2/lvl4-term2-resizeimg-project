import { Request, Response, Router } from 'express';
import resizingmiddleware from '../../middleware/imageresizingmiddleware';

const router = Router();

router.get('/', resizingmiddleware, (req: Request, res: Response) => {
  const outputPath = res.locals.outputPath as string;
  res.sendFile(outputPath);
});

export default router;
