import React, { Component } from 'react';
import './styles/App.css';
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
