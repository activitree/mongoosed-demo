import React, { useEffect, useState } from 'react'

export default function Default () {
  const [showMeteor, setShowMeteor] = useState(true)
  const [data, setData] = useState(null)
  const [showPopulate, setShowPopulate] = useState(false)

  useEffect(() => {
    if (showMeteor) {
      Meteor.callAsync('listTasksMeteor', {})
      .then(async r => {
        setData(await r.stubValuePromise)
      })
      .catch(err => console.log(err))
    } else if (showPopulate) {
      setData(null)
      Meteor.callAsync('listTasksMongooseWithPopulate', {})
      .then(async r => {
        setData(await r.stubValuePromise)
      })
      .catch(err => console.log(err))
    } else {
      console.log('Showing via Mongoose')
      Meteor.callAsync('listTasksMongoose', {})
      .then(async r => {
        setData(await r.stubValuePromise)
      })
      .catch(err => console.log(err))
    }
  }, [showMeteor, showPopulate])

  const onShowFromSource = () => {
    setShowMeteor(!showMeteor)
    setShowPopulate(false)
  }

  const onShowPopulate = () => {
    setShowMeteor(false)
    setShowPopulate(true)
  }

  console.log(data)

  return (
    <>
      <button onClick={() => onShowFromSource()}>{!showMeteor ? 'Show Data With Meteor Mongo' : 'Show Data With Mongoose'}</button>
      <button style={{ marginLeft: 24 }} onClick={() => onShowPopulate()}>Show Relational Data With Mongoose</button>
      <div>
          <h4>{showMeteor ? 'Showing data via Meteor Default System' : 'Showing data via Mongoose'}</h4>
          <p>Observe the browser console.</p>
          <p>When showing relational data, tasks have schedules with details and teams with details contain engineers with details.</p>
      </div>
    </>
  )
}
