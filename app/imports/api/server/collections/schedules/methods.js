import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { MongooseSchemaValidator, create } from 'meteor/activitree:mongoosed'
import { ScheduleModel } from './model'

new ValidatedMethod({
  name: 'createSchedule',
  validate: new MongooseSchemaValidator({
    name: { type: String, required: true },
    start: Date,
    end: Date,
  }).validator(),
  async run ({ name, start, end }) {
    await create(ScheduleModel, {
      name,
      start,
      end,
      createdAt: new Date(),
    })
  }
})

const flag = false

if (flag) {
  const schedules = [
    {
      name: 'PPM',
      start: new Date('2023/04/01'),
      end:  new Date('2023/04/02')
    },
    {
      name: 'Monthly PPM',
      start: new Date('2023/04/01'),
      end:  new Date('2023/04/02')
    },
    {
      name: 'Emergency Maintenance',
      start: new Date('2023/04/01'),
      end:  new Date('2023/04/02')
    },
    {
      name: 'Respond to call',
      start: new Date('2023/04/01'),
      end:  new Date('2023/04/02')
    },
    {
      name: 'Investigation Repeated Error',
      start: new Date('2023/04/01'),
      end:  new Date('2023/04/02')
    },
    {
      name: 'Courtesy Visit to Client',
      start: new Date('2023/04/01'),
      end:  new Date('2023/04/02')
    }
  ]

  schedules.forEach(async doc => await Meteor.callAsync('createSchedule', doc))
}
