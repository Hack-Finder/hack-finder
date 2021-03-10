import { React, Component } from 'react';
import { getEventDetails } from '../services/event';
import { getUserDetails } from '../services/user';
import { dateFormater } from '../services/helpers';


export default class EventDetails extends Component {

  state = {
    event: null,
    creator: null
  }

  componentDidMount() {
    const eventId = this.props.match.params.id
    let creatorId = '';

    getEventDetails(eventId).then(event => {
      creatorId = event.creator
      getUserDetails(creatorId).then(creator => {
        this.setState({ creator: creator })
      })
      this.setState({ event: event })
    })
  }

  render() {

    if (this.state.event === null || this.state.creator === null) return (<h3>Loading...</h3>)

    return (
      

       <div className="bg-white shadow-lg overflow-hidden m-10 sm:rounded-lg">

        {this.state.event.banner === undefined ?
          <h2>Image not available</h2> :
          <div className="flex flex-col items-center px-4 py-5 sm:px-6 ">
          <img className="bg-cover bg-center h-58 overflow-hidden sm:rounded-lg" src={this.state.event.banner.imgPath} alt={this.state.event.banner.imgName} />
          </div>
        }

          <div className="flex flex-col items-center">
              <a href="#" class="w-1/3 md:min-w-6  px-5 py-3 flex items-center justify-center border border-transparent text-base font-medium rounded-md text-grey-900 bg-pink-500 hover:bg-#ED3897 md:py-4 md:text-lg md:px-10">
              Get your ticket
              </a>
          </div>

          <div id="event-details-container">

          <div className=" m-20 px-10 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-md">
                        

                        <dt className="text-sm font-medium text-gray-900">
                          <span class="mb-6 mt-8 inline-block h-28 w-28 rounded-full overflow-hidden bg-gray-100">
                            <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                          </span>
                          <p>{this.state.creator.avatar}</p>
                          <p className="font-bold text-3xl space-y-6">{this.state.creator.username}</p>
                          Event host
                          <div id="event-details-sidepanel" className="space-y-6">
                           <div class="flex flex-wrap justify-starts items-center mt-6">
                                  <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-900 bg-yellow-300 rounded-2xl">
                                    <p>{this.state.event.industry}</p>
                                  </div>
                                  <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-900 bg-yellow-300 rounded-2xl space-y-6">
                                    <p>{this.state.event.mode}</p>
                                  </div> 

                           </div> 
                            
                            
                            {this.state.event.category.forEach(element => <p>{element}</p>)}
                            <h3 className="font-bold overlap-hidden">Links:</h3>
                            <a href={this.state.event.twitter}>{this.state.event.twitter}</a>
                            <a href={this.state.event.instagram}>{this.state.event.instagram}</a>
                            <a href={this.state.event.facebook}>{this.state.event.facebook}</a>
                            <a className="truncate" href={this.state.event.homepage}>{this.state.event.homepage}</a>
                            <p>📌 {this.state.event.location}</p>
                          </div>
                        </dt>

                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <div id="event-details-main" className="col-start-2 col-span-5 pt-10">
                              <h1 className="font-bold text-5xl space-y-6">{this.state.event.title}</h1>
                              <br />
                              <p>⏰</p><p>{dateFormater(this.state.event.deadline)}</p>
                              <br />
                              <p className="font-bold text-3xl space-y-3">{this.state.event.deadlineDescription}</p>
                              <p className="font-bold text-3xl space-y-6">{dateFormater(this.state.event.deadlineB)}</p>
                              <p className="font-bold space-y-6">{this.state.event.deadlineDescriptionB}</p>
                              <br />
                              <p className="font-bold text-2xl space-y-6">{this.state.event.description}</p>
                              <br />

                              <span>
                                <p>🏆</p>{(this.state.event.priceMoney === 'true') && 'Money '}
                                :chair: {(this.state.event.priceSpace === 'true') && 'Space '}
                                {(this.state.event.priceMentorship === 'true') && 'Mentorship'}
                              </span>
                              <br />

                              <p>{this.state.event.rewardsDescription}</p>
                          </div>

                      

                        </dd>
            </div>

          
        </div>
      </div>
    )
  }
}
