import React, { Component } from 'react';
import './styles/App.css';
import { Header, Content } from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
