import path, { resolve } from "path";
import type { Plugin } from "vite";
import fs from "fs";
const copyPackage = () => {
  return {
    name: "copyPackage",
    closeBundle() {
      fs.copyFileSync(
        path.resolve(__dirname, "../package.json"),
        path.resolve(__dirname, "../../dist/package.json"),
      );
    },
  } as Plugin;
};

export default copyPackage;
