import gulp from "gulp";

import styles from "./styles.js";

export default function watch(cb) {
  gulp.watch("src/scss/**/*.scss", styles);

  cb();
}