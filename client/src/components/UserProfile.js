import React, { Component } from 'react';
import { getEventsByCreator, deleteEvent } from '../services/event';
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

  deleteEventHandler = (event) => {
    const eventId = event.target.id
    console.log(event.target.id)
    deleteEvent(eventId).then(response => {
      console.log(response)
      this.componentDidMount()
    })
  }

  render() {
    if (this.state.users === null) return <h3>Loading...</h3>

    console.log(this.state.events)

    return (
    
      <div className="bg-white shadow-xl m-20 sm:rounded-lg">
     
        <div className="flex flex-col items-center px-4 py-5 sm:px-6 ">
            {/* <img src={this.props.user.avatar} alt="User" /> */}
            <span class="mb-6 mt-8 inline-block h-28 w-28 rounded-full overflow-hidden bg-gray-100">
                    <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
            </span>

            <h2 className="text-3xl leading-6 p-3 font-extrabold text-gray-900">Hello, {this.props.user.username}!</h2>
            <p className="mt-1 max-w-2xl text-sm p-3 text-gray-500">{this.props.user.email}</p>

            <div class="flex flex-wrap justify-starts items-center mt-6">
                <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-yellow-200 rounded-2xl">
                  #tech
                </div>
                <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-yellow-200 rounded-2xl">
                  #food
                </div>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          About me
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                        <p>{this.props.user.description}</p>
                          <br/>
                          <span className="font-bold">www.thesmile.com</span> 
                        </dd>
            </div>
          
        

                        <div className="flex-auto justify-center flex-col px-4 py-5 sm:px-6 ">
                                    <dt className="text-sm font-medium text-gray-500">
                                          {this.props.user.username}'s events
                                    </dt>
                        </div>
          
        </div>
        <div>
          <h2>Your events</h2>

          {(this.state.events === null) ? <h2>Loading...</h2> :

            <div>
              {this.state.events.map(event => {
                return (
                  <div>
                    <EventItem event={event} />
                    <Link to={`/event/edit/${event._id}`}>Edit</Link>
                    <button onClick={this.deleteEventHandler} id={event._id}>Delete</button>
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

