"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect");
var rename = require('gulp-rename');
var download = require("gulp-download-stream");

gulp.task("copyfiles", function() {
  download("https://raw.githubusercontent.com/angular/code.angularjs.org/master/1.4.0-rc.2/angular.min.js")
  .pipe(gulp.dest("scripts/"));
  download("https://raw.githubusercontent.com/angular/code.angularjs.org/master/1.4.0-rc.2/angular-route.min.js")
  .pipe(gulp.dest("scripts/"));
  download("https://cdnjs.cloudflare.com/ajax/libs/flot/0.8.3/excanvas.min.js")
  .pipe(gulp.dest("scripts/"));
  gulp
    .src("node_modules/syncfusion-javascript/Scripts/ej/web/ej.web.all.min.js")
    .pipe(gulp.dest("scripts"));
  gulp
    .src("node_modules/syncfusion-javascript/Scripts/ej/common/ej.widget.angular.min.js")
    .pipe(gulp.dest("scripts"));  
  gulp.src("node_modules/jquery/dist/jquery.min.js").pipe(gulp.dest("scripts"));
  gulp
    .src("node_modules/syncfusion-javascript/Scripts/ej/web/ej.reportdesigner.min.js")
    .pipe(gulp.dest("scripts"));
  gulp
    .src(
      "node_modules/syncfusion-javascript/Scripts/ej/web/ej.documenteditor.min.js"
    )
    .pipe(gulp.dest("scripts"));
  gulp
    .src(
      "node_modules/syncfusion-javascript/Scripts/ej/common/ej.unobtrusive.min.js"
    )
    .pipe(gulp.dest("scripts"));
  gulp
    .src(
      "node_modules/syncfusion-javascript/Scripts/ej/common/ej.widget.ko.min.js"
    )
    .pipe(gulp.dest("scripts"));
  gulp
    .src("node_modules/syncfusion-ej-global/i18n/*.js")
    .pipe(gulp.dest("scripts/cultures"));
  gulp
    .src("node_modules/syncfusion-ej-global/l10n/*.js")
    .pipe(gulp.dest("scripts/l10n"));
  gulp
    .src("node_modules/syncfusion-javascript/Content/ej/web/**")
    .pipe(gulp.dest("content/ejthemes"));    
  gulp.src("node_modules/jquery-validation/dist/jquery.validate.min.js").pipe(gulp.dest("scripts"));
  gulp.src("node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.min.js").pipe(gulp.dest("scripts"));
  gulp.src("node_modules/jsrender/jsrender.min.js").pipe(gulp.dest("scripts"));
  gulp.src("node_modules/codemirror/addon/hint/**/").pipe(gulp.dest("scripts/CodeMirror"));
  gulp.src("node_modules/codemirror/lib/**/").pipe(gulp.dest("scripts/CodeMirror"));
  gulp.src("node_modules/codemirror/mode/htmlmixed/**/").pipe(gulp.dest("scripts/CodeMirror"));
  gulp.src("node_modules/codemirror/mode/sql/**/").pipe(gulp.dest("scripts/CodeMirror"));
  gulp.src("node_modules/codemirror/mode/xml/**/").pipe(gulp.dest("scripts/CodeMirror"));
  gulp.src("node_modules/codemirror/mode/css/**/").pipe(gulp.dest("scripts/CodeMirror"));
  gulp.src("node_modules/codemirror/mode/javascript/**/").pipe(gulp.dest("scripts/CodeMirror"));
});
gulp.task("rename", function(){  
  gulp.src("scripts/jquery.min.js").pipe(rename('jquery-3.1.1.min.js')).pipe(gulp.dest("scripts"));
  gulp.src("scripts/CodeMirror/codemirror.css").pipe(rename('codemirror.min.css')).pipe(gulp.dest("scripts/CodeMirror"));
  gulp.src("scripts/CodeMirror/show-hint.css").pipe(rename('show-hint.min.css')).pipe(gulp.dest("scripts/CodeMirror"));})
gulp.task("default", function() {
  connect.server({
    port: 5200,
    fallback: "default.htm",
    livereload: true
  });
});

