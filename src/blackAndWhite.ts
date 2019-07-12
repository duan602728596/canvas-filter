import { BlackAndWhiteOptions } from './types';

/**
 * 黑白滤镜
 * @param { ImageData } imageData
 * @param { BlackAndWhiteOptions } options
 */
function blackAndWhite(imageData: ImageData, options: BlackAndWhiteOptions = {}): ImageData {
  const {
    data: pixelData,
    width,
    height
  }: ImageData = imageData;

  const {
    r: optionsR = 0.3,
    g: optionsG = 0.59,
    b: optionsB = 0.11,
    criticalPoint = 125
  }: BlackAndWhiteOptions = options;

  const len: number = width * height;

  for (let i: number = 0; i < len; i++) {
    const r: number = pixelData[i * 4],
      g: number = pixelData[(i * 4) + 1],
      b: number = pixelData[(i * 4) + 2];

    const grey: number = (r * optionsR) + (g * optionsG) + (b * optionsB);

    const pv: number = grey > criticalPoint ? 255 : 0;

    pixelData[i * 4] = pv;
    pixelData[(i * 4) + 1] = pv;
    pixelData[(i * 4) + 2] = pv;
  }

  return imageData;
}

export default blackAndWhite;