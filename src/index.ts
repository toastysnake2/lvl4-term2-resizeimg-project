import express from 'express';
import fs from 'fs';
import path from 'path';
import { imglocation, editedimg } from './utilties/paths';
import resizeRoute from './routes/api/resizeimg';
import middlewareRoute from './routes/api/middlewareroute';
import uploadimgroute from './routes/api/uploadimgroute';

const app = express();
const port = 5000;

if (!fs.existsSync(editedimg)) {
  fs.mkdirSync(editedimg, { recursive: true });
  console.log(`Created resized image directory: ${editedimg}`);
} else {
  console.log(`Resized image directory already exists: ${editedimg}`);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/get-uploaded-images', (req, res) => {
  try {
    const images = fs.readdirSync(imglocation);
    res.json(images);
  } catch (err) {
    console.error('Error reading images directory:', err);
    res.status(500).json({ error: 'Failed to read images directory' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/home.html'));
});

app.use(express.static(path.join(__dirname, '../front-end')));

app.use('/images', express.static(imglocation));

app.use('/', resizeRoute);
app.use('/', middlewareRoute);
app.use('/', uploadimgroute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log('Serving images from:', imglocation);
  console.log('Available images:', fs.readdirSync(imglocation));
});
