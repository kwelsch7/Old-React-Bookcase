import * as React from 'react';
import logo from '../assets/logo.svg';
import { Link } from '../components/Link';

export class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="title-message">Welcome to the Bookcase</h2>
        <ul className="header-links">
          <li>
            <Link href="#" text="Books" />
          </li>
          <li>
            <Link href="#" text="Genres" />
          </li>
        </ul>
      </div>
    );
  }
}