import gulp from "gulp";

export default function assets() {
  return gulp.src("src/assets/**/*")
    .pipe(gulp.dest("dist/assets"));
}