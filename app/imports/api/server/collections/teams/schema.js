import { m } from 'meteor/activitree:mongoosed'
import SimpleSchema from '@activitree/simpl-schema'

const TeamMeteorSchema = new SimpleSchema({
  name: String,
  department: String,
  engineers: Array,
  'engineers.$': String
})


const TeamMongooseSchema = new m.Schema({
  _id: { type: String, required: true }, // this is always required on inserts because we generate a Meteor-like document id.
  name: { type: String, required: true },
  department: { type: String, required: true },
  engineers: [{ type: String, ref: 'Engineer' }]
})

export { TeamMeteorSchema, TeamMongooseSchema }
