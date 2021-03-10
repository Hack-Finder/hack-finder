import React from 'react';
import FilteredEventsList from './FilteredEventsList';
import { getAllEvents } from '../services/event';

export default class Home extends React.Component {
  state = {
    search: '',
    reward: '',
    mode: '',
    industry: '',
    events: null,
    eventsCopy: null,
  };

  setEvents = (events) => {
    this.setState({ events: events });
  };

  onChangeHandler = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
    this.filterList();
  };

  filterList = () => {
    this.setState((state, props) => {
      let filtered = state.eventsCopy;

      // Search Filter
      if (state.search !== '') {
        filtered = state.eventsCopy.filter((event) => {
          return event.title.includes(state.search);
        });
      }

      // reward Filter
      if (state.reward !== '' && state.reward !== 'all') {
        filtered = filtered.filter((event) => {
          return event[state.reward] === 'true';
        });
      }

      // mode Filter
      if (state.mode !== '' && state.mode !== 'all') {
        filtered = filtered.filter((event) => {
          return event.mode === state.mode;
        });
      }

      // industry Filter
      if (state.industry !== '' && state.industry !== 'all') {
        filtered = filtered.filter((event) => {
          return event.industry === state.industry;
        });
      }

      return {
        events: filtered,
      };
    });
  };

  componentDidMount = async () => {
    const events = await getAllEvents();
    this.setState({ events, eventsCopy: events });
  };

  render() {
    return (
      <>
        <div className="max-w-5xl mx-auto mb-6 mt-6">
          <div class="relative text-gray-600 focus-within:text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="search"
              class="h-12 w-full py-4 text-sm rounded-full pl-10 border focus:outline-none"
              placeholder="Search for events"
              autocomplete="off"
              onChange={this.onChangeHandler}
              value={this.state.search}
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex gap-6 mb-6 mt-6">
          <div class="relative inline-block w-full text-gray-700">
            <select
              onChange={this.onChangeHandler}
              value={this.state.reward}
              name="reward"
              className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
              placeholder="Regular input"
            >
              <option value="all">Rewards</option>
              <option value="priceMoney">Price Money</option>
              <option value="priceSpace">Space</option>
              <option value="priceMentorship">Mentorship</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div class="relative inline-block w-full text-gray-700">
            <select
              onChange={this.onChangeHandler}
              value={this.state.mode}
              name="mode"
              className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
              placeholder="Regular input"
            >
              <option value="all">Modus</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div class="relative inline-block w-full text-gray-700">
            <select
              onChange={this.onChangeHandler}
              value={this.state.industry}
              name="industry"
              className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
              placeholder="Regular input"
            >
              <option value="all">Industry</option>
              <option value="Tech">Tech</option>
              <option value="Food">Food</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mb-6 mt-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-12">
              <h3 className="text-2xl font-bold">Upcoming events</h3>
              <div className="eventsList">
                <FilteredEventsList events={this.state.events} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
