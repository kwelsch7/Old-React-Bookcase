import * as React from 'react';
import { Table } from './Table';
import { OptionsBox } from './OptionsBox';

export class Content extends React.Component {
  render() {
    return (
      <div className="App-content">
        <h1 className="App-intro">
          Welcome to the React Bookcase!
        </h1>
        <h2 className="App-description">
          Feel free to add, update and remove books as you please.
        </h2>
        <OptionsBox />
        <Table />
      </div>
    );
  }
}