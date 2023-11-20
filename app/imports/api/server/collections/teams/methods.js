import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { MongooseSchemaValidator, create } from 'meteor/activitree:mongoosed'
import SimpleSchema from 'simpl-schema'
import Teams from './teams'
import { TeamModel } from './model'

// You can use either Simpl-Schema or MongooseSchemaValidator (Mongoose syntax validation) as long as the logic remains the same.
new ValidatedMethod({
  name: 'createTeamWithMeteor',
  validate: new SimpleSchema({
    name: String,
    department: String
  }).validator(),
  async run ({ name, department }) {
    await Teams.insertAsync({
      name,
      department
    })
  }
})

new ValidatedMethod({
  name: 'createTeamWithMongoose',
  validate: new MongooseSchemaValidator({
    name: { type: String, required: true },
    department: { type: String, required: true }
  }).validator(),
  async run ({ name, department }) {
    await create(TeamModel, {
      name,
      department
    })
  }
})
/*
Meteor.callAsync('createTeamWithMeteor', {
  name: 'The Heroes',
  department: 'Technology'
})

Meteor.callAsync('createTeamWithMongoose', {
  name: 'The Falcons',
  department: 'Emergencies'
})
 */
