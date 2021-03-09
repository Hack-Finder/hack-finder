import React from 'react'

export default function UserProfile(props) {

  return (
    <div>
      <div>
        <img src={props.user.username} alt="User" />
        <h2>Hello, {props.user.username}!</h2>
        <p>{props.user.email}</p>
        {/* <p>{props.user.description}</p> */}
      </div>

      <div>
        <h2>Your events</h2>
      </div>
    </div>
  )
}

