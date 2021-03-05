import React from 'react'

export default function EventItem(props) {

  console.log(props.event)

  return (
    <div className="flex flex-row border-b border-gray-300 p-8">

      <div className="mr-12">
        <p>{props.event.date}</p>
      </div>

      <div>
        <h2 className="font-bold text-2xl mb-4">{props.event.title}</h2>
        <p>{props.event.description}</p>
      </div>

    </div>

  )
}
