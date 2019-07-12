// 普通配置
export interface Options {
  r?: number;
  g?: number;
  b?: number;
}

// 黑白滤镜
export interface BlackAndWhiteOptions extends Options{
  criticalPoint?: number;
}

// 反色滤镜
export interface InvertedOptions {
  adjustmentR?: number;
  adjustmentG?: number;
  adjustmentB?: number;
}

// 模糊滤镜
export interface BlurOptions {
  coefficient?: number;
}

// 马赛克滤镜
export interface MosaicOptions {
  size?: number;
}