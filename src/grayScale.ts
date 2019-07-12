import { Options } from './types';

/**
 * 灰度滤镜
 * @param { ImageData } imageData
 * @param { Options } options
 */
function grayScale(imageData: ImageData, options: Options = {}): ImageData {
  const {
    data: pixelData,
    width,
    height
  }: ImageData = imageData;

  const {
    r: optionsR = 0.3,
    g: optionsG = 0.59,
    b: optionsB = 0.11
  }: Options = options;

  const len: number = width * height;

  for (let i: number = 0 ; i < len; i++) {
    const r: number = pixelData[i * 4],
      g: number = pixelData[(i * 4) + 1],
      b: number = pixelData[(i * 4) + 2];

    const grey: number = (r * optionsR) + (g * optionsG) + (b * optionsB);

    pixelData[i * 4] = grey;
    pixelData[(i * 4) + 1] = grey;
    pixelData[(i * 4) + 2] = grey;
  }

  return imageData;
}

export default grayScale;