import React, { Component } from 'react';
import { sendFormData } from '../services/sendFormData';

export default class CreateEvent extends Component {
  state = {
    title: '',
    startDate: '',
    description: '',
    location: '',
    mode: 'Offline',
    banner: '',
    priceMoney: false,
    priceSpace: false,
    priceMentorship: false,
    rewardsDescription: '',
    deadline: '',
    deadlineDescription: '',
    deadlineB: '',
    deadlineDescriptionB: '',
    industry: 'Tech',
    facebook: '',
    instagram: '',
    twitter: '',
    homepage: '',
    creator: this.props.creator,
    errMessage: '',
    showError: false,
    showLoader: false,
  };

  showErrorHandler = (ev) => {
    this.setState({ errMessage: '', showError: false });
  };

  onChangeHandler = (ev) => {
    const type = ev.target.type;

    this.setState({
      [ev.target.name]: type !== 'checkbox' ? ev.target.value : !this.state[[ev.target.name]],
    });
  };

  handleImageBanner = (ev) => {
    this.setState({
      banner: ev.target.files[0],
    });
  };

  onSubmitHandler = (ev) => {
    if (ev.target.checkValidity()) {
      ev.preventDefault();
      window.scrollTo(0, 0);
      const formData = new FormData();
      formData.append('data', JSON.stringify(this.state));

      if (this.state.banner) {
        formData.append('banner', this.state.banner);
      }

      sendFormData(formData, '/api/events', 'POST')
        .then((response) => {
          if (response.message) {
            this.setState({ errMessage: response.message, showError: true, showLoader: false });
          } else {
            this.props.history.push('/');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <>
        <div
          className="overlay "
          style={{
            zIndex: '20',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            visibility: this.state.showLoader ? 'visible' : 'hidden',
            transition: 'visibility 0.3s linear, opacity 0.3s linear',
            opacity: '0.6',
          }}
        >
          <div className="w-50">
            <div
              class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"
              style={{ position: 'absolute', top: '50%', left: '50%' }}
            ></div>
          </div>
        </div>
        <div>
          <div class="error-modal flex bg-red-200 p-4" style={{ display: this.state.errMessage ? 'flex' : 'none' }}>
            <div class="mr-4">
              <div class="h-10 w-10 text-white bg-red-600 rounded-full flex justify-center items-center">
                <p className="text-sm">Error</p>
              </div>
            </div>
            <div class="flex justify-between w-full">
              <div class="text-red-600">
                <p class="mb-2 font-bold">Danger alert</p>
                <p class="text-xs">{this.state.errMessage}</p>
              </div>
              <div class="text-sm text-gray-500">
                <p
                  className="text-xl cursor-pointer text-red-600 font-bold w-10 h-10 border-red-600 border rounded-3xl flex justify-center items-center"
                  onClick={this.showErrorHandler}
                >
                  ✕
                </p>
              </div>
            </div>
          </div>
          <form onSubmit={this.onSubmitHandler}>
            <div className="bg-gray-100 pt-12">
              {/* Start Container */}

              <div className="max-w-6xl mx-auto px-4 gap-4">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center mb-12">
                  <span className="block xl:inline">Create Your Event</span>
                </h1>
                <div className="hidden sm:block" aria-hidden="true">
                  <div className="py-5">
                    <div className="border-t border-gray-200"></div>
                  </div>
                </div>
                <div className="mt-10 sm:mt-0">
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                      <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Event Description</h3>
                        <p className="mt-1 text-sm text-gray-600">
                          Use a permanent address where you can receive mail.
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <div className="overflow-hidden sm:rounded-md border border-gray-200">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-12">
                              <label htmlFor="title" className="mb-2 block text-md font-medium text-gray-700">
                                Title
                              </label>
                              <input
                                onChange={this.onChangeHandler}
                                className="w-full h-10 px-2 text-md text-gray-500 placeholder-gray-300 border rounded-lg focus:shadow-outline"
                                name="title"
                                type="text"
                                placeholder="Title"
                                value={this.state.title}
                                required="required"
                              ></input>
                            </div>

                            <div className="col-span-12 sm:col-span-12">
                              <label htmlFor="description" className="mb-2 block text-md font-medium text-gray-700">
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
                                required
                              ></textarea>
                            </div>

                            <div className="col-span-4 sm:col-span-4">
                              <label htmlFor="mode" className="mb-2 block text-md font-medium text-gray-700">
                                Modus
                              </label>

                              <div className="relative inline-block w-full text-gray-700">
                                <select
                                  onChange={this.onChangeHandler}
                                  value={this.state.mode}
                                  name="mode"
                                  className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
                                  placeholder="Regular input"
                                >
                                  <option>Offline</option>
                                  <option>Online</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipule="evenodd"
                                      fillRule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>

                            <div className="col-span-8 sm:col-span-8">
                              <label htmlFor="mode" className="mb-2 block text-md font-medium text-gray-700">
                                Industry
                              </label>

                              <div className="relative inline-block w-full text-gray-700">
                                <select
                                  onChange={this.onChangeHandler}
                                  value={this.state.industry}
                                  name="industry"
                                  className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
                                  placeholder="Regular input"
                                >
                                  <option>Tech</option>
                                  <option>Food</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipule="evenodd"
                                      fillRule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="col-span-12 sm:col-span-12">
                              <label htmlFor="homepage" className="mb-2 block text-md font-medium text-gray-700">
                                Homepage
                              </label>
                              <div className="h-10 mb-4 mt-1 flex rounded-md">
                                <span className="w-24 inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                  Homepage
                                </span>
                                <input
                                  type="url"
                                  onChange={this.onChangeHandler}
                                  value={this.state.homepage}
                                  name="homepage"
                                  id="company_website"
                                  className="placeholder-gray-300 px-2 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                  placeholder="Your homepage"
                                />
                              </div>
                            </div>
                            <div className="col-span-12 sm:col-span-12">
                              <label htmlFor="location" className="mb-2 block text-md font-medium text-gray-700">
                                Location
                              </label>

                              <input
                                onChange={this.onChangeHandler}
                                value={this.state.location}
                                className="w-full h-10 px-2 text-md text-gray-500 placeholder-gray-300 border rounded-lg focus:shadow-outline"
                                name="location"
                                type="text"
                                placeholder="Where they can find you?"
                              ></input>
                            </div>

                            <div className="col-span-12 sm:col-span-12">
                              <label htmlFor="banner" className="mb-2 block text-md font-medium text-gray-700">
                                Image
                              </label>
                              <input
                                type="file"
                                accept="image/jpeg, image/jpg, image/png"
                                onChange={this.handleImageBanner}
                              />
                              {/* <Basic /> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Container */}
              <div className="max-w-6xl mx-auto px-4 gap-4">
                <div className="hidden sm:block" aria-hidden="true">
                  <div className="py-5">
                    <div className="border-t border-gray-200"></div>
                  </div>
                </div>

                <div className="mt-10 sm:mt-0">
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                      <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Reward Description</h3>
                        <p className="mt-1 text-sm text-gray-600">
                          Use a permanent address where you can receive mail.
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <div className="overflow-hidden sm:rounded-md border border-gray-200">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-12 sm:col-span-12">
                              <label htmlFor="rewards" className="mb-2 block text-md font-medium text-gray-700 mb-2">
                                Rewards
                              </label>
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    onChange={this.onChangeHandler}
                                    checked={this.state.priceMoney}
                                    name="priceMoney"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm mb-4">
                                  <label htmlFor="priceMoney" className="font-medium text-gray-700">
                                    Price Money
                                  </label>
                                  <p className="text-gray-500">
                                    Placeholder...Get notified when someones posts a comment on a posting.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    onChange={this.onChangeHandler}
                                    checked={this.state.priceSpace}
                                    name="priceSpace"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm mb-4">
                                  <label htmlFor="priceMentorship" className="font-medium text-gray-700">
                                    Space
                                  </label>
                                  <p className="text-gray-500">
                                    Placeholder...Get notified when someones posts a comment on a posting.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    onChange={this.onChangeHandler}
                                    checked={this.state.priceMentorship}
                                    name="priceMentorship"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="comments" className="font-medium text-gray-700">
                                    Mentorship
                                  </label>
                                  <p className="text-gray-500">
                                    Placeholder...Get notified when someones posts a comment on a posting.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-span-12 sm:col-span-12">
                              <label
                                htmlFor="rewardsDescription"
                                className="mb-2 block text-md font-medium text-gray-700"
                              >
                                Rewards Description
                              </label>

                              <textarea
                                onChange={this.onChangeHandler}
                                value={this.state.rewardsDescription}
                                className="w-full h-32 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                                name="rewardsDescription"
                                id=""
                                cols="30"
                                rows="10"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                      <div className="border-t border-gray-200"></div>
                    </div>
                  </div>
                  <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                          <h3 className="text-lg font-medium leading-6 text-gray-900">Deadlines</h3>
                          <p className="mt-1 text-sm text-gray-600">
                            Use a permanent address where you can receive mail.
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="overflow-hidden sm:rounded-md border border-gray-200">
                          <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-12 gap-6">
                              <div className="col-span-12 lg:col-span-4">
                                <label htmlFor="deadline" className="mb-2 block text-md font-medium text-gray-700">
                                  Deadline
                                </label>

                                <input
                                  onChange={this.onChangeHandler}
                                  value={this.state.deadline}
                                  name="deadline"
                                  required
                                  type="date"
                                  className="w-full h-10 px-4 leading-none rounded-lg border border-gray-200 focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                />
                              </div>

                              <div className="col-span-12 lg:col-span-8">
                                <label
                                  htmlFor="deadlineDescription"
                                  className="mb-2 block text-md font-medium text-gray-700"
                                >
                                  Deadline Description
                                </label>

                                <input
                                  onChange={this.onChangeHandler}
                                  className="w-full h-10 px-2 text-md text-gray-500 placeholder-gray-300 border rounded-lg focus:shadow-outline"
                                  name="deadlineDescription"
                                  type="text"
                                  placeholder="Deadline Description"
                                  value={this.state.deadlineDescription}
                                  required="required"
                                ></input>
                              </div>
                              <div className="col-span-12 lg:col-span-4">
                                <label htmlFor="deadline" className="mb-2 block text-md font-medium text-gray-700">
                                  Additional Deadline
                                </label>

                                <input
                                  onChange={this.onChangeHandler}
                                  value={this.state.deadlineB}
                                  name="deadlineB"
                                  type="date"
                                  className="w-full h-10 px-4 leading-none rounded-lg border border-gray-200 focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                />
                              </div>

                              <div className="col-span-12 lg:col-span-8">
                                <label
                                  htmlFor="deadlineDescriptionB"
                                  className="mb-2 block text-md font-medium text-gray-700"
                                >
                                  Deadline Description
                                </label>

                                <input
                                  onChange={this.onChangeHandler}
                                  className="w-full h-10 px-2 text-md text-gray-500 placeholder-gray-300 border rounded-lg focus:shadow-outline"
                                  name="deadlineDescriptionB"
                                  type="text"
                                  placeholder="Deadline Description"
                                  value={this.state.deadlineDescriptionB}
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-6xl mx-auto px-4 gap-4">
                <div className="hidden sm:block" aria-hidden="true">
                  <div className="py-5">
                    <div className="border-t border-gray-200"></div>
                  </div>
                </div>
                <div className="mt-10 sm:mt-0">
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                      <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Social Media & Additionals</h3>
                        <p className="mt-1 text-sm text-gray-600">
                          Use a permanent address where you can receive mail.
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <div className="overflow-hidden sm:rounded-md border border-gray-200">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-12 sm:col-span-12">
                              <div>
                                <label htmlFor="facebook" className="mb-2 block text-md font-medium text-gray-700">
                                  Facebook
                                </label>
                                <div className="h-10 mb-4 mt-1 flex rounded-md">
                                  <span className="w-24 inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    Facebook
                                  </span>
                                  <input
                                    onChange={this.onChangeHandler}
                                    value={this.state.facebook}
                                    name="facebook"
                                    type="text"
                                    id="company_website"
                                    className="px-2 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    placeholder="www.facebook.com"
                                  />
                                </div>
                              </div>
                              <div>
                                <label htmlFor="instagram" className="mb-2 block text-md font-medium text-gray-700">
                                  Instagram
                                </label>
                                <div className="h-10 mb-4 mt-1 flex rounded-md">
                                  <span className="w-24 inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    Instagram
                                  </span>
                                  <input
                                    onChange={this.onChangeHandler}
                                    type="text"
                                    value={this.state.instagram}
                                    name="instagram"
                                    id="company_website"
                                    className="px-2 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    placeholder="www.instagram.com"
                                  />
                                </div>
                              </div>

                              <div>
                                <label htmlFor="twitter" className="mb-2 block text-md font-medium text-gray-700">
                                  Twitter
                                </label>
                                <div className="h-10 mb-4 mt-1 flex rounded-md">
                                  <span className="w-24 inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    Twitter
                                  </span>

                                  <input
                                    onChange={this.onChangeHandler}
                                    type="text"
                                    value={this.state.twitter}
                                    name="twitter"
                                    id="company_website"
                                    className="px-2 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    placeholder="www.twitter.com"
                                  />
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-6xl mx-auto px-4 gap-4">
                  <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                      <div className="border-t border-gray-200">
                        <div className="mt-10">
                          <div className="mx-auto">
                            <div className="flex">
                              <div className="w-1/2">
                                <a href="/">
                                  <div className="btn-prev w-32 focus:outline-none px-5 py-3 rounded-lg text-base font-medium text-center text-gray-600 bg-white hover:bg-gray-100 border">
                                    Cancel
                                  </div>
                                </a>
                              </div>

                              <div className="w-1/2 text-right mb-6">
                                <button className="btn-next w-36 focus:outline-none border border-transparent px-5 py-3 rounded-lg text-center text-white bg-indigo-600 hover:bg-indigo-700 text-base font-medium">
                                  Create Event
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
