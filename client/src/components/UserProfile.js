import React from 'react'

export default function UserProfile(props) {
  
  return (
    <div>
      <h2>Hello, {props.user.username}!</h2>
    </div>
  )
}

