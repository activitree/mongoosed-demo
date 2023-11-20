import { m } from 'meteor/activitree:mongoosed'

// Read more about multi tenant Connections: https://mongoosejs.com/docs/connections.html#multi-tenant-connections
// and here: https://medium.com/brightlab-techblog/multitenant-node-js-application-with-mongoose-mongodb-f8841a285b4f

m.connect(process.env.MONGO_URL) // create default connection

const options = '?retryWrites=true' +
  '&maxIdleTimeMS=5000' +
  '&maxPoolSize=30' +
  '&readConcernLevel=majority' +
  '&readPreference=secondaryPreferred' +
  '&w=majority' +
  '&heartbeatFrequencyMS=15000'

// /?ssl=true&replicaSet=atlas-6wrw03-shard-0
// const remoteDBUri = `mongodb://test:zDHfnz3nFRWsCSoY@ac-s2lsep6-shard-00-00.xkbddmt.mongodb.net:27017,ac-s2lsep6-shard-00-01.xkbddmt.mongodb.net:27017,ac-s2lsep6-shard-00-02.xkbddmt.mongodb.net:27017/meteor${options}`
export const remoteDBUri = `mongodb+srv://test:zDHfnz3nFRWsCSoY@mon.xkbddmt.mongodb.net/meteor${options}`

// https://mongoosejs.com/docs/connections.html#replicaset_connections
export const remoteDB = m.createConnection(remoteDBUri
  /* or with an `options` object
  , {
  maxPoolSize: 10,
  retryWrites: true,
  maxIdleTimeMS: 5000,
  readConcernLevel: 'majority',
  readPreference: 'secondaryPreferred',
  w: 'majority',
  heartbeatFrequencyMS: 15000,
} */)
