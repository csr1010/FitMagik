var gulp = require("gulp"),
  mainBowerFiles = require("main-bower-files"),
  webserver = require("gulp-webserver"),
  es = require("event-stream"),
  concat = require("gulp-concat"),
  minify = require("gulp-minify"),
  sequence = require("run-sequence"),
  jshint = require('gulp-jshint'),
  inject = require("gulp-inject");

//linting the script files for code quality
gulp.task('lint', function() {
  gulp.src(['./app/**/*.js', '!./app/assets/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});
//copying assets to development environment
//copy assets = ca
gulp.task("ca", function() {
  gulp.src(['./app/assets/**', "./app/components/**/*.html"])
    .pipe(gulp.dest('./development/assets'));
});
// Concatenate AND minify app sources 
//cm = concatenate and minify
gulp.task("cm", function() {
  gulp.src(['./app/*.js', './app/components/**/*.js'])
    .pipe(concat('components-dev.js'))
    .pipe(minify())
    .pipe(gulp.dest('./development'));
});
//gulp task to inject scripts  / style path references 
//NOTE: for mainBowerFiles() to work make sure all bower components are saved as
//dependencies in bower.json
//ISRI = inject script references to index.html
gulp.task("isri", function() {
  gulp.src('./app/index.html')
    .pipe(inject(gulp.src(mainBowerFiles(), {
      read: false
    }), {
      name: "bower",
      relative: true
    })).pipe(inject(gulp.src("./development/*dev.js", {
      read: false
    })), {
      relative: true
    }).pipe(gulp.dest('./development'));
});



//run gulp tasks sequentially
gulp.task("build", function() {
  sequence("lint", ["cm", "ca"], "isri")
});

//server configuration
//WS = webserver
//since editor is network based 
//use process.env.PORT as the port and process.env.IP as the host 
// gulp.task('ws', function() {
//   gulp.src('./development')
//     .pipe(webserver({
//       host: process.env.IP,
//       port: process.env.PORT,
//       directoryListing: true
//         // fallback: 'index.html'
//     }));
// });
