import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const command = process.execPath;
const nextBin = join(process.cwd(), "node_modules", "next", "dist", "bin", "next");

if (!existsSync(nextBin)) {
  console.error(`Next CLI was not found at ${nextBin}. Run npm install first.`);
  process.exit(1);
}

const result = spawnSync(command, [nextBin, "build", "--webpack"], {
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
  },
  stdio: "inherit",
  shell: false,
});

if (result.error) {
  console.error(result.error);
}

process.exit(result.status ?? 1);
