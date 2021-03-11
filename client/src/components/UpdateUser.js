import React, { Component } from 'react';
import { sendFormData } from '../services/sendFormData';
import { Link } from 'react-router-dom';
import { deleteUser } from '../services/user';

export default class UpdateUser extends Component {
  state = {
    username: this.props.user.username,
    email: this.props.user.email,
    description: 'Describe yourself ...',
    avatar: '',
    errMessage: '',
    showError: false,
    showAvatar: false,
  };

  componentDidMount = () => {
    this.setState(this.props.user);
  };

  showErrorHandler = (ev) => {
    this.setState({ errMessage: '', showError: false });
  };

  deleteUserHandler = async () => {
    try {
      const response = await deleteUser(this.props.user._id);
      if (response.message) {
        this.setState({ errMessage: response.message, showError: true });
      } else {
        this.props.setUser(response.user);
        this.props.history.push('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  onChangeHandler = (ev) => {
    const type = ev.target.type;

    this.setState({
      [ev.target.name]: type !== 'checkbox' ? ev.target.value : !this.state[[ev.target.name]],
    });
  };

  handleImageBanner = (ev) => {
    this.setState((state, props) => {
      return {
        avatar: ev.target.files[0],
        showAvatar: !state.showAvatar,
      };
    });
  };

  onSubmitHandler = (ev) => {
    if (ev.target.checkValidity()) {
      ev.preventDefault();
      window.scrollTo(0, 0);
      const formData = new FormData();
      formData.append('data', JSON.stringify(this.state));
      if (this.state.avatar) {
        formData.append('avatar', this.state.avatar);
      }

      sendFormData(formData, `/api/users/${this.props.match.params.id}`, 'PUT')
        .then((response) => {
          if (response.message) {
            this.setState({ errMessage: response.message, showError: true });
          } else {
            this.props.setUser(response.user);
            this.props.history.push(`/user/${this.props.user._id}`);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  handleFormInput = (event) => {
    this.setState(event);
    this.handleInputConversion();
  };

  handleInputConversion = () => {
    this.setState((state, prop) => {
      return {
        showAvatar: state.avatar !== '' ? true : false,
      };
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <div class="bg-white">
            <div class="max-w-5xl mx-auto py-12 px-4 flex flex-col items-center">
              <h2 class="profile-username text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Edit Profile
              </h2>
              {!this.state.avatar.imgPath && (
                <span class="mb-6 mt-8 inline-block h-28 w-28 rounded-full overflow-hidden bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </span>
              )}

              {!this.state.showAvatar && this.state.avatar.imgPath && (
                <span class="mb-6 mt-8 inline-block h-28 w-28 rounded-full overflow-hidden bg-gray-100">
                  <img class="h-full w-full rounded-full" src={this.state.avatar.imgPath} alt=""></img>
                </span>
              )}

              <label htmlFor="avatar" className="mb-2 block text-md font-medium text-gray-700">
                Add new Avatar
              </label>

              <input type="file" accept="image/jpeg, image/jpg, image/png" onChange={this.handleImageBanner} />
            </div>
            <div class="max-w-3xl mx-auto flex flex-col bg-white">
              <div class="text-gray-500 pt-0 rounded">
                <label htmlFor="username" className="mb-2 block text-md font-medium text-gray-700">
                  Username
                </label>
                <input
                  class="w-full h-10 px-2 text-md text-gray-500 placeholder-gray-300 border rounded-lg focus:shadow-outline"
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.onChangeHandler}
                  required="required"
                />
                <label htmlFor="title" className="mt-4 mb-2 block text-md font-medium text-gray-700">
                  Email
                </label>
                <input
                  onChange={this.onChangeHandler}
                  className="w-full h-10 px-2 text-md text-gray-500 placeholder-gray-300 border rounded-lg focus:shadow-outline"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  required="required"
                ></input>
                <label htmlFor="description" className="mt-4 mb-2 block text-md font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  onChange={this.onChangeHandler}
                  value={this.state.description}
                  className="w-full h-32 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  name="description"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>

                <div class="mt-3 text-center sm:text-left">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    Deactivate account
                  </h3>
                  <div class="mt-2">
                    <button
                      onClick={this.deleteUserHandler}
                      type="button"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm"
                    >
                      Deactivate
                    </button>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <div className="border-t border-gray-200">
                  <div className="mt-10">
                    <div className="mx-auto">
                      <div className="flex">
                        <div className="w-1/2">
                          <Link to="/profile">
                            <div className="btn-prev w-32 focus:outline-none px-5 py-3 rounded-lg text-base font-medium text-center text-gray-600 bg-white hover:bg-gray-100 border">
                              Cancel
                            </div>
                          </Link>
                        </div>

                        <div className="w-1/2 text-right mb-6">
                          <button className="btn-next w-42 focus:outline-none border border-transparent px-5 py-3 rounded-lg text-center text-white bg-pink-600 hover:bg-pink-700 text-base font-medium">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}
