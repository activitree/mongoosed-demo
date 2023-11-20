import React, { useState } from 'react'
import Default from './default'

export function App () {
  const [viewing, setViewing] = useState('default')

  return (
    <div>
      <h1>Welcome to Meteor Mongoosed!</h1>
      {viewing === 'default' && <Default />}
    </div>
  )
}
