
var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var gulpif = require('gulp-if');
var sprity = require('sprity');
 
// generate sprite.png and _sprite.scss 
gulp.task('sprites', function () {
  return sprity.src({
    //src: './src/images/**/*.{png,jpg}',
    name: 'sprite',
    src:path.join(conf.paths.src, '/assets/images/*.png'),
    //style: './sprite.css',
    style:path.join(conf.paths.src, '/app/_sprites'),
    // ... other optional options 
    // for example if you want to generate scss instead of css 
    processor: 'sass', // make sure you have installed sprity-sass
    'style-type': 'scss', 
  })
  // .pipe(gulpif('*.png', gulp.dest('./dist/assets/images/'), gulp.dest('./dist/styles/')))
  .pipe(gulpif('*.png', gulp.dest(path.join(conf.paths.src, '/assets/images')), gulp.dest(path.join(conf.paths.src, '/app/'))))
});