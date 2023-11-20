import { remoteDB } from '../../mongoosed/connections'
import { EngineerMongooseSchema } from './schema'

export const EngineerModel = remoteDB.model('Engineer', EngineerMongooseSchema)
