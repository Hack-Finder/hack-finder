// import React from 'react'

// export default function UserProfile(props) {

//   return (
//     <div>
//       <div>
//         <img src={props.user.username} alt="User" />
//         <h2>Hello, {props.user.username}!</h2>
//         <p>{props.user.email}</p>
//         {/* <p>{props.user.description}</p> */}
//       </div>

//       <div>
//         <h2>Your events</h2>
//       </div>
//     </div>
//   )
// }

import React, { Component } from 'react'

export default class UserProfile extends Component {

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

