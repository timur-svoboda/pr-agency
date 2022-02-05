import gulp from "gulp";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import sourcemaps from "gulp-sourcemaps";
import gulpIf from "gulp-if";
import autoprefixer from "gulp-autoprefixer";
import cssnano from "gulp-cssnano";

export default function styles() {
  const production = process.argv.includes("--production");

  return gulp.src("src/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpIf(production, autoprefixer()))
    .pipe(gulpIf(production, cssnano()))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(production ? "dist/css" : "src/css"));
}