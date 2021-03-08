import './App.css';
import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import CreateEvent from './components/CreateEvent';
import { Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import UserProfile from './components/UserProfile';

class App extends React.Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <>
        <Navbar user={this.state.user}/>
        <Route exact path="/" render={Home} />
        <Route exact path="/login" render={(props) => <Login setUser={this.setUser} {...props} />} />
        <Route exact path="/signup" render={(props) => <Signup setUser={this.setUser} {...props} />} />
        <Route exact path="/start" render={(props) => <CreateEvent creator={this.state.user._id} {...props} />} />
        {/* <Route exact path="/user/:id" render={<UserProfile user={this.state.user} />} /> */}
        <Route exact path="/user/:id" render={UserProfile} />
      </>
    );
  }
}

export default App;
