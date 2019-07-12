import { BlurOptions } from './types';

/**
 * 模糊滤镜
 * @param { ImageData } imageData
 * @param { Options } options
 */
function blur(imageData: ImageData, options: BlurOptions = {}): ImageData {
  const {
    data: pixelData,
    width,
    height
  }: ImageData = imageData;

  const { coefficient = 2 }: BlurOptions = options;

  const totalNum: number = ((2 * coefficient) + 1) * ((2 * coefficient) + 1);

  for (let i: number = coefficient; i < height - coefficient; i++) {
    for (let j: number = coefficient; j < width - coefficient; j++) {
      let totalR: number = 0,
        totalG: number = 0,
        totalB: number = 0;

      for (let dx: number = -coefficient; dx <= coefficient; dx++) {
        for (let dy: number = -coefficient; dy <= coefficient; dy++) {
          const x: number = i + dx;
          const y: number = j + dy;

          const p: number = (x * width) + y;

          totalR += pixelData[p * 4];
          totalG += pixelData[(p * 4) + 1];
          totalB += pixelData[(p * 4) + 2];
        }
      }

      const q: number = (i * width) + j;

      pixelData[q * 4] = totalR / totalNum;
      pixelData[(q * 4) + 1] = totalG / totalNum;
      pixelData[(q * 4) + 2] = totalB / totalNum;
    }
  }

  return imageData;
}

export default blur;