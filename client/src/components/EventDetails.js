import React from 'react';
import { getEventDetails } from '../services/event';

export default function EventDetails(props) {

  const eventId = props.match.params.id;
  // let event = {};

  // getEventDetails(eventId).then(eventFromDb => {
  //   console.log(eventFromDb)
  //   return eventFromDb
  // });

  // const event = getEventDetails(eventId).then(eventFromDb => {
  //   console.log(eventFromDb)
  //   // event = eventFromDb
  //   return eventFromDb
  // }).catch(err => {
  //   console.log(err)
  // });

  // console.log('event', event)

  return (
    <div>
      <h2>Event Details</h2>
    </div>
  )
}

// import React from 'react'

// export default class EventDetails extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>event details</h2>
//       </div>
//     )
//   }
// }


