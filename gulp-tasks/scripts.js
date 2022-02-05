import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import babel from "gulp-babel";
import uglify from "gulp-uglify";

export default function scripts() {
  return gulp.src("src/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ["@babel/env"]
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write("/"))
    .pipe(gulp.dest("dist/js"));
}