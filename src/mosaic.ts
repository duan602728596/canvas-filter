import { MosaicOptions } from './types';

/**
 * 马赛克滤镜
 * @param { ImageData } imageData
 * @param { MosaicOptions } options
 */
function mosaic(imageData: ImageData, options: MosaicOptions = {}): ImageData {
  const {
    data: pixelData,
    width,
    height
  }: ImageData = imageData;

  const { size = 8 }: MosaicOptions = options;

  const totalNum: number = size ** 2;

  for (let i: number = 0; i < height; i += size) {
    for (let j: number = 0; j < width; j += size) {
      let totalR: number = 0,
        totalG: number = 0,
        totalB: number = 0;

      for (let dx: number = 0; dx < size; dx++) {
        for (let dy: number = 0; dy < size; dy++) {
          const x: number = i + dx;
          const y: number = j + dy;

          const p: number = (x * width) + y;

          totalR += pixelData[p * 4];
          totalG += pixelData[(p * 4) + 1];
          totalB += pixelData[(p * 4) + 2];
        }
      }

      const resR: number = totalR / totalNum;
      const resG: number = totalG / totalNum;
      const resB: number = totalB / totalNum;

      for (let dx: number = 0; dx < size; dx++) {
        for (let dy: number = 0; dy < size; dy++) {
          const x: number = i + dx;
          const y: number = j + dy;

          const p: number = (x * width) + y;

          pixelData[p * 4] = resR;
          pixelData[(p * 4) + 1] = resG;
          pixelData[(p * 4) + 2] = resB;
        }
      }
    }
  }

  return imageData;
}

export default mosaic;