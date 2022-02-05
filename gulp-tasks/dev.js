import gulp from "gulp";

import styles from "./styles.js";
import watch from "./watch.js";
import server from "./server.js";
import clean from "./clean.js";

export default gulp.series(
  clean,
  styles,
  gulp.parallel(watch, server)
);