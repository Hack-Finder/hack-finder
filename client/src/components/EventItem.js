import React from 'react';
import { Link } from 'react-router-dom';

export default function EventItem(props) {

  return (
    // TODO: Link to EventDetail component
    <Link to={`/event/${props.event._id}`} key={props.event._id} className="flex flex-row border-b border-gray-300 p-8">

      {props.event.banner === undefined ?
      <div><h2>Image not available</h2></div>:
      <div className="mr-12">
        <img src={props.event.banner.imgPath} alt={props.event.banner.imgName} style={{ maxWidth: '200px', maxHeight: '120px' }} />
      </div>
      }

      <div>
        <h2 className="font-bold text-2xl mb-4">{props.event.title}</h2>

        <div className="flex flex-row flex-wrap mb-2" >
          <p className="mr-4 mb-1">📌 {props.event.location}</p>
          <p className="mr-4 mb-1">⏰ {props.event.deadline}</p>
          <p className="mr-4 mb-1">🏆 {props.event.priceMoney} {props.event.priceSpace} {props.event.priceMentorship}</p>
        </div>

        <p>{props.event.description.slice(0, 120)}...</p>
      </div>

    </Link>

  )
}
