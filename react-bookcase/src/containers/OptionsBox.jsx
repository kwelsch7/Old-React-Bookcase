import React from 'react';
import { Link, Route } from 'react-router-dom';

import { NewBook } from '../components/pages/NewBook';

export class OptionsBox extends React.Component {
  render() {
    return (
      <div>
        <ul className="options-box">
          <li>
            <Link to="/newbook"><i className="fa fa-book"/>  Add new Book</Link>
          </li>
          <li>
            <Link to="/#"><i className="fa fa-undo"/>  Dump the shelf!</Link>
          </li>
          <li>
            <Link to="/#"><i className="fa fa-list-alt"/>  Genre List</Link>
          </li>
          <li>
            <Link to="/#"><i className="fa  fa-cog"/>  Page Settings</Link>
          </li>
          <li>
            <Link to="/#"><i className="fa fa-image"/>  Themes</Link>
          </li>
        </ul>

        <Route exact path="/newbook" component={NewBook} />
      </div>
    );
  }
}