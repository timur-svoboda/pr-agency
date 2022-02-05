import browserSync from "browser-sync";
const bs = browserSync.create();

export default function server(cb) {
  bs.init({
    server: "src"
  });

  bs.watch(["src/**/*", "!src/css/**/*", "!src/scss/**/*"]).on("change", bs.reload);

  bs.watch("src/css/**/*.css").on("change", () => bs.reload("*.css"));
  
  cb();
}