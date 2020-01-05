const imageBox = document.getElementById('imageBox');
const [width, height] = [400, 274];
const image = new Image();

// 灰度滤镜
function drawCanvas(id, filterName, options) {
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext('2d');

  ctx.drawImage(image, 0, 0, width, height);

  const imgData = ctx.getImageData(0, 0, width, height);
  const filterImgData = canvasFilter[filterName](imgData, options);

  ctx.putImageData(filterImgData, 0, 0);
}

// 创建滤镜
function handleImageLoad(event) {
  drawCanvas('canvas-gray-scale', 'grayScale');
  drawCanvas('canvas-black-and-white', 'blackAndWhite');
  drawCanvas('canvas-inverted', 'inverted');
  drawCanvas('canvas-blur', 'blur');
  drawCanvas('canvas-mosaic', 'mosaic', { size: 32 });
}

image.addEventListener('load', handleImageLoad, false);
image.src = 'example.jpg';
image.width = width;
image.height = height;

imageBox.appendChild(image);