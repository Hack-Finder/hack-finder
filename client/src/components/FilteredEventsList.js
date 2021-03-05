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

    return (
      <div>
        {this.state.events === null && <h2>Loading Events Calendar</h2>}
        <h1>Filtered Events List Here!</h1>
        <EventItem />
      </div>
    )
  }
}