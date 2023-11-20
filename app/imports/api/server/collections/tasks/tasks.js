import { Meteor } from 'meteor/meteor'
import { TaskMeteorSchema } from './schema'

const Tasks = new Meteor.Collection('tasks')

Tasks.attachSchema(TaskMeteorSchema)

Tasks.deny({ insert: () => true, update: () => true, remove: () => true })

export default Tasks
