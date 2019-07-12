import { InvertedOptions } from './types';

/**
 * 反色滤镜
 * @param { ImageData } imageData
 * @param { InvertedOptions } options
 */

function inverted(imageData: ImageData, options: InvertedOptions = {}): ImageData {
  const {
    data: pixelData,
    width,
    height
  }: ImageData = imageData;

  const {
    adjustmentR = 0,
    adjustmentG = 0,
    adjustmentB = 0
  }: InvertedOptions = options;

  const len: number = width * height;

  for (let i: number = 0; i < len; i++) {
    const r: number = pixelData[i * 4],
      g: number = pixelData[(i * 4) + 1],
      b: number = pixelData[(i * 4) + 2];

    pixelData[i * 4] = 255 - r + adjustmentR;
    pixelData[(i * 4) + 1] = 255 - g + adjustmentG;
    pixelData[(i * 4) + 2] = 255 - b + adjustmentB;
  }

  return imageData;
}

export default inverted;