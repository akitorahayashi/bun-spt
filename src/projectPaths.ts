import path from "node:path";

const projectRoot = path.join(import.meta.dir, "..");

export const projectPaths = {
  projectRoot,
} as const;
