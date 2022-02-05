import gulp from "gulp";

export default function pages() {
  return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"));
}