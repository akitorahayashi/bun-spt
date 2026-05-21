import { describe, expect, test } from "bun:test";

function runScript(): number {
  const command = Bun.spawnSync(["bun", "src/index.ts"], {
    cwd: import.meta.dir,
    stdout: "pipe",
    stderr: "pipe",
  });

  return command.exitCode ?? 1;
}

describe("bun script template", () => {
  test("runs without errors", () => {
    expect(runScript()).toBe(0);
  });
});
