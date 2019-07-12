const path = require('path');
const browserSync = require('browser-sync');

/* 创建预览服务器 */
const bs = browserSync.create();

bs.init({
  server: path.join(__dirname, '..')
});