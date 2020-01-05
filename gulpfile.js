const process = require('process');
const gulp = require('gulp');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');
const typescript = require('gulp-typescript');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const merge = require('merge2');
const { rollup } = require('rollup');
const tsconfig = require('./tsconfig.json');

// 环境变量
const isDevelopment = process.env.NODE_ENV === 'development';

/* ========== 开发环境工程 ========== */
// 编译typescript
function devTsProject() {
  const result = gulp.src('src/**/*.{ts,tsx}')
    .pipe(changed('lib'))
    .pipe(plumber())
    .pipe(typescript(tsconfig.compilerOptions));

  return result.js.pipe(gulp.dest('lib'));
}

// 监听文件变化
function devWatch() {
  gulp.watch('src/**/*.{ts,tsx}', devTsProject);
}

/* ========== 生产环境工程 ========== */
// 编译typescript
function proTsProject() {
  const result = gulp.src('src/**/*.{ts,tsx}')
    .pipe(typescript(tsconfig.compilerOptions));

  return merge([
    result.js.pipe(gulp.dest('lib')),
    result.dts.pipe(gulp.dest('lib'))
  ]);
}

// 拷贝d.ts文件
function copyDTs() {
  return gulp.src('src/**/*.d.ts')
    .pipe(gulp.dest('lib'));
}

// 打包成一个文件
async function dist() {
  const bundle = await rollup({
    input: 'lib/canvasFilter.js'
  });

  await bundle.write({
    format: 'umd',
    name: 'canvasFilter',
    file: 'dist/canvasFilter.js'
  });
}

// 压缩文件
function compress() {
  return gulp.src('dist/**/*.js')
    .pipe(terser({
      ecma: 5
    }))
    .pipe(rename(function(p) {
      p.basename += '.min';
    }))
    .pipe(gulp.dest('dist'));
}

// 编译文件
exports.default = isDevelopment
  ? gulp.series(devTsProject, dist, devWatch)
  : gulp.series(gulp.parallel(proTsProject, copyDTs), dist, compress);