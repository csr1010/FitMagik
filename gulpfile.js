var gulp = require("gulp"),
  mainBowerFiles = require("main-bower-files"),
  notify = require('gulp-notify'),
  sequence = require("run-sequence"),
  inject = require("gulp-inject");

//plugins for transpiling es6 to browser understandable format
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var ngAnnotate = require('browserify-ngannotate');

//plugin for template caching angular templates, by storing all the templates in templates.js
var rename = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');

//server setup
var browserSync = require('browser-sync').create();

var JSFiles = "./app/**/*.js";
var viewHtmlFiles = "./app/modules/**/*.html";
var componentHtmlFiles = "./app/components/**/*.html";

//intercept and notify errors  
var interceptErrors = function(error) {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  // Keep gulp from hanging on this task
  this.emit('end');
};
gulp.task('views', function() {
  return gulp.src([viewHtmlFiles, componentHtmlFiles])
    .pipe(templateCache({
      standalone: true
    }))
    .on('error', interceptErrors)
    .pipe(rename("main.templates.js"))
    .pipe(gulp.dest('./app/config/'));
});

gulp.task('browserify', ['views'], function() {
  return browserify('./app/app.js')
    .transform(babelify, {
      presets: ["es2015"]
    })
    .transform(ngAnnotate)
    .bundle()
    .on('error', interceptErrors)
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('main.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('./development/'));
});





//copying assets to development environment
gulp.task("assets", function() {
  gulp.src(['./app/assets/**'])
    .on('error', interceptErrors)
    .pipe(gulp.dest('./development/assets'));
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
    }))
    .pipe(inject(gulp.src("./development/main.js", {
      read: false
    })), {
      relative: true
    })
    .pipe(gulp.dest('./development'));
});



//run gulp tasks sequentially
gulp.task("default", function() {
  sequence("assets", "browserify", "isri", function() {
    browserSync.init(['./development/**/**.**'], {
      server: "./",
      port: process.env.PORT,
      notify: true,
      ui: {
        port: process.env.PORT
      }
    });

    //gulp.watch("./app/index.html", ['isri']);
    gulp.watch(viewHtmlFiles, ['views']);
    gulp.watch(componentHtmlFiles, ['views']);
    gulp.watch(JSFiles, ['browserify']);
  });
});
