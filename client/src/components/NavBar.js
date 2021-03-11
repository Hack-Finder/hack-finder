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

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
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
              <Link to="/">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    style={{ width: '9rem', marginTop: '50px', zIndex: '100' }}
                    src="/logo_startup_calendar_2.png"
                    alt=""
                  />
                </div>
              </Link>
              <div className="flex-shrink-0 flex items-center"></div>

              {/* Log in/Sign up link group, shown when there is no logged in user */}
              {this.state.user === null && (
                <div className="space-x-8 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="flex space-x-8">
                    <Link
                      to="/signup"
                      className="bg-signal-y btn-signup hover:bg-pink-600 text-white px-3 py-2 rounded-md text-sm font-bold"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="btn-login hover:bg-pink-600 text-white hover:text-white px-3 py-2 rounded-md text-sm font-bold"
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
                  style={{ backgroundColor: '#fcff49' }}
                  className="hover:bg-pink-400 hover:text-grey-400 m-5 px-4 py-2 text-sm font-medium "
                >
                  Create Event
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

                      {(this.state.user.hasOwnProperty('avatar') === false ||
                        (this.state.user.hasOwnProperty('avatar') === true &&
                          this.state.user.avatar.imgPath === undefined)) && (
                        <svg
                          className="rounded-full h-full w-full text-gray-300 border-2 border-grey-300 "
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="36px"
                          height="36px"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                      )}

                      {this.state.user.hasOwnProperty('avatar') === true &&
                        this.state.user.avatar.imgPath != undefined && (
                          <img
                            className="h-8 w-8 rounded-full"
                            src={this.state.user.avatar.imgPath}
                            alt={this.state.user.avatar.imgName}
                          />
                        )}
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
                      <Link to="/" onClick={() => this.handleLogout(this.props)}>
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
