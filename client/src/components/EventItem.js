import React from 'react';
import { Link } from 'react-router-dom';

export default function EventItem(props) {

  console.log(props)

  return (
    // TODO: Link to EventDetail component
    <Link to="" key={props.event._id} className="flex flex-row border-b border-gray-300 p-8">

      <div className="mr-12">
        {/* <img src={props.event.img.imgPath} alt={props.event.img.imgName} style={{ maxWidth: '200px', maxHeight: '120px' }} /> */}
      </div>

      <div>
        <h2 className="font-bold text-2xl mb-4">{props.event.title}</h2>

        <div className="flex flex-row flex-wrap mb-2" >
          <p className="mr-4 mb-1">📌 {props.event.location}</p>
          <p className="mr-4 mb-1">⏰ {props.event.deadlineA}</p>
          <p className="mr-4 mb-1">🏆 {props.event.rewardTag[0]}</p>
        </div>

        <p>{props.event.description.slice(0, 120)}...</p>
      </div>

    </Link>

  )
}
