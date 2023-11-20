/* global Package */
Package.describe({
  name: 'aldeed:collection3',
  summary: 'Automatic validation of Meteor Mongo insert and update operations on the client and server',
  version: '3.5.2',
  documentation: '../../README.md',
  git: 'https://github.com/aldeed/meteor-collection2.git'
})

Npm.depends({
  'lodash.isempty': '4.4.0',
  'lodash.isequal': '4.5.0',
  'lodash.isobject': '3.0.2'
})

Package.onUse(function (api) {
  api.versionsFrom(['2.12', '3.0-alpha.15'])
  api.use([
    'mongo',
    'minimongo',
    'ejson',
    'raix:eventemitter@1.0.1',
    'ecmascript',
    'tmeasday:check-npm-versions@1.0.3'
  ])
  api.imply('mongo')
  // Allow us to detect 'insecure'.
  api.use('insecure@1.0.7', { weak: true })

  api.mainModule('collection3.js')

  api.export('Collection3')
})
