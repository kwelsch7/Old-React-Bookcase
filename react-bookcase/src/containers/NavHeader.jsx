import React from 'react';
import logo from '../assets/logo.svg';
import { Link, Route } from 'react-router-dom';
import { Table } from './Table';

export class NavHeader extends React.Component {
  render() {
    return (
      <nav className="App-nav-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="title-message">Konnor's React Bookcase</h2>
        <ul className="header-links">
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/#">Genres</Link>
          </li>
          <li>
            <Link to="/#">Docs</Link>
          </li>
        </ul>
      </nav>
    );
  }
}