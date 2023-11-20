import { ValidatedMethod } from 'meteor/mdg:validated-method'
import Engineers from './engineers'
import SimpleSchema from '@activitree/simpl-schema'

new ValidatedMethod({
  name: 'createEngineer',
  validate: new SimpleSchema({
    firstName: String,
    lastName: String,
    position: String,
    teamId: String
  }).validator(),
  async run ({ firstName, lastName, position, teamId }) {
    await Engineers.insertAsync({
      firstName,
      lastName,
      position,
      teamId,
      createdAt: new Date()
    })
  }
})

const flag = false

if (flag) {
  const engineers = [
    {
      firstName: 'Jimmy',
      lastName: 'Doe',
      position: 'Assist. Manager',
      teamId: 'AmzsTcMXkMrwLve2E'
    },
    {
      firstName: 'Tonny',
      lastName: 'Rubino',
      position: 'Manager',
      teamId: 'AmzsTcMXkMrwLve2E'
    },
    {
      firstName: 'Maria',
      lastName: 'Mendez',
      position: 'Developer',
      teamId: 'AmzsTcMXkMrwLve2E'
    },
    {
      firstName: 'Pino',
      lastName: 'Tatweeno',
      position: 'Emergency Operator',
      teamId: 'Q2JqAA3wyotvKcfdD'
    },
    {
      firstName: 'Darth',
      lastName: 'Vader',
      position: 'Lightsaber Assembler',
      teamId: 'Q2JqAA3wyotvKcfdD'
    }
  ]

  engineers.forEach(async doc => await Meteor.callAsync('createEngineer', doc))
}
