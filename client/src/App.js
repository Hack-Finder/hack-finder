import './App.css';
import React from 'react';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { Route } from 'react-router-dom';

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
        <Route exact path="/login" render={(props) => <Login setUser={this.setUser} {...props} />} />
        <Route exact path="/signup" render={(props) => <Signup setUser={this.setUser} {...props} />} />
      </>
    );
  }
}

export default App;
