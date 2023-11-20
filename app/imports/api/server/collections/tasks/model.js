import { m } from 'meteor/activitree:mongoosed'
import { TaskMongooseSchema } from './schema'

export const TaskModel = m.model('Task', TaskMongooseSchema)
