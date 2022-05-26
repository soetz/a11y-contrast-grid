const { emptyDirSync } = require("fs-extra");
const mix = require("laravel-mix");
const MixGlob = require("laravel-mix-glob");

mix.options({ manifest: false, terser: { extractComments: false } });
mix.setPublicPath("dist");
const mixGlob = new MixGlob({ mix });

const generateWithManifest = (manifestFile, directoryName) => {
  mixGlob.ts(
    ["src/**/*.ts", "!src/**/*.d.ts", "!src/**/*.vue.ts"],
    `dist/${directoryName}`,
    null,
    {
      base: "src",
    }
  );
  mix.ts("src/popup.vue.ts", `dist/${directoryName}`).vue();
  mix.copy("src/static", `dist/${directoryName}`);
  mix.copy(`src/${manifestFile}`, `dist/${directoryName}/manifest.json`);
  if (!mix.inProduction()) {
    mix.copy("src/source-maps", `dist/${directoryName}`);
  }
};

generateWithManifest("manifest-v3.json", "chromium");
generateWithManifest("manifest-v2.json", "firefox");

mix.before(() => {
  emptyDirSync("dist");
});
