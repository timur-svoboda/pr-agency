import del from "del";

export default function clean(cb) {
  const production = process.argv.includes("--production");

  del.sync(production ? "dist" : "src/css");
  
  cb();
}