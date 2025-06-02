import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { imglocation, editedimg } from '../utilties/paths';

if (!fs.existsSync(editedimg)) {
  fs.mkdirSync(editedimg);
  console.log(`directory ${editedimg} created`);
} else {
  console.log(`directory ${editedimg} exists`);
}
export const resizingimg = async (
  name: string,
  width: number,
  height: number
) => {
  const inputedimg = path.join(imglocation, name);
  const { name: basename, ext } = path.parse(name);
  const outputimg = path.join(
    editedimg,
    `${basename}_${width}x${height}${ext}`
  );

  if (!fs.existsSync(inputedimg)) {
    throw new Error('Image not found');
  }

  if (!fs.existsSync(editedimg)) {
    fs.mkdirSync(editedimg, { recursive: true });
    console.log(`Created resized image directory: ${editedimg}`);
  }

  if (fs.existsSync(outputimg)) {
    return outputimg;
  }

  try {
    await sharp(inputedimg).resize(width, height).toFile(outputimg);
    return outputimg;
  } catch (error) {
    console.log(error);
    throw new Error('process failed');
  }
};
