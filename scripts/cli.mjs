#!/usr/bin/env tsx

import { $ } from "zx";
import { run } from "./run.mjs";

run({
  async release(option) {
    const { semver = "patch" } = option;
    await $`pnpm -r build`;
    await $`git add .`;
    await $`git commit -m "chore: release"`;
    // await $`git push --set-upstream origin main`;
    // await $`lerna version ${semver} --conventional-commits --no-commit-hooks -y`;
    // await $`npm login`; //TODO:设置npmrc的access token
    // await $`pnpm -r publish ----report-summary`;
  },
});
