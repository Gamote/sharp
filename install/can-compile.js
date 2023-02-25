'use strict';

const libvips = require('../lib/libvips');

// We need this because we have changed the `libvips` version we don't want
// to count on the consumers that will pass the `--build-from-source` flag
// Info: https://sharp.pixelplumbing.com/install#building-from-source

// TODO: we should rebuild sharp with the new `libvips` version and deliver that instead
const forceRecompile = true;

try {
  if (!(forceRecompile || libvips.useGlobalLibvips() || libvips.hasVendoredLibvips())) {
    process.exitCode = 1;
  }
} catch (err) {
  process.exitCode = 1;
}
