import { remoteDBUri } from '../../mongoosed/connections'
import { Meteor } from 'meteor/meteor'
import { Engineer } from './schema'

const _driver = new MongoInternals.RemoteCollectionDriver(remoteDBUri, {})
const Engineers = new Meteor.Collection('engineers', { _driver })

Engineers.attachSchema(Engineer)

Engineers.deny({ insert: () => true, update: () => true, remove: () => true })

export default Engineers
