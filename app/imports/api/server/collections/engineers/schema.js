import { m } from 'meteor/activitree:mongoosed'
import SimpleSchema from '@activitree/simpl-schema'

export const Engineer =  new SimpleSchema({
  firstName: String,
  lastName: String,
  position: String,
  teamId: String,
  createdAt: Date
})

export const EngineerMongooseSchema =  new m.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  position: { type: String, required: true },
  teamId: { type: String, required: true, ref: 'Team' },
  createdAt: { type: Date, required: true },
})
