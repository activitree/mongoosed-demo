Package.describe({
  name: 'activitree:mongoosed',
  summary: 'Put Mongoose inside Meteor Server. No exposure on the client.',
  version: '0.0.1',
  git: 'https://github.com/activitree/mongoosed.git'
})

Npm.depends({
  "bson": "6.2.0",
  "kareem": "2.5.1",
  "mongodb": "6.2.0",
  "mpath": "0.9.0",
  "mquery": "5.0.0",
  "ms": "2.1.3",
  "sift": "16.0.1"
})

Package.onUse(api => {
  api.versionsFrom(['2.12', '3.0-alpha.15'])
  api.use([
    'ecmascript',
    'mongo',
    'mdg:validated-method',
  ], 'server')

  api.mainModule('index.js', ['server'])
})
