import React from 'react'
import { getAllEvents } from '../services/event';
import EventItem from './EventItem'

export default class FilteredEventsList extends React.Component {

  state = {
    events: null
  }

  componentDidMount() {
    getAllEvents().then(events => {
      this.setState({ events: events })
    });
  }

  render() {

    console.log(this.state.events)

    if (this.state.events === null) return (<h3>Loading...</h3>)

    return (
      <div>
        {this.state.events.map(event => {
          return (
            <div>
              {/* <h1>{event.title}</h1>
              <h1>{event.description}</h1> */}
              <EventItem event = {event}/>
            </div>
          )
        })}
      </div>

    )

  }
}



{/* this.state.events.map(event => {
  return (
    <div>
      <h3>{event.title}</h3>
    </div>
  )
})
        } */}

