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

    if (this.state.events === null) return (<h3>Loading...</h3>)

    return (
      <div className="grid grid-cols-4 gap-4 ">
        {this.state.events.map(event => {
          return (
            <div className="col-start-2 col-span-3">
              <EventItem event = {event}/>
            </div>
          )
        })}
      </div>

    )

  }
}

