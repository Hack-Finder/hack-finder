import { React, Component } from 'react';
import { getEventDetails } from '../services/event';
import { getUserDetails } from '../services/user';
import { dateFormater } from '../services/helpers';
import Mapbox from '../components/Mapbox';
export default class EventDetails extends Component {
  state = {
    event: null,
    creator: null,
  };

  componentDidMount() {
    const eventId = this.props.match.params.id;
    let creatorId = '';

    getEventDetails(eventId).then((event) => {
      creatorId = event.creator;
      getUserDetails(creatorId).then((creator) => {
        this.setState({ creator: creator });
      });
      this.setState({ event: event });
    });
  }

  render() {
    if (this.state.event === null || this.state.creator === null) return <h3>Loading...</h3>;

    return (
      <div className="bg-white overflow-hidden m-10 sm:rounded-lg max-w-6xl mx-auto">
        <div className="">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-8">
              <img
                className="bg-cover bg-center h-58 overflow-hidden sm:rounded-lg"
                src={this.state.event.banner.imgPath}
                alt={this.state.event.banner.imgName}
              />

              <div id="event-details-main" className="col-start-2 col-span-5 pt-10">
                <h1 className="font-bold text-5xl mb-2">{this.state.event.title}</h1>
                <div className="flex gap-4">
                  <div className="flex">
                    <p className="font-bold"> ⏰ Deadline: &nbsp; </p>
                    <p> {dateFormater(this.state.event.deadline)}</p>
                  </div>
                  {this.state.event.deadlineB && (
                    <div className="flex">
                      <p className="font-bold"> ⏰ Additional Deadline: &nbsp; </p>
                      <p> {dateFormater(this.state.event.deadlineB)}</p>
                    </div>
                  )}
                  ​
                </div>
                ​​
                <div className="grid grid-cols-12 gap-12">
                  <div className="col-span-8">
                    <h3 className="text-lg font-bold space-y-3">Deadline informations</h3>
                    <p className="text-md space-y-3">{this.state.event.deadlineDescription}</p>
                    {this.state.event.deadlineDescriptionB && (
                      <p className="text-md space-y-3">{this.state.event.deadlineDescriptionB}</p>
                    )}
                  </div>
                  <div className="col-span-4">
                    <div>
                      <h3 className="text-lg font-bold space-y-3">Event Rewards</h3>
                    </div>
                    <span>
                      {this.state.event.priceMoney === 'true' && 'Money' && <p>🏆 Money</p>}
                      {this.state.event.priceSpace === 'true' && 'Money' && <p>🪑 Space</p>}
                      {this.state.event.priceMentorship === 'true' && 'Money' && <p>🧠 Mentoring</p>}
                    </span>
                  </div>
                </div>
                <br />
                <h3 className="text-lg font-bold space-y-3">Reward Informations</h3>
                <p>{this.state.event.rewardsDescription}</p>
                <h3 className="text-lg font-bold mt-8">Event informations</h3>
                <p className="text-md">{this.state.event.description}</p>
              </div>
            </div>

            <div
              className="bg-gray-50 rounded-lg p-6 text-sm font-medium text-gray-900 col-span-4"
              style={{ height: 'fit-content' }}
            >
              <span class="mb-6 inline-block h-28 w-28 rounded-full overflow-hidden border border-gray-300">
                {this.state.creator.avatar && (
                  <img class="h-full w-full rounded-full" src={this.state.creator.avatar.imgPath} alt=""></img>
                )}
                <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </span>
              <p className="font-bold text-3xl">{this.state.creator.username}</p>
              Event host
              <div id="event-details-sidepanel" className="">
                <div class="flex flex-wrap justify-starts items-center mt-6">
                  <div
                    class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-900 rounded-2xl"
                    style={{ backgroundColor: '#ec4999' }}
                  >
                    <p>{this.state.event.industry}</p>
                  </div>
                  <div
                    class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-900 bg-yellow-300 rounded-2xl space-y-6"
                    style={{ backgroundColor: '#ec4999' }}
                  >
                    <p>{this.state.event.mode}</p>
                  </div>
                </div>

                {this.state.event.category.forEach((element) => (
                  <p>{element}</p>
                ))}
                <p className="text-md font-bold mt-4">Event Links:</p>
                <div className="flex flex-col text-gray-600 mt-2">
                  {this.state.event.twitter && <a href={this.state.event.twitter}>🔗 {this.state.event.twitter}</a>}
                  {this.state.event.instagram && (
                    <a href={this.state.event.instagram}>🔗 {this.state.event.instagram}</a>
                  )}
                  {this.state.event.facebook && <a href={this.state.event.facebook}>🔗 {this.state.event.facebook}</a>}
                  {this.state.event.homepage && (
                    <a className="truncate" href={this.state.event.homepage}>
                      🔗 {this.state.event.homepage}
                    </a>
                  )}
                </div>
              </div>
              {this.state.event.location && (
                <>
                  <p className="text-lg mt-4">Location:</p>
                  <p className="text-gray-600">📌 {this.state.event.location}</p>
                </>
              )}
              {this.state.event.coordinates.length === 2 && (
                <>
                  <div className="relative mt-4">
                    <Mapbox coordinates={this.state.event.coordinates} />
                  </div>
                </>
              )}
              <a
                href="/eventbrite"
                style={{ backgroundColor: '#fcff49' }}
                class="w-full font-bold md:min-w-6 mt-6 px-5 py-3 flex items-center justify-center border border-transparent text-base font-medium rounded-md text-grey-900 md:py-4 md:text-lg md:px-10"
              >
                Get your ticket
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
