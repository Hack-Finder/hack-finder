import React from 'react';
import FilteredEventsList from './FilteredEventsList';
import { getAllEvents } from '../services/event';

// export default function Home() {

//  return (
//       <div >
//         <svg className="flex-1 flex max-w-5xl mx-auto px-6 sm:px-6 lg:px-8" id="Hero_slider" xmlns="http://www.w3.org/2000/svg" width="1400" height="400" viewBox="0 0 1681.398 415">
//             <rect id="Rechteck_3" data-name="Rechteck 3" width="1162" height="181" transform="translate(374.505)" fill="#e4e4e4"/>
//             <text id="Super_Rocket_Event" data-name="Super Rocket Event" transform="translate(336.505 208)" font-size="77" font-family="Helvetica"><tspan x="0" y="0">SUPER ROCKET EVENT</tspan></text>
//             <text id="Berlin_12._Mar_2021" data-name="Berlin, 12. Mar 2021" transform="translate(454.505 281)" font-size="44" font-family="Helvetica"><tspan x="0" y="0">BERLIN, 12. MAR 2021</tspan></text>
//             <text id="IRONHACK_WDFT" data-name="IRONHACK WDFT" transform="translate(999.505 281)" font-size="44" font-family="Helvetica"><tspan x="0" y="0">IRONHACK WDFT</tspan></text>
//             <g id="Rechteck_19" data-name="Rechteck 19" transform="translate(304.505 78)" fill="none" stroke="#000" stroke-width="7">
//               <rect width="1168" height="247" stroke="none"/>
//               <rect x="3.5" y="3.5" width="1161" height="240" fill="none"/>
//             </g>
//             <g id="Komponente_17_1" data-name="Komponente 17 – 1" transform="translate(1627.398 173)">
//               <path id="Polygon_4" data-name="Polygon 4" d="M35,0,70,54H0Z" transform="translate(54) rotate(90)" fill="#ff30f7"/>
//             </g>
//             <g id="Komponente_16_1" data-name="Komponente 16 – 1" transform="translate(0 173)">
//               <g id="Polygon_3" data-name="Polygon 3" transform="matrix(-0.017, -1, 1, -0.017, 1.222, 70.932)" fill="#fbff4a">
//                 <path d="M 69.08008575439453 53.5 L 0.9199179410934448 53.5 L 35 0.9193019866943359 L 69.08008575439453 53.5 Z" stroke="none"/>
//                 <path d="M 35 1.838588714599609 L 1.839828491210938 53 L 68.16017150878906 53 L 35 1.838588714599609 M 35 0 L 70 54 L 0 54 L 35 0 Z" stroke="none" fill="#eaed63"/>
//               </g>
//             </g>
//             <g id="Komponente_18_3" data-name="Komponente 18 – 3" transform="translate(835.505 389)">
//               <rect id="Rechteck_20" data-name="Rechteck 20" width="26" height="26" fill="#ff00f5"/>
//               <rect id="Rechteck_20-2" data-name="Rechteck 20" width="26" height="26" transform="translate(40)" fill="rgba(255,0,245,0.2)"/>
//               <rect id="Rechteck_20-3" data-name="Rechteck 20" width="26" height="26" transform="translate(80)" fill="rgba(255,0,245,0.2)"/>
//             </g>
//         </svg>

//         <div className="container mx-auto p-6">
//           <h1 className="font-bold text-3xl">Find the best startup events to pitch your startup, win great prices & more.</h1>
//           <FilteredEventsList />
//         </div>
//       </div>
//     )
// }

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
          return event.title.toLowerCase().includes(state.search.toLowerCase());
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
        <div className="z-0 relative bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Find the </span>
                    <span style={{ color: '#ed3897' }} className="block xl:inline">
                      best Start up events<span style={{ color: 'black' }}>. </span>
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Find the best start up competitions in 2021. Pitch your startup, compete with others, win great
                    prices & more.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 wimage-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
              alt=""
            />
          </div>
        </div>

        <div className="z-10 max-w-5xl mx-auto mb-6 -mt-6">
          <div class="relative text-gray-900 focus-within:text-gray-400">
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
              type="text"
              name="search"
              class="h-12 w-full py-4 text-md text-gray-900 placeholder-gray-700 rounded-full pl-10 border border-gray-900 focus:outline-none"
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
              className="border-gray-900 w-full h-10 pl-3 pr-6 text-base placeholder-gray-900 border rounded-lg appearance-none focus:shadow-outline"
              placeholder="Regular input"
            >
              <option value="all">Rewards</option>
              <option value="priceMoney">Price Money</option>
              <option value="priceSpace">Space</option>
              <option value="priceMentorship">Mentorship</option>
            </select>
            <div class="border-gray-900 absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
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
              className="border-gray-900 w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
              placeholder="Regular input"
            >
              <option value="all">Location</option>
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
              className="border-gray-800 w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
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
              <div className="eventsList mt-6">
                <FilteredEventsList events={this.state.events} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
