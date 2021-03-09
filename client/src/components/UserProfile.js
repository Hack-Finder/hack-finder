import React, { Component } from 'react'

export default class UserProfile extends Component {

  state = {
    events: null
  }

  componentDidMount() {
    
  }

  render() {
  
    return (
      <div>
        <div>
          <img src={this.props.user.username} alt="User" />
          <h2>Hello, {this.props.user.username}!</h2>
          <p>{this.props.user.email}</p>
          {/* <p>{this.props.user.description}</p> */}
        </div>

        <div>
          <h2>Your events</h2>
        </div>
      </div>
    )
  }
}

