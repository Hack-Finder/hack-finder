import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';

export default class NavBar extends React.Component {
  state = {
    user: null,
    showModal: false,
  };

  componentDidMount() {
    if (this.props.user) {
      this.setState({
        user: this.props.user,
      });
    }
  }

  showModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  handleLogout = () => {
    logout()
      .then((response) => {
        // TODO: Dont reload - use history.push to redirect
        window.location.reload();
        // this.props.history.push('/login');
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}

              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                {/* Icon when menu is closed. */}
                {/* Heroicon name: outline/menu */}
                {/* Menu open: "hidden", Menu closed: "block" */}

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <svg
                  className="block h-36 w-36 m-10 pt-14"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="320.397"
                  height="205.568"
                  viewBox="0 0 320.397 205.568"
                >
                  <defs>
                    <filter id="Rechteck_17" x="0" y="0" width="315.331" height="142.159" filterUnits="userSpaceOnUse">
                      <feOffset dy="16" input="SourceAlpha" />
                      <feGaussianBlur stdDeviation="12" result="blur" />
                      <feFlood flood-opacity="0.161" />
                      <feComposite operator="in" in2="blur" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                    <filter
                      id="Rechteck_18"
                      x="2.449"
                      y="66.463"
                      width="317.948"
                      height="139.104"
                      filterUnits="userSpaceOnUse"
                    >
                      <feOffset dy="16" input="SourceAlpha" />
                      <feGaussianBlur stdDeviation="12" result="blur-2" />
                      <feFlood flood-opacity="0.235" />
                      <feComposite operator="in" in2="blur-2" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                  </defs>
                  <g
                    id="Komponente_6"
                    data-name="Komponente 6"
                    transform="matrix(0.946, 0, 0.057, 0.985, 38.847, 22.147)"
                  >
                    <g transform="matrix(1.06, 0, -0.06, 1.02, -39.74, -22.49)" filter="url(#Rechteck_17)">
                      <rect
                        id="Rechteck_17-2"
                        data-name="Rechteck 17"
                        width="259"
                        height="68"
                        transform="matrix(0.95, 0, 0.06, 0.98, 39.16, 22.52)"
                      />
                    </g>
                    <text
                      id="STARTUP"
                      transform="translate(18.712 43.401)"
                      fill="#fdfdfd"
                      font-size="35"
                      font-family="Helvetica"
                      letter-spacing="-0.003em"
                    >
                      <tspan x="0" y="0">
                        STARTUP
                      </tspan>
                    </text>
                    <g transform="matrix(1.06, 0, -0.06, 1.02, -39.74, -22.49)" filter="url(#Rechteck_18)">
                      <rect
                        id="Rechteck_18-2"
                        data-name="Rechteck 18"
                        width="259"
                        height="64.405"
                        transform="matrix(0.95, 0, 0.06, 0.98, 42.86, 87.12)"
                        fill="#ff00f5"
                      />
                    </g>
                    <text
                      id="CALENDAR"
                      transform="translate(61.438 105.858)"
                      fill="#111827"
                      font-size="32"
                      font-family="Helvetica"
                      letter-spacing="-0.003em"
                    >
                      <tspan x="0" y="0">
                        CALENDAR
                      </tspan>
                    </text>
                  </g>
                </svg>
              </div>

              {/* Log in/Sign up link group, shown when there is no logged in user */}
              {this.state.user === null && (
                <div className="space-x-8 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="flex space-x-8">
                    <Link
                      to="/signup"
                      className="text-white hover:bg-yellow-300 hover:text-black px-3 py-2 rounded-md text-sm font-bold"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="text-white hover:bg-yellow-300 hover:text-black px-3 py-2 rounded-md text-sm font-bold"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* User profile section, state: logged in */}
            {this.state.user != null && (
              <div className="space-x-8 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Create event  */}
                <Link
                  to="/start"
                  className="text-grey-700 bg-yellow-300 hover:bg-pink-400 hover:text-grey-400 m-5 px-4 py-2 text-sm font-medium "
                >
                  Create event
                </Link>

                {/* <!-- Profile dropdown --> */}
                <div className="ml-3 relative">
                  {/* Dopdown menu button (user profile picture) */}
                  <div>
                    <button
                      onClick={this.showModal}
                      type="button"
                      className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>

                  {/* Dropdown menu, show/hide based on menu state. */}
                  {/* Entering: "transition ease-out duration-100" */}
                  {/* From: "transform opacity-0 scale-95" */}
                  {/* To: "transform opacity-100 scale-100" */}
                  {/* Leaving: "transition ease-in duration-75" */}
                  {/* From: "transform opacity-100 scale-100" */}
                  {/* To: "transform opacity-0 scale-95" */}

                  {/* Actual profile dropdown menu */}
                  {this.state.showModal && (
                    <div
                      className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <Link to={`/user/${this.state.user._id}`}>
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                          Your Profile
                        </div>
                      </Link>
                      <Link to={`/user/edit/${this.state.user._id}`}>
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                          Settings
                        </div>
                      </Link>
                      {/* <Link to="/event/edit/6045fad83b258eaccee03e7a">
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                          Event
                        </div>
                      </Link> */}
                      <Link to="/start" onClick={() => this.handleLogout(this.props)}>
                        <div
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-red-600"
                          role="menuitem"
                        >
                          Sign out
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/signup"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Log in
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
