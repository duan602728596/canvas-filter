# canvas-filter

canvas滤镜函数。
函数参考了[https://blog.csdn.net/u010081689/article/details/49071371](https://blog.csdn.net/u010081689/article/details/49071371)。

## 滤镜方法

### 灰度滤镜：canvasFilter.grayScale

* imageData `{ ImageData }`
* options `{ object }`
  * r `{ number }`
  * g `{ number }`
  * b `{ number }`
  
### 黑白滤镜：canvasFilter.blackAndWhite

* imageData `{ ImageData }`
* options `{ object }`
  * r `{ number }`
  * g `{ number }`
  * b `{ number }`
  * criticalPoint `{ number }`
  
### 反色滤镜：canvasFilter.inverted

* imageData `{ ImageData }`
* options `{ object }`
  * adjustmentR `{ number }`
  * adjustmentG `{ number }`
  * adjustmentB `{ number }`

### 模糊滤镜：canvasFilter.blur

* imageData `{ ImageData }`
* options `{ object }`
  * coefficient `{ number }`
  
### 马赛克：canvasFilter.mosaic

* imageData `{ ImageData }`
* options `{ object }`
  * size `{ number }`