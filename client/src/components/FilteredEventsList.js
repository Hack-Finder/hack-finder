import React from 'react';
import EventItem from './EventItem';

export default class FilteredEventsList extends React.Component {
  render() {
    if (this.props.events === null) return <h3>Loading...</h3>;
    if (this.props.events.length === 0) return <h3 className="text-xl mt-6">No events found...</h3>;

    return (
      <>
        <div>
          {this.props.events.map((event) => {
            return (
              <div>
                <EventItem event={event} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
