import { remoteDBUri } from '../../mongoosed/connections'
import { Meteor } from 'meteor/meteor'
import { TeamMeteorSchema } from './schema'

const _driver = new MongoInternals.RemoteCollectionDriver(remoteDBUri, {})
const Teams = new Meteor.Collection('teams', { _driver })

Teams.attachSchema(TeamMeteorSchema)

Teams.deny({ insert: () => true, update: () => true, remove: () => true })

export default Teams
