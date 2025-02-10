'use strict';

const { default: nextra } = require('nextra');

const withNextra = nextra({
  staticImage: true
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
module.exports = withNextra({
  output: 'export',
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  experimental: {
    reactCompiler: true,
    reactOwnerStack: true
  }
});
