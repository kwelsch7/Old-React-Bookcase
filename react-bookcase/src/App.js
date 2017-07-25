import React, { Component } from 'react';
import './styles/App.css';
import './styles/font-awesome-4.7.0/css/font-awesome.min.css';
import { NavHeader, Content } from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Content />
      </div>
    );
  }
}

export default App;
