import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { Meteor } from 'meteor/meteor'
import { MongooseSchemaValidator, create } from 'meteor/activitree:mongoosed'
import { TaskModel } from './model'
import { TeamModel } from '../teams/model'
import { EngineerModel } from '../engineers/model'
import { ScheduleModel } from '../schedules/model'
import { myTasks } from './tasksToInsert'
import SimpleSchema from '@activitree/simpl-schema'
import Tasks from './tasks'

new ValidatedMethod({
  name: 'createTask',
  validate: new SimpleSchema({
    task: String,
    type: String,
    teamId: { type: String, optional: true },
    completed: { type: Date, optional: true },
    scheduleId: { type: String, optional: true },
    priority: { type: SimpleSchema.Integer, optional: true } // out of 1 - low, 5 - high
  }).validator(),
  async run ({ task, type, teamId, completed, scheduleId, priority }) {
    await Tasks.insertAsync({
      task,
      type,
      teamId,
      completed,
      scheduleId,
      priority,
      createdAt: new Date()
    })
  }
})

const tasks = await TaskModel.find().exec()

if (!tasks.length) {
  myTasks.forEach(async doc => await Meteor.callAsync('createTask', doc))
}


new ValidatedMethod({
  name: 'listTasksMeteor',
  validate: new SimpleSchema({}).validator(),
  async run ({}) {
    return await Tasks.find({}, { fields: { _id: 0 } }).fetchAsync()
  }
})

new ValidatedMethod({
  name: 'listTasksMongoose',
  validate: new MongooseSchemaValidator({}).validator(),
  async run ({}) {
    return await TaskModel.find({}, { _id: 0 }).lean()
  }
})

new ValidatedMethod({
  name: 'listTasksMongooseWithPopulate',
  validate: new MongooseSchemaValidator({}).validator(),
  async run () {

    const populated = await TaskModel
      .find()
      .populate({ path: 'scheduleId', model: ScheduleModel })
      .populate({ path: 'teamId', model: TeamModel, populate: { path: 'engineers', model: EngineerModel } })
      .lean()

    return populated
  }
})

Meteor.callAsync('listTasksMongooseWithPopulate', {})
