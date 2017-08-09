import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/App.css';
import './styles/font-awesome-4.7.0/css/font-awesome.min.css';

import { NavHeader, Content } from './containers';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavHeader />
          <Content />
        </div>
      </Router>
    );
  }
}

export default App;
