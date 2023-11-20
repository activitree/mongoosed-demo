import { remoteDB } from '../../mongoosed/connections'
import { Schedule } from './schema'

export const ScheduleModel = remoteDB.model('Schedule', Schedule)
