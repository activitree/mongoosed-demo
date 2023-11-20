import { m } from 'meteor/activitree:mongoosed'

export const Schedule = new m.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  start: Date,
  end: Date,
  createdAt: { type: Date, required: true }
})
