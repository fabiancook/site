import React from 'react'
import Prefooter from 'src/components/Prefooter'
import { company } from 'src/constants/urls'

const sentences = [
  'Contact us to get started',
]

const actions = [
  {
    name: 'host your own meetup',
    navProps: {
      to: company.contact,
      crossDomain: true,
      completed: false,
    },
  },
]

const MeetupsPrefooter = () => (
  <Prefooter
    heading='Host meetup in your city.'
    sentences={sentences}
    actions={actions}
  />
)

export default MeetupsPrefooter