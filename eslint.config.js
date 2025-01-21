'use strict';

module.exports = require('eslint-config-sukka').sukka({
  ignores: {
    customGlobs(prev) {
      return [...prev, '_src/**/*'];
    }
  }
}, {
  files: [
    'src/**/_*.ts',
    'src/**/_*.tsx'
  ],
  rules: {
    '@eslint-react/naming-convention/filename': 'off'
  }
});
