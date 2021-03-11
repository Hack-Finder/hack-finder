import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormater } from '../services/helpers';

export default function EventItem(props) {
  const rewards = [];

  if (props.event.priceMoney === 'true') rewards.push('Money');
  if (props.event.priceSpace === 'true') rewards.push('Space');
  if (props.event.priceMentorship === 'true') rewards.push('Mentorship');

  return (
    // TODO: Link to EventDetail component
    <Link
      to={`/event/${props.event._id}`}
      key={props.event._id}
      className="flex flex-row border rounded-lg border-gray-200 p-4"
    >
      {props.event.banner === undefined ? (
        <div>
          <h2>Image not available</h2>
        </div>
      ) : (
        <div
          className="mr-12 h-48 flex-none bg-cover rounded-lg text-center overflow-hidden bg-center lg:h-auto lg:w-60"
          alt={props.event.banner.imgName}
          style={{
            backgroundImage: `url(${props.event.banner.imgPath})`,
          }}
        ></div>
      )}

      <div>
        <h2 className="font-bold text-2xl mb-4">{props.event.title}</h2>

        <div className="flex flex-col flex-wrap mb-2">
          <p className="mr-4 mb-1">
            {props.event.mode === 'Offline' ? ' 📌' : ' 🔗'} <span className="font-bold">Where:</span>{' '}
            {props.event.location}
          </p>

          <p className="mr-4 mb-1">
            <span className="font-bold">⏰ When:</span> {dateFormater(props.event.deadline)}
          </p>

          {rewards.length !== 0 && (
            <p className="mr-4 mb-1">
              <span className="font-bold">🏆 Rewards: </span>
              {rewards.join(', ')}
            </p>
          )}
        </div>

        <p>{props.event.description.slice(0, 120)}...</p>
      </div>
    </Link>
  );
}
