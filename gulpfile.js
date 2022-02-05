import gulp from "gulp";

import devTask from "./gulp-tasks/dev.js";
import buildTask from "./gulp-tasks/build.js";
import publishTask from "./gulp-tasks/publish.js";

export default devTask;

export const build = buildTask;

export const publish = gulp.series(buildTask, publishTask);