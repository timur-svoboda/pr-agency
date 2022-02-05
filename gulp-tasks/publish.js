import gulp from "gulp";
import ghPages from "gulp-gh-pages";

export default function publish() {
  return gulp.src("dist/**/*")
    .pipe(ghPages());
}