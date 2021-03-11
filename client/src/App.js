import './App.css';
import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import CreateEvent from './components/CreateEvent';
import UpdateEvent from './components/UpdateEvent';
import UpdateUser from './components/UpdateUser';
import { Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import UserProfile from './components/UserProfile';
import EventDetails from './components/EventDetails';

class App extends React.Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState((state, props) => {
      return {
        user: user,
      };
    });
  };

  render() {

    return (
      <>
        <Navbar user={this.state.user} />
        <Route exact path="/" render={(props) => <Home setUser={this.setUser} {...props} />} />
        <Route exact path="/login" render={(props) => <Login setUser={this.setUser} {...props} />} />
        <Route exact path="/signup" render={(props) => <Signup setUser={this.setUser} {...props} />} />
        <Route exact path="/start" render={(props) => <CreateEvent creator={this.state.user._id} {...props} />} />
        <Route exact path="/user/:id" render={(props) => <UserProfile user={this.state.user} {...props} />} />
        <Route exact path="/profile" render={(props) => <UserProfile user={this.state.user} {...props} />} />
        <Route exact path="/event/:id" component={EventDetails} />
        <Route
          exact
          path="/event/edit/:id"
          render={(props) => <UpdateEvent creator={this.state.user._id} {...props} />}
        />

        <Route
          exact
          path="/user/edit/:id"
          render={(props) => <UpdateUser user={this.state.user} setUser={this.setUser} {...props} />}
        />
      </>
    );
  }
}

export default App;
