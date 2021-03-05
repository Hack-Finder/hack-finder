import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import App from './App';
import reportWebVitals from './reportWebVitals';

axios.get('/api/auth/loggedin').then((response) => {
  ReactDOM.render(
    <Router>
      <App user={response.data} />
    </Router>,
    document.getElementById('root')
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
