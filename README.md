Building with Gulp.js is a matter of writing a little JavaScript. 

First things first, if you don't have Node.js ready you'll need that.

A visit to [NPM](https://www.npmjs.org/) will provide you with plenty of
Gulp plugins ready to work with. 

If your working on a project that doesn't have any previous Node
integration you'll need to create your package.json.
```
npm init
```
And now we have a package.json

So you can add Gulp to the project with: 
```
npm install gulp --save-dev
```
But in order to use it you'll need to do a global install.

```
npm install -g gulp
```

Pick some tasks and define them.
```
var gulp = require('gulp'); 
var watch = require('gulp-watch'); // Better Watch
var path = require('path'); // Needed for Less
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify'),
var concat = require('gulp-concat'),
    
```

Define a Task: 
```
gulp.task('css', function(){

}function);
```

Get your source and pipe your actions.
```
gulp.task('css', function(){

    gulp.src('assets/less/main.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('assets/css'));

}); 
    
```
Set a default task

```
gulp.task('default', function(){
  gulp.watch('assets/less/*.less', ['less']);
  gulp.watch('assets/**/*.js', ['js']);
});
```


