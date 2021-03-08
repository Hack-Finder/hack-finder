<<<<<<< Updated upstream
import React from 'react';
import { getEventDetails } from '../services/event';

export default function EventDetails(props) {

  const eventId = props.match.params.id;

  const event = getEventDetails(eventId).then(eventFromDb => {
    console.log(eventFromDb)
    // event = eventFromDb
    return eventFromDb
  }).catch(err => {
    console.log(err)
  });


  console.log('event', event)

  return (
    <div>
      <h2>Event Details</h2>
    </div>
  )
}
=======
// import React from 'react'

// export default function EventDetails() {
//   return (
//     <div>
//       <h2>Event Details!!!!!</h2>
//     </div>
//   )
// }

import React, { Component } from 'react'
>>>>>>> Stashed changes

export default class EventDetails extends Component {
  
  render() {
    return (
      <div>
        <h2>Event Details!!!!!</h2>
      </div>
    )
  }
}
