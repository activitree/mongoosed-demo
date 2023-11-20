import { m } from 'meteor/activitree:mongoosed'
import SimpleSchema from '@activitree/simpl-schema'


const TaskMongooseSchema = new m.Schema({
  _id: { type: String, required: true }, // this is always required on inserts because we generate a Meteor-like document id.
  task: { type: String, required: true },
  type: { type: String, required: true },
  teamId: { type: String, ref: 'team' },
  completed: Date,
  scheduleId: { type: String, ref: 'Schedule' },
  createdAt: { type: Date, required: true },
  priority: Number // out of 1 - low, 5 - high
})

const TaskMeteorSchema = new SimpleSchema({
  task: String,
  type: String,
  teamId: { type: String, optional: true },
  completed: { type: Date, optional: true },
  scheduleId: { type: String, optional: true },
  createdAt: Date,
  priority: { type: SimpleSchema.Integer, optional: true } // out of 1 - low, 5 - high
})





export { TaskMongooseSchema, TaskMeteorSchema }
