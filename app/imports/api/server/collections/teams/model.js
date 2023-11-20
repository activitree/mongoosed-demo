// import { m } from 'meteor/activitree:mongoosed'
import { TeamMongooseSchema } from './schema'
import { remoteDB } from '../../mongoosed/connections'


export const TeamModel = remoteDB.model('Team', TeamMongooseSchema)
