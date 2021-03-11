import React from 'react';
const { login } = require('../services/auth');

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    message: '',
  };

  onChangeHandler = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };

  onSubmitHandler = (ev) => {
    ev.preventDefault();
    login(this.state.username, this.state.password).then((user) => {
      if (user.message) {
        this.setState({
          message: user.message,
          username: '',
          password: '',
        });
      } else {
        this.props.setUser(user);
        this.props.history.push('/');
      }
    });
  };

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {this.state.user && <h3>IAM LOGGED IN</h3>}
            {/* <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          ></img> */}
            <h2 className="mt-6 text-center text-5xl font-extrabold text-gray-900">Login</h2>
          </div>
          <form className="mt-8 space-y-2" action="#" method="POST">
            <input type="hidden" name="remember" value="true"></input>

            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  value={this.state.username}
                  onChange={this.onChangeHandler}
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="email"
                  required
                  className="h-12 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:border-pink-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                ></input>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  value={this.state.password}
                  onChange={this.onChangeHandler}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="h-12 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                ></input>
              </div>
            </div>
            <div className="flex items-center justify-between">
              {/* <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                ></input>
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div> */}

              {/* <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div> */}
            </div>
            <div>
              <button
                onClick={this.onSubmitHandler}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-pink-500 group-hover:text-pink-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Login
              </button>
            </div>

            {this.state.message && <h3>{this.state.message}</h3>}
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
