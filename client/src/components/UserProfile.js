import React, { Component } from 'react';
import { getEventsByCreator } from '../services/event';
import { Link } from 'react-router-dom';
import EventItem from './EventItem';

export default class UserProfile extends Component {

  state = {
    events: null
  }

  componentDidMount() {
    const creatorId = this.props.user._id;

    getEventsByCreator(creatorId).then(events => {
      this.setState({ events: events })
    });
  }

  render() {

    console.log(this.state.events)

    return (
      <div>
        <div>
          <img src={this.props.user.username} alt="User" />
          <h2>Hello, {this.props.user.username}!</h2>
          <p>{this.props.user.email}</p>
          <p>{this.props.user.description}</p>
        </div>

        <div>
          <h2>Your events</h2>

          {(this.state.events === null) ? <h2>Loading...</h2> :

            <div>
              {this.state.events.map(event => {
                return (
                  <div>
                    <EventItem event={event} />
                    <Link to={`/event/edit/${event._id}`}>
                      Edit
                    </Link>
                    <Link to="">
                      Delete
                    </Link>
                  </div>
                )
              })}
            </div>
          }

        </div>
      </div>
    )
  }
}

