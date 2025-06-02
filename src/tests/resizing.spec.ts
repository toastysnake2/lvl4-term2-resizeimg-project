import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { resizingimg } from '../controllers/resizingfunction';
import { imglocation, editedimg } from '../utilties/paths';

const testw = 120;
const testh = 100;
const testimg = 'bonjour.jpg';
const imgpath = path.join(imglocation, testimg);

describe('resizing image function', () => {
  afterEach(() => {
    const resizedName = `${path.parse(testimg).name}_${testw}x${testh}.jpg`;
    const resizedPath = path.join(editedimg, resizedName);

    if (fs.existsSync(resizedPath)) {
      fs.unlinkSync(resizedPath);
    }
  });

  it('should resize all images', async () => {
    console.log('Testing image at path:', imgpath);
    const outputPath = await resizingimg(testimg, testw, testh);

    expect(fs.existsSync(outputPath)).toBeTrue();

    const metadata = await sharp(outputPath).metadata();
    expect(metadata.width).toBe(testw);
    expect(metadata.height).toBe(testh);
  });
});
