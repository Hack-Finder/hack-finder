import { React, Component } from 'react';
import { getEventDetails } from '../services/event';
import { getUserDetails } from '../services/user';


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

      <div className="container mx-auto p-6">

        {this.state.event.banner === undefined ?
          <div><h2>Image not available</h2></div> :
          <img src={this.state.event.banner.imgPath} alt={this.state.event.banner.imgName} />
        }

        <div id="event-details-container" className="flex">

          <div id="event-details-sidepanel" className="mr-12">
            <p>{this.state.creator.username}</p>
            <p>{this.state.event.industry}</p>
            <p>{this.state.event.mode}</p>
            {this.state.event.category.forEach(element => <p>{element}</p>)}
            <h3>Links:</h3>
            <a href={this.state.event.twitter}>{this.state.event.twitter}</a>
            <a href={this.state.event.instagram}>{this.state.event.instagram}</a>
            <a href={this.state.event.facebook}>{this.state.event.facebook}</a>
            <a href={this.state.event.homepage}>{this.state.event.homepage}</a>
          </div>

          <div id="event-details-main">
            <h1>{this.state.event.title}</h1>
            <p>{this.state.event.deadline}</p>
            <p>{this.state.event.deadlineDescription}</p>
            <p>{this.state.event.deadlineB}</p>
            <p>{this.state.event.deadlineDescriptionB}</p>
            <p>{this.state.event.location}</p>
            <p>{this.state.event.description}</p>
            <p>{this.state.event.rewardsDescription}</p>
            <p>{this.state.event.priceMoney}</p>
            <p>{this.state.event.priceSpace}</p>
            <p>{this.state.event.priceMentorship}</p>
          </div>

        </div>

      </div>
    )
  }
}
