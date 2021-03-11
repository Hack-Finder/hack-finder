import React, { Component } from 'react';
import { getEventsByCreator, deleteEvent } from '../services/event';
import { Link } from 'react-router-dom';
import EventItem from './EventItem';

export default class UserProfile extends Component {
  state = {
    events: null,
  };

  componentDidMount() {
    const creatorId = this.props.user._id;

    getEventsByCreator(creatorId).then((events) => {
      this.setState({ events: events });
    });
  }

  deleteEventHandler = (event) => {
    const eventId = event.target.id;
    deleteEvent(eventId).then((response) => {
      this.componentDidMount();
    });
  };

  render() {
    if (this.state.users === null) return <h3>Loading...</h3>;

    return (
      <>
        <div className="max-w-5xl mx-auto flex gap-6 mb-6 mt-6 justify-center">
          <div className="flex flex-col items-center px-4 py-5 sm:px-6 ">
            <span class="mb-6 mt-8 inline-block h-28 w-28 rounded-full overflow-hidden bg-gray-100">
              {this.props.user.avatar && (
                <img className="z-0 h-full w-full rounded-full" src={this.props.user.avatar.imgPath} alt=""></img>
              )}
              {!this.props.user.avatar && (
                <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              )}
            </span>

            <h2 className="text-3xl leading-6 p-3 font-extrabold text-gray-900">
              Welcome, {this.props.user.username}!
            </h2>
            <p className="mt-1 max-w-2xl text-sm p-3 text-gray-500">{this.props.user.email}</p>

            <div class="flex flex-wrap justify-starts items-center mt-6">
              {/* <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-yellow-200 rounded-2xl">
              #{this.props.user.industry}
            </div> */}
            </div>

            {/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About me</dt>    
  
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
              <p>{this.props.user.description}</p>
            </dd>
          </div> */}

            {this.props.user.description && (
              <div>
                <h2 class="text-xl leading-6 p-3 font-extrabold text-gray-900 text-center">About me</h2>
                <p className="text-sm p-3 text-gray-500 text-center">{this.props.user.description}</p>
              </div>
            )}
          </div>
        </div>
        <div className="max-w-5xl mx-auto gap-6 mb-6 mt-6 justify-center p-4">
          <h2 class="text-xl leading-6 font-extrabold text-gray-900 mb-4">My Events</h2>

          {!this.state.events && <h3>Loading</h3>}

          <div className="flex flex-col gap-4">
            {this.state.events &&
              this.state.events.map((event) => {
                return (
                  <>
                    {event.creator === this.props.user._id && (
                      <div className="flex relative">
                        <Link to={`/event/edit/${event._id}`}>
                          <div
                            g
                            className="flex cursor-pointer absolute text-md p-4 rounded-lg delete-btn font-medium"
                            style={{ right: '10px', top: '25px', backgroundColor: '#fcff49' }}
                          >
                            <svg
                              className="h-4 w-4 self-center mr-1"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                            <span>Edit</span>
                          </div>
                        </Link>
                      </div>
                    )}
                    <EventItem event={event} />
                  </>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

// <h2>Your events</h2>

// {this.state.events === null ? (
//   <h2>Loading...</h2>
// ) : (
//   <div>
//     {this.state.events.map((event) => {
//       return (
//         <div>
//           <EventItem event={event} />
//           <Link to={`/event/edit/${event._id}`}>Edit</Link>
//           <button onClick={this.deleteEventHandler} id={event._id}>
//             Delete
//           </button>
//         </div>
//       );
//     })}
//   </div>
// )}
