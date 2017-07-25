import * as React from 'react';
import logo from '../assets/logo.svg';
import { Link } from '../components/Link';

export class NavHeader extends React.Component {
  render() {
    return (
      <nav className="App-nav-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="title-message">Konnor's React Bookcase</h2>
        <ul className="header-links">
          <li>
            <Link href="#" text="Books" className="nav-links" />
          </li>
          <li>
            <Link href="#" text="Genres" className="nav-links" />
          </li>
          <li>
            <Link href="#" text="Docs" className="nav-links" />
          </li>
        </ul>
        
      </nav>
    );
  }
}