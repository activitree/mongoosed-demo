/* global Package:readonly, Npm:readonly  */
Package.describe({
  name: 'tmeasday:check-npm-versions',
  version: '1.0.3',
  summary: 'Check that required npm packages are installed at the app level',
  git: 'https://github.com/tmeasday/check-npm-versions.git',
  documentation: 'README.md',
});

Npm.depends({ semver: '7.5.4' }); // 7.x versions are incompatible with Internet Explorer

Package.onUse(function (api) {
  api.versionsFrom(['2.12', '3.0-alpha.15']);
  api.use('typescript');
  // api.use('zodern:types@1.0.9');
  api.mainModule('check-npm-versions.ts');
});
