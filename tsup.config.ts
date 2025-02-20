import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/{components,hooks}/**/index.{ts,tsx}"],
  format: ["esm"],
  sourcemap: true,
  minify: true,
  target: "esnext",
  external: ["react", "react-dom"],
  outDir: "dist",
});
